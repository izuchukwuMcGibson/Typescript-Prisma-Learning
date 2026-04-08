import 'dotenv/config';
import express from 'express';
import type { Express } from 'express';
import { studentRoute } from "./routes/student.routes.js";

const app: Express = express();

app.use(express.json());
app.use('/api/student',studentRoute)


console.log("DATABASE_URL:", process.env.DATABASE_URL);

app.listen(3000, () :void=> {
  console.log('Server is running on port 3000');
});