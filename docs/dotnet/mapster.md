# Mapster

## Install NuGet

- Mapster

## Code

```csharp title="ServiceExtensions.cs"
public static class ServiceExtensions
{
    public static void AddMapster(this IServiceCollection services, Assembly? assembly = null)
    {
        // Use the calling assembly if none provided
        assembly ??= Assembly.GetCallingAssembly();

        // Get the global config
        var config = TypeAdapterConfig.GlobalSettings;

        // Scan and register all IRegister implementations
        config.Scan(assembly);
    }
}
```

```csharp title="MovieConfig.cs"
public class MovieConfig : IRegister
{
    private const string MediaBaseUrl = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";

    public void Register(TypeAdapterConfig config)
    {
        config.NewConfig<TopRatedMovie, Movie>()
            .Map(x => x.MovieDbId, x => x.Id)
            .Map(x => x.ImageUrl, x => MediaBaseUrl + x.PosterPath)
            .Map(x => x.Release, x => DateOnly.Parse(x.ReleaseDate))
            .Map(x => x.VoteAverage, x => Math.Round(x.VoteAverage, 2))
            .Ignore(x => x.Id);
    }
}
```

```csharp title="Program.cs"
builder.Services.AddMapster();
```

