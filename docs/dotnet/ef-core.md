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