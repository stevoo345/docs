# Entity Framework

## Install Nuget

- Microsoft.EntityFrameworkCore
- Microsoft.EntityFrameworkCore.SqlServer
- Microsoft.EntityFrameworkCore.Design (dotnet ef)

## Code

```csharp title="DataContext.cs"
public class DataContext(IConfiguration configuration) : DbContext
{
    public DbSet<Movie> Movies { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlServer(configuration.GetConnectionString("SqlServer"));
    }
}
```

```csharp title="Program.cs"
builder.Services.AddDbContext<DataContext>();
```

```json title="appsettings.json"
{
    "ConnectionStrings": {
        "SqlServer": "..."
    }
}
```

## Enable Sql Logging

```csharp title="DataContext.cs"
public class DataContext(ILoggerFactory loggerFactory, IConfiguration configuration) : DbContext
{
    public DbSet<Movie> Movies { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder
#if DEBUG
            .UseLoggerFactory(loggerFactory)
            .EnableSensitiveDataLogging()
            .EnableDetailedErrors()
#endif
            .UseSqlServer(configuration.GetConnectionString("SqlServer"));
    }
}
```

## Serilog Output Template

### Explanation :lj Specifier

The :lj (literal JSON) specifier tells Serilog to render the message with its line breaks rather than escaping them.
This means that any \r\n characters in your EF Core SQL logs will be rendered as actual newlines in the output.

```json title="appsettings.json"
{
    "Serilog": {
        "WriteTo": {
            "Name": "Console",
            "Args": {
                "outputTemplate": "..{Message:lj}.."
            }
        }
    }
}
```