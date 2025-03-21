# Serilog

## Install Nuget

- Serilog.AspNetCore
- Serilog.Settings.Configuration (Appsettings configuration)
- Serilog.Enrichers.ClientInfo (CorrelationId)

## Code

```csharp title="Program.cs"
builder.Host.UseSerilog((context, config) =>
{
    config.ReadFrom.Configuration(context.Configuration);
});
```

```json title="appsettings.json"
{
    "Serilog": {
        "Using": [
            "Serilog.Sinks.Console"
        ],
        "MinimumLevel": {
            "Default": "Information",
            "Override": {
                "Microsoft.AspNetCore": "Warning",
                "Microsoft.AspNetCore.Diagnostics.ExceptionHandlerMiddleware": "Fatal"
            }
        },
        "WriteTo": [
            {
                "Name": "Console",
                "Args": {
                    "outputTemplate": "[{Timestamp:yyyy-MM-dd HH:mm:ss} {Level:u3}] ({CorrelationId}) {Message}{NewLine}{Exception}"
                }
            }
        ],
        "Enrich": [
            "FromLogContext",
            {
                "Name": "WithCorrelationId",
                "Args": {
                    "headerName": "correlation-id",
                    "addValueIfHeaderAbsence": true
                }
            }
        ],
        "Properties": {
            "Application": "Timeline"
        }
    }
}
```

## Http Logging (Neu)

```csharp title="Program.cs"
builder.Services.AddHttpLogging(options =>
{
    options.LoggingFields = HttpLoggingFields.RequestBody | HttpLoggingFields.ResponseBody |
                            HttpLoggingFields.RequestMethod | HttpLoggingFields.RequestQuery |
                            HttpLoggingFields.Duration;
    options.RequestBodyLogLimit = 2028;
    options.ResponseBodyLogLimit = 2028;
    //options.CombineLogs = true;
});

...

app.UseHttpLogging();
```

```json lines title="appsettings.json"
{
    "Serilog": {
        "MinimumLevel": {
            "Override": {
                // ...
                "Microsoft.AspNetCore.HttpLogging.HttpLoggingMiddleware": "Information"
            }
        }
    }
}
```

## Request Response Logging (Alt)

```csharp title="RequestResponseLoggingOptions.cs"
public class RequestResponseLoggingOptions
{
    public HashSet<string> ExcludePathStartsWith { get; set; } = [];
    public int MaxBodyLength { get; set; } = 2048;
}
```

```csharp title="RequestResponseLoggingMiddleware.cs"
public class RequestResponseLoggingMiddleware(
    RequestDelegate next,
    ILogger<RequestResponseLoggingMiddleware> logger,
    IOptions<RequestResponseLoggingOptions> requestResponseLoggingOptions)
{
    private readonly RequestResponseLoggingOptions _options = requestResponseLoggingOptions.Value;

    public async Task InvokeAsync(HttpContext context)
    {
        // Skip logging for excluded paths
        if (_options.ExcludePathStartsWith.Any(prefix => context.Request.Path.Value!.StartsWith(prefix)))
        {
            await next(context);
            return;
        }

        // Log the request
        context.Request.EnableBuffering();
        var requestBody = await ReadStreamAsync(context.Request.Body);
        var queryString = context.Request.QueryString.HasValue ? context.Request.QueryString.Value : string.Empty;
        var truncatedRequestBody = TruncateBody(requestBody);
        logger.LogInformation(
            $"Request: {context.Request.Method} {context.Request.Path}{queryString} {truncatedRequestBody}");
        context.Request.Body.Position = 0;

        // Capture the response
        var originalResponseBodyStream = context.Response.Body;
        using var responseBody = new MemoryStream();
        context.Response.Body = responseBody;

        await next(context);

        // Log the response
        context.Response.Body.Seek(0, SeekOrigin.Begin);
        var responseBodyText = await new StreamReader(context.Response.Body).ReadToEndAsync();
        var truncatedResponseBody = TruncateBody(responseBodyText);
        logger.LogInformation($"Response: {context.Response.StatusCode} {truncatedResponseBody}");
        context.Response.Body.Seek(0, SeekOrigin.Begin);

        await responseBody.CopyToAsync(originalResponseBodyStream);
    }

    private async Task<string> ReadStreamAsync(Stream stream)
    {
        using var reader = new StreamReader(stream, Encoding.UTF8, leaveOpen: true);
        var result = await reader.ReadToEndAsync();
        stream.Seek(0, SeekOrigin.Begin);
        return result;
    }

    private string TruncateBody(string body)
    {
        if (body.Length > _options.MaxBodyLength) return body[.._options.MaxBodyLength] + "... [TRUNCATED]";
        return body;
    }
}
```

```csharp title="Program.cs"
builder.Services
    .AddOptions<RequestResponseLoggingOptions>()
    .Bind(builder.Configuration.GetSection("RequestResponseLogging"))
    .ValidateDataAnnotations()
    .ValidateOnStart();
    
...

app.UseMiddleware<RequestResponseLoggingMiddleware>();
```

```json title="appsettings.json"
{
    "RequestResponseLogging": {
        "ExcludePathStartsWith": [
            "/scalar/",
            "/openapi/"
        ],
        "MaxBodyLength": 2048
    }
}
```