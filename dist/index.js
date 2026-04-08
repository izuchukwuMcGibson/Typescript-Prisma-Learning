import 'dotenv/config';
import express from 'express';
import { studentRoute } from "./routes/student.routes.js";
const app = express();
app.use(express.json());
app.use('/api/student', studentRoute);
console.log("DATABASE_URL:", process.env.DATABASE_URL);
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
//# sourceMappingURL=index.js.map