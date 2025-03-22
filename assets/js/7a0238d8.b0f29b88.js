"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[544],{8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var s=n(6540);const a={},i=s.createContext(a);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:t},e.children)}},8769:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"dotnet/elastic","title":"Elasticsearch + Kibana","description":"Local Development","source":"@site/docs/dotnet/elastic.md","sourceDirName":"dotnet","slug":"/dotnet/elastic","permalink":"/docs/dotnet/elastic","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Entity Framework","permalink":"/docs/dotnet/ef-core"},"next":{"title":"Mapster","permalink":"/docs/dotnet/mapster"}}');var a=n(4848),i=n(8453);const r={},l="Elasticsearch + Kibana",c={},o=[{value:"Local Development",id:"local-development",level:2},{value:".NET",id:"net",level:2},{value:"Kibana",id:"kibana",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"elasticsearch--kibana",children:"Elasticsearch + Kibana"})}),"\n",(0,a.jsx)(t.h2,{id:"local-development",children:"Local Development"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/quickstart.html",children:"https://www.elastic.co/guide/en/elasticsearch/reference/current/quickstart.html"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Docker muss installiert sein"}),"\n",(0,a.jsx)(t.li,{children:"WSL aktiviert"}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-powershell",children:"curl -fsSL https://elastic.co/start-local | sh\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Elasticsearch: ",(0,a.jsx)(t.a,{href:"http://localhost:9200",children:"http://localhost:9200"}),"\nKibana: ",(0,a.jsx)(t.a,{href:"http://localhost:5601",children:"http://localhost:5601"})]}),"\n",(0,a.jsx)(t.p,{children:"API Key + Credentials notieren."}),"\n",(0,a.jsx)(t.h2,{id:"net",children:".NET"}),"\n",(0,a.jsx)(t.p,{children:"Installieren:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Elastic.Serilog.Sinks"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://github.com/elastic/ecs-dotnet/tree/main/src/Elastic.Serilog.Sinks#elasticsearch-appsettings-configuration",children:"https://github.com/elastic/ecs-dotnet/tree/main/src/Elastic.Serilog.Sinks#elasticsearch-appsettings-configuration"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",metastring:"lines ",children:'{\n    "Serilog": {\n        "Using": [\n            ...,\n            "Elastic.Serilog.Sinks"\n        ],\n        "WriteTo": [\n            {\n                "Name": "Elasticsearch",\n                "Args": {\n                    "bootstrapMethod": "Silent",\n                    "nodes": [\n                        "http://localhost:9200"\n                    ],\n                    "apiKey": "T01OTXZaVUJjbFRSUGFBWjFrbnM6bVhiTG5KbnRRZEttYUlJQ2dvd1BJUQ=="\n                    //"dataStream": "my-app-logs"\n                }\n            }\n        ]\n    }\n}\n'})}),"\n",(0,a.jsx)(t.h2,{id:"kibana",children:"Kibana"}),"\n",(0,a.jsx)(t.p,{children:"Unter Analytics -> Discover -> Data View -> Create a data view -> logs-dotnet-default"}),"\n",(0,a.jsx)(t.p,{children:"Rechts muss der Data Stream bereits angezeigt werden."})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}}}]);