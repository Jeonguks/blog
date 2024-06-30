import express, { Express, Request, Response } from 'express';
import path from 'path';

const app: Express = express();
const port = 8080;

app.use(express.static(path.join(__dirname, '..', 'build')));

app.get('/', (req:Request, res:Response) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.get('*', (req:Request, res:Response) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});


app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});