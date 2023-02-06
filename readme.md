# Tutorial walkthrough: deploying JS server
- `mkdir <folder>`
- `npm init`
- `npm install nodemon`, `npm install express`, `npm install mongoose`, `npm install dotenv`
- create `server.js`, `app.js`, `config.env`, `.gitignore` in root directory
- in `app.js`, need to add `app.use(express.json({ limit: '10kb' }));`