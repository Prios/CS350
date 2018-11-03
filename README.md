

## Prerequisites

This project has dependencies that require **Node 8.x.x and NPM 3.x.x above**.

## Installation

1. Download and unpack
2. npm install
3. npm run server:dev
4. Point your browser to [http://localhost:4200](http://localhost:4200)

 
## App structure

```
|-- e2e         # end-to-end tests directory 
...
|
|-- src
|   |-- app
|   |   |-- +feature-module-1        # by convension async modules are prefixed with + sign            
|   |       |-- feature-module-1.component.html
|   |       |-- feature-module-1.component.ts
|   |       |-- feature-module-1.module.ts
|   |       |-- feature-module-1-routing.module.ts
|   |   |-- +feature-module-2
|   |   ...
|   |   |-- core                      # core module for app wide injectable service instancess 
|   |       |-- api                   
|   |       |-- guards                # prevent core module of being loaded twice
|   |       |-- core.module.ts        
|   |
|   |   |-- shared                    # dir with common directives, components, services, pipes 
|   |       |-- layout
|   |   ...    
|   |   |-- app.module.ts       # app root module
|   |   |-- app.resolver.ts     # here you can async fetch data for app before init  
|   |   |-- app.routing.ts      # top routes definition
|   |   |-- app.service.ts      # global app state service
|   |       
|   |-- assets           # static resources folder
|   |   |-- css   
|   |   |-- fonts   
|   |   ...   
|   |-- environment      # env specific variables
|   |   |-- environment.prod.ts   
|   |   |-- environment.ts        
|   |-- custom-typings.d.ts      # typescript definitions tweaks 
|   |-- index.html              
|   |-- main.ts          # app entry point 
|   |-- polyfills.ts     # polyfills for browsers
|   |-- style.css        # project specific styles
|   |-- test.ts          # unit tests entry point
|   |-- tsconfig.json    # typescript config
|   |-- vendor.ts        # common vendor chunk
|   
...
|-- .angular-cli.json           # cli project config
|-- karma.conf.js              # unit tests config
|-- package.json
|-- protractor.conf.js         # e2e tests config
...

```
