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

## Startup example

```csharp title="startup.cs"
builder.Services.AddRefitClient<IMovieDbApi>()
    .ConfigureHttpClient((serviceProvider, c) =>
    {
        var movieDbOptions = serviceProvider.GetRequiredService<IOptions<MovieDbOptions>>().Value;
        ...
    });
```

## Endpoint example

```csharp title="MoviesController.cs"
public class MoviesController : ControllerBase
{
    private readonly MovieDbOptions _movieDbOptions;

    public MoviesController(IOptions<MovieDbOptions> movieDbOptions)
    {
        _movieDbOptions = movieDbOptions.Value;
    }

    // Jetzt kannst du _movieDbOptions in deinen Action-Methoden nutzen.
}
```

## Komplexe Validierung

https://learn.microsoft.com/de-de/dotnet/core/extensions/options#ivalidateoptions-for-complex-validation

## Mehr Info unter

https://learn.microsoft.com/en-us/aspnet/core/fundamentals/configuration/options