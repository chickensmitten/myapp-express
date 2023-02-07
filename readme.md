# Tutorial walkthrough: deploying JS server
- `mkdir <folder>`
- `npm init`
- Essentials: `npm install nodemon`, `npm install express`, `npm install mongoose`, `npm install dotenv`
- Safety: `npm install express-rate-limit helmet express-mongo-sanitize xss-clean cookie-parser compression cors`
- create `server.js`, `app.js`, `config.env`, `.gitignore` in root directory
- in `app.js`, need to add `app.use(express.json({ limit: '10kb' }));`