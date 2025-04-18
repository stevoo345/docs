# Options Pattern

```csharp title="Program.cs"
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

```csharp title="Program.cs"
var movieDbOptions = builder.Configuration.GetSection("MovieDb").Get<MovieDbOptions>()!;
builder.Services.AddRefitClient<IMovieDbApi>()
    .ConfigureHttpClient((c) =>
    {
        c.BaseAddress = new Uri("https://api.themoviedb.org/3");
        c.DefaultRequestHeaders.Add("Authorization", $"Bearer {movieDbOptions.AccessToken}");
    });
```

oder

```csharp title="Program.cs"
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