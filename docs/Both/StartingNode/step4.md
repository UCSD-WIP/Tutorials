`bin/www` - the entry point for the express server.
`node_modules/` - where dependencies installed with `npm install` are located.
`public/` - public resources to be shared to the client.
`routes/` - middleware JS lives here that connect the frontend to the backend.
`utils/` - utility backend JS.
`views/` - frontend template files live here.
`app.js` - express setup is done here.
`package.json` - defines the dependencies and other configurations.
`package-lock.json` - defines the structure of the last successful `npm install`, so subsequent runs use the same dependencies.
`.gitignore` - gitignore defined for an express project to ignore stuff like `node_modules`.