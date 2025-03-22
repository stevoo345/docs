"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[778],{6273:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"dotnet/mapster","title":"Mapster","description":"Install NuGet","source":"@site/docs/dotnet/mapster.md","sourceDirName":"dotnet","slug":"/dotnet/mapster","permalink":"/docs/dotnet/mapster","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"elastic","permalink":"/docs/dotnet/elastic"},"next":{"title":"Options Pattern","permalink":"/docs/dotnet/options-pattern"}}');var a=t(4848),i=t(8453);const r={},l="Mapster",o={},c=[{value:"Install NuGet",id:"install-nuget",level:2},{value:"Code",id:"code",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"mapster",children:"Mapster"})}),"\n",(0,a.jsx)(n.h2,{id:"install-nuget",children:"Install NuGet"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Mapster"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"code",children:"Code"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",metastring:'title="ServiceExtensions.cs"',children:"public static class ServiceExtensions\n{\n    public static void AddMapster(this IServiceCollection services, Assembly? assembly = null)\n    {\n        // Use the calling assembly if none provided\n        assembly ??= Assembly.GetCallingAssembly();\n\n        // Get the global config\n        var config = TypeAdapterConfig.GlobalSettings;\n\n        // Scan and register all IRegister implementations\n        config.Scan(assembly);\n    }\n}\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",metastring:'title="MovieConfig.cs"',children:'public class MovieConfig : IRegister\n{\n    private const string MediaBaseUrl = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";\n\n    public void Register(TypeAdapterConfig config)\n    {\n        config.NewConfig<TopRatedMovie, Movie>()\n            .Map(x => x.MovieDbId, x => x.Id)\n            .Map(x => x.ImageUrl, x => MediaBaseUrl + x.PosterPath)\n            .Map(x => x.Release, x => DateOnly.Parse(x.ReleaseDate))\n            .Map(x => x.VoteAverage, x => Math.Round(x.VoteAverage, 2))\n            .Ignore(x => x.Id);\n    }\n}\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",metastring:'title="Program.cs"',children:"builder.Services.AddMapster();\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var s=t(6540);const a={},i=s.createContext(a);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);