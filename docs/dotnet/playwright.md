# Playwright

## Install Package

- Microsoft.Playwright

## Setup

```csharp title="PlaywrightInstaller.cs"
public static class PlaywrightInstaller
{
    public static void Install(string browser = "chromium")
    {
        var exitCode = Microsoft.Playwright.Program.Main(new[] { "install", "--with-deps", browser });
        if (exitCode != 0) throw new Exception($"Playwright-Installation fehlgeschlagen. Exit-Code: {exitCode}");
    }
}
```

```csharp title="Program.cs"
PlaywrightInstaller.Install();
```

## Basic Example

```csharp title="Example.cs"
using var playwright = await Playwright.CreateAsync();
await using var browser = await playwright.Chromium.LaunchAsync();
var page = await browser.NewPageAsync();
await page.GotoAsync("https://playwright.dev/dotnet");
await page.ScreenshotAsync(new()
{
    Path = "screenshot.png"
});
```

