---
sidebar_position: 1
---

# Basis Startup.cs

Eine basiskonfiguration mit folgenden Inhalten:

- Fast Endpoints
- Http Logging
- Scalar Dokumentation
- Root redirect auf Scalar Dokumenation
- Default Exception Handler

```csharp title="Program.cs"
using FastEndpoints;
using FastEndpoints.Swagger;
using Microsoft.AspNetCore.HttpLogging;
using Scalar.AspNetCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddHttpClient();
builder.Services.AddHttpLogging(options =>
{
    options.LoggingFields = HttpLoggingFields.All | HttpLoggingFields.RequestQuery;
    options.CombineLogs = true;
});

// Services ..

builder.Services.AddFastEndpoints();
builder.Services.SwaggerDocument();

var app = builder.Build();

// Scalar
app.UseOpenApi(c => c.Path = "/openapi/{documentName}.json");    
app.MapScalarApiReference();

// Redirect
app.MapRootToDocs("/scalar/v1");

app.UseHttpsRedirection();
app.UseHttpLogging();

// Fast Endpoints
app.UseDefaultExceptionHandler();
app.UseFastEndpoints();

app.Run();
```