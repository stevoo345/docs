---
sidebar_position: 1
---

# Dotnet EF Cheatsheet

```powershell title="Install Tool"
dotnet tool install --global dotnet-ef
```

```powershell title="Update Tool"
dotnet tool update --global dotnet-ef
```

```powershell title="Migration hinzufügen"
dotnet ef migrations add "Add_Movies"
```

```powershell title="Update Database"
dotnet ef database update
```