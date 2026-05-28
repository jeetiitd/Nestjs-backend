import { Controller, Get, NotFoundException, Param, Body, Post, Put, Patch, Delete } from '@nestjs/common';
import { StudentService } from './student.service';


@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService) {}  // injects the StudentService to use its methods

    @Get()  // defines a GET endpoint for the 'student' route
    getAllStudents() {
        return this.studentService.getAllStudents();  // calls the service method to get and return the list of students
    }
    @Get(':id')  // defines a GET endpoint for fetching a student by ID
    getOne(@Param  ('id') id: String) {
        const student = this.studentService.getStudentById(Number(id));  // calls the service method to find a student by ID
        if (!student) {
            throw new NotFoundException(`Student with ID ${id} not found`);  // throws an exception if the student is not found
        }
        return student;  // returns the found student
    }
    @Post()  // defines a POST endpoint for creating a new student
    createStudent(@Body() student: { name: string; age: number }) {
        return this.studentService.createStudent(student);  // calls the service method to create and return the new student
    }

    @Put(':id')  // defines a PUT endpoint for updating an existing student by ID
    updateStudent(@Param('id') id: string, @Body() student: { name: string; age: number }) {
        return this.studentService.putStudent(Number(id), student);  // calls the service method to update and return the student
    }
    @Patch(':id')  // defines a PATCH endpoint for partially updating an existing student by ID
    patchStudent(@Param('id') id: string, @Body() student: Partial<{ name: string; age: number }>) {
        return this.studentService.patchStudent(Number(id), student);  // calls the service method to partially update and return the student
    }
    @Delete(':id')  // defines a DELETE endpoint for deleting a student by ID
    deleteStudent(@Param('id') id: string) {
        return this.studentService.deleteStudent(Number(id));  // calls the service method to delete the student and return a success message
    }
}
