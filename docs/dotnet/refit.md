# Refit

## Install Nuget Packages

- Refit
- Refit.HttpClientFactory

## Konfiguration

```csharp title="Program.cs"
var movieDbOptions = builder.Configuration.Get<MovieDbOptions>()!;
builder.Services.AddRefitClient<IMovieDbApi>()
    .ConfigureHttpClient(c =>
    {
        c.BaseAddress = new Uri("https://api.themoviedb.org/3");
        c.DefaultRequestHeaders.Add("Authorization", $"Bearer {movieDbOptions.AccessToken}");
    });
```

```csharp title="IMovieDbApi.cs"
public interface IMovieDbApi
{
    [Get("/search/tv")]
    Task<MovieDbSearchTvSeriesDto> SearchTv(string query);

    [Get("/search/movie")]
    Task<MovieDbSearchMovieDto> SearchMovie(string query);
}
```

```csharp title="TestEndpoint.cs"
public class TestEndpoint(IMovieDbApi movieDbApi) : EndpointWithoutRequest<Ok<TopRatedMoviesDto>>
{
    public override void Configure()
    {
        Get("test");
        AllowAnonymous();
    }

    public override async Task<Ok<TopRatedMoviesDto>> ExecuteAsync(CancellationToken ct)
    {
        var topRatedMoviesDto = await movieDbApi.TopRatedMovies();
        return TypedResults.Ok(topRatedMoviesDto);
    }
}
```