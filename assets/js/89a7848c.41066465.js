"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[305],{6696:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"dotnet/ef-core","title":"Entity Framework","description":"Install Nuget","source":"@site/docs/dotnet/ef-core.md","sourceDirName":"dotnet","slug":"/dotnet/ef-core","permalink":"/docs/dotnet/ef-core","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Dotnet EF Cheatsheet","permalink":"/docs/dotnet/dotnet ef"},"next":{"title":"Mapster","permalink":"/docs/dotnet/mapster"}}');var o=n(4848),i=n(8453);const s={},c="Entity Framework",l={},a=[{value:"Install Nuget",id:"install-nuget",level:2},{value:"Code",id:"code",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"entity-framework",children:"Entity Framework"})}),"\n",(0,o.jsx)(t.h2,{id:"install-nuget",children:"Install Nuget"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Microsoft.EntityFrameworkCore"}),"\n",(0,o.jsx)(t.li,{children:"Microsoft.EntityFrameworkCore.SqlServer"}),"\n",(0,o.jsx)(t.li,{children:"Microsoft.EntityFrameworkCore.Design (dotnet ef)"}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"code",children:"Code"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-csharp",metastring:'title="DataContext.cs"',children:'public class DataContext(IConfiguration configuration) : DbContext\n{\n    public DbSet<Movie> Movies { get; set; }\n\n    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)\n    {\n        optionsBuilder.UseSqlServer(configuration.GetConnectionString("SqlServer"));\n    }\n}\n'})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-csharp",metastring:'title="programm.cs"',children:"builder.Services.AddDbContext<DataContext>();\n"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",metastring:'title="appsettings.json"',children:'{\n    "ConnectionStrings": {\n        "SqlServer": "..."\n    }\n}\n'})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var r=n(6540);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);