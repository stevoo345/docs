# Options Pattern

```csharp title="startup.cs"
builder.Services
    .AddOptions<MovieDbOptions>()
    .Bind(builder.Configuration.GetSection("MovieDb"))
    .ValidateDataAnnotations()
    .ValidateOnStart();
```

```csharp title="MovieDbOptions.cs"
public class MovieDbOptions
{
    [Required]
    public required string AccessToken { get; set; }
}
```

```json title="appsettings.json"
{
    "MovieDb": {
        "AccessToken": "..."
    }
}

```

## Komplexe Validierung

https://learn.microsoft.com/de-de/dotnet/core/extensions/options#ivalidateoptions-for-complex-validation

## Mehr Info unter

https://learn.microsoft.com/en-us/aspnet/core/fundamentals/configuration/options