После создания ui-lib необходимо сделать следующее:

добавить в раздел architect angular.json
```        "build": {
          "options": {
            "stylePreprocessorOptions": {
              "includePaths": ["ws-style"]
            }
          }
        },
```

добавить теги в nx.json
```
"tags": ["type:lib", "scope:ui-lib"]
```
