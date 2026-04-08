import { createStudent, getstudentById, getStudentByIdAndUpdate, countStudents, deleteStudent } from "../controllers/student.controller.js";
import express from "express";
const router = express.Router();
router.post('/register', createStudent);
router.get('/get-student/:id', getstudentById);
router.put('/update-student/:id', getStudentByIdAndUpdate);
router.get('/count-students', countStudents);
router.delete('/delete-student/:id', deleteStudent);
export { router as studentRoute };
//# sourceMappingURL=student.routes.js.map