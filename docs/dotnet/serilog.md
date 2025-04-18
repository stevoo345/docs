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
                "Microsoft.AspNetCore.Diagnostics.ExceptionHandlerMiddleware": "Fatal",
                "Microsoft.AspNetCore.HttpLogging.HttpLoggingMiddleware": "Information"
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

## Http Logging

```csharp title="Program.cs"
builder.Services.AddHttpLogging(options =>
{
    options.LoggingFields = HttpLoggingFields.RequestPath | HttpLoggingFields.RequestBody |
                            HttpLoggingFields.RequestMethod | HttpLoggingFields.RequestQuery |
                            HttpLoggingFields.ResponseBody | HttpLoggingFields.Duration;
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

Mehr Info unter: https://learn.microsoft.com/de-de/aspnet/core/fundamentals/http-logging/?view=aspnetcore-9.0

## Http Logging Interceptor

Mittels Http Logging Interceptor lassen sich das http logging verhalten anpassen.
Unten gibt es ein Beispiel für wie man spezielle Pfade exkludieren könnte vom Logging.
https://learn.microsoft.com/en-us/aspnet/core/fundamentals/http-logging/?view=aspnetcore-9.0#ihttplogginginterceptor

```csharp title="HttpLoggingInterceptor.cs"
internal sealed class HttpLoggingInterceptor : IHttpLoggingInterceptor
{
    public ValueTask OnRequestAsync(HttpLoggingInterceptorContext logContext)
    {
        IReadOnlyList<string> excludedPaths = ["/scalar/", "/openapi/"];
        if (excludedPaths.Any(prefix => logContext.HttpContext.Request.Path.Value?.StartsWith(prefix) ?? false))
            logContext.LoggingFields = HttpLoggingFields.None;

        return default;
    }

    public ValueTask OnResponseAsync(HttpLoggingInterceptorContext logContext)
    {
        return default;
    }
}
```

```csharp title="Program.cs"
builder.Services.AddHttpLogging(options =>
{
    ...
});
builder.Services.AddHttpLoggingInterceptor<HttpLoggingInterceptor>();
```

## Debugging

Falls es mal Probleme geben sollte und nichts in die Logs selbst geschrieben wird.

```csharp title="Program.cs"
// Enable Serilog self-logging to debug Elasticsearch sink issues
SelfLog.Enable(msg => Debug.WriteLine(msg));
SelfLog.Enable(Console.Error);
```