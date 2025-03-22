## Elasticsearch + Kibana

## Local Development

https://www.elastic.co/guide/en/elasticsearch/reference/current/quickstart.html

- Docker muss installiert sein
- WSL aktiviert

```powershell 
curl -fsSL https://elastic.co/start-local | sh
```

Elasticsearch: http://localhost:9200
Kibana: http://localhost:5601

API Key + Credentials notieren.

## .NET

Installieren:

- Elastic.Serilog.Sinks

```json lines 
{
    "Serilog": {
        "Using": [
            ...,
            "Elastic.Serilog.Sinks"
        ],
        "WriteTo": [
            {
                "Name": "Elasticsearch",
                "Args": {
                    "bootstrapMethod": "Silent",
                    "nodes": [
                        "http://localhost:9200"
                    ],
                    "apiKey": "T01OTXZaVUJjbFRSUGFBWjFrbnM6bVhiTG5KbnRRZEttYUlJQ2dvd1BJUQ=="
                    //"dataStream": "my-app-logs"
                }
            }
        ]
    }
}
```

## Kibana

Unter Analytics -> Discover -> Data View -> Create a data view -> logs-dotnet-default

Rechts muss der Data Stream bereits angezeigt werden. 

