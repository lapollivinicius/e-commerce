import express, { type Express, type Request, type Response } from 'express';
import * as path from "node:path";

const app: Express = express();

// serving static file from public folder
const _dirname = process.cwd();
app.use(express.static(path.join(_dirname, "public")));

// default to listen the server
app.listen(3000, () => {
  console.log("server running: http://localhost:3000");
});