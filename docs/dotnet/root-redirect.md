# Redirect Extension

Eine Extension um root auf einen anderen Pfad zu mappen. Zum Beispiel für Scalar Dokumenation.

```csharp title="DocumentationRedirectExtensions.cs"
public static class DocumentationRedirectExtensions
{
    public static void MapRootToDocs(this IEndpointRouteBuilder endpoints, string redirectPath)
    {
        endpoints.MapGet("/", context =>
        {
            context.Response.Redirect(redirectPath, true);
            return Task.CompletedTask;
        });
    }
}
```

```csharp title="Program.cs"
app.MapRootToDocs("/scalar/v1");
```

