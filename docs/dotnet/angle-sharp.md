# Angle Sharp

## Install Packages

- AngleSharp
- (Optional) AngleSharp.Js

## Basic Example

```csharp title="Example.cs"
public async Task StartDownload(string url)
{
    var config = Configuration.Default.WithDefaultLoader();
    var context = BrowsingContext.New(config);
    var document = await context.OpenAsync(url);
    var imageLinks = document
        .QuerySelectorAll(".content-inner p a")
        .OfType<IHtmlAnchorElement>()
        .Select(x => x.Href)
        .ToList();

    await fileDownloaderService.DownloadFilesWithProgressAsync(imageLinks, $"{url.GetLastPart()}");
}
```

## Basic Example (JS Loading)

```csharp title="Example.cs"
public async Task StartDownload(string url)
{
    var config = Configuration.Default.WithDefaultLoader().WithJs(); // Add with JS
    var context = BrowsingContext.New(config);
    var document = await context.OpenAsync(url);
    await document.WaitUntilAvailable(ct); // Wait for page loading
    var imageLinks = document
        .QuerySelectorAll(".content-inner p a")
        .OfType<IHtmlAnchorElement>()
        .Select(x => x.Href)
        .ToList();

    await fileDownloaderService.DownloadFilesWithProgressAsync(imageLinks, $"{url.GetLastPart()}");
}
```

## Helpful Extension

```csharp title="AngleSharpExtensions.cs"
public static class AngleSharpExtensions
{
    public static T? QuerySelector<T>(this IParentNode node, string selectors)
        where T : class, IElement
    {
        return node.QuerySelector(selectors) as T;
    }
}

public void Test() 
{
    ...
    var image = document.querySelector<IHtmlImageElement>('img');
    ...
}
```

