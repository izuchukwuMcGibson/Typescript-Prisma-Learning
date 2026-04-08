import type { Request, Response } from "express";
import type { Student } from "@prisma/client";
type ErrorMessage = {
    error: string;
};
type SuccessMessage = {
    message: string;
    student: Student;
};
type CreateStudentBody = {
    name: string;
    email: string;
    age: number;
    studentClass: string;
};
export declare const createStudent: (req: Request<{}, {}, CreateStudentBody>, res: Response<SuccessMessage | ErrorMessage>) => Promise<Response<ErrorMessage | SuccessMessage, Record<string, any>> | undefined>;
export declare const getstudentById: (req: Request<{
    id: string;
}>, res: Response<Student | ErrorMessage>) => Promise<Response<ErrorMessage | {
    name: string;
    id: number;
    email: string;
    age: number;
    studentClass: string;
}, Record<string, any>> | undefined>;
export declare const getStudentByIdAndUpdate: (req: Request<{
    id: string;
}, {}, Student>, res: Response<Student | ErrorMessage>) => Promise<Response<ErrorMessage | {
    name: string;
    id: number;
    email: string;
    age: number;
    studentClass: string;
}, Record<string, any>>>;
export declare const countStudents: (req: Request, res: Response<{
    count: number;
} | ErrorMessage>) => Promise<Response<ErrorMessage | {
    count: number;
}, Record<string, any>>>;
export declare const deleteStudent: (req: Request<{
    id: string;
}>, res: Response<SuccessMessage | ErrorMessage>) => Promise<Response<ErrorMessage | SuccessMessage, Record<string, any>>>;
export {};
//# sourceMappingURL=student.controller.d.ts.map