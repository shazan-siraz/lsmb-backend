import express from "express";
import { SutdentControllers } from "./student.controller";

const router = express.Router();

router.post("/create-student", SutdentControllers.createStudent);
router.get("/", SutdentControllers.getAllStudents);
router.get('/:studentId', SutdentControllers.getSingleStudent)

export const StudentRoutes = router;
