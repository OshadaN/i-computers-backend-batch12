import Student from '../Models/student.js';
import { isAdmin } from './userController.js';

export function getAllStudents(req, res) {
    Student.find().then(students => {
            console.log(students);
            res.json(students);
        });
    };


export function createStudent(req, res) {
        console.log(req.user);
        
        if(isAdmin(req)){
             const student = new Student(req.body);

        student.save().then(() => {
            res.json({ message: "Student saved successfully" });
        });

        }else{
            res.status(403).json({ message: "Forbidden: You do not have permission to create a student." });
        }

       
    };
