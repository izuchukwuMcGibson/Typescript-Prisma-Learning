import type { Request, Response } from "express";
import type { Student } from "@prisma/client";
import { prisma } from "../lib/prisma.js";

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

export const createStudent = async (
  req: Request<{}, {}, CreateStudentBody>,
  res: Response<SuccessMessage | ErrorMessage>,
) => {
  try {
    const { name, email, age, studentClass } = req.body;

    if (!name || !email || !age || !studentClass) {
      res
        .status(400)
        .json({ error: "Name, email, age and studentClass are required" });
      return;
    }

    const student = await prisma.student.create({
      data: {
        name: String(name),
        email: String(email),
        age: Number(age),
        studentClass: String(studentClass),
      },
    });

    return res
      .status(201)
      .json({ message: "student created successfully", student });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to create student" });
  }
};

export const getstudentById = async (
  req: Request<{ id: string }>,
  res: Response<Student | ErrorMessage>,
) => {
  try {
    const { id } = req.params;

    if (!id || Array.isArray(id)) {
      return res.status(400).json({ error: "Student ID is required" });
    }

    const studentId = parseInt(id, 10);
    if (isNaN(studentId)) {
      return res.status(400).json({ error: "Invalid Student ID format" });
    }

    const student = await prisma.student.findUnique({
      where: { id: studentId },
    });

    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    res.status(200).json(student);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to get student" });
  }
};

export const getStudentByIdAndUpdate = async (req: Request<{id:string},{},Student>, res: Response<Student | ErrorMessage>) => {
  try {
    const { id } = req.params;
    const { name, email, age, studentClass } = req.body;
    if (!id || Array.isArray(id)) {
      return res.status(400).json({ error: "Student ID is required" });
    }
    const studentId = parseInt(id, 10);
    if (isNaN(studentId)) {
      return res.status(400).json({ error: "Invalid Student ID format" });
    }

    const student = await prisma.student.update({
      where: { id: studentId },
      data: {
        name: String(name),
        email: String(email),
        age: Number(age),
        studentClass: String(studentClass),
      },
    });
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }
    return res.status(200).json(student);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to update student" });
  }
};

export const countStudents = async (req: Request, res: Response<{ count: number } | ErrorMessage>) => {
  try {
    const count = await prisma.student.count();
    return res.status(200).json({ count });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to count students" });
  }
};

export const deleteStudent = async (req: Request<{ id: string }>, res: Response<SuccessMessage | ErrorMessage>) => {
  try {
    const { id } = req.params;

    if (!id || Array.isArray(id)) {
      return res.status(400).json({ error: "Student ID is required" });
    }

    const studentId = parseInt(id, 10);
    if (isNaN(studentId)) {
      return res.status(400).json({ error: "Invalid Student ID format" });
    }

    const student = await prisma.student.delete({
      where: { id: studentId },
    });

    return res.status(200).json({ message: "Student deleted successfully", student });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to delete student" });
  }
};
