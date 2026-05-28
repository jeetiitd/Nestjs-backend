import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
    private students = [
        { id: 1, name: 'Student 1', age: 20 },
        { id: 2, name: 'Student 2', age: 22 },
        { id: 3, name: 'Student 3', age: 21 },
    ];
    getAllStudents() {
        return this.students;  // returns the list of students
    }
    getStudentById(id: number) {
        const student = this.students.find(student => student.id === id);  // finds and returns a student by its ID
        if(!student) {
            throw new NotFoundException(`Student with ID ${id} not found`);  // throws an exception if the student is not found
        }
        return student;
    }
    //post
    createStudent(student: { name: string; age: number }) {
        const newStudent = {
            id: this.students.length + 1,  // generates a new ID based on the current length of the students array
            ...student,  // spreads the properties of the student object passed as an argument
        };
        this.students.push(newStudent);
        return newStudent;  // returns the newly created student
    }
    putStudent(id: number, student: { name: string; age: number }) {
        const index = this.students.findIndex(student => student.id === id);  // finds the index of the student to be updated by its ID
        if(index === -1) {
            throw new NotFoundException(`Student with ID ${id} not found`);  // throws an exception if the student is not found
        }
        this.students[index] = { id, ...student };  // updates the student at the found index with the new data
        return this.students[index];  // returns the updated student
    }
    //patch
    patchStudent(id: number, student:Partial<{ name: string; age: number }>) {
        const s = this.getStudentById(id);
        Object.assign(s, student);  // updates the student with the provided partial data
        return s;  // returns the updated student

         
        }   
    //DELETW
    deleteStudent(id: number) {
        const index = this.students.findIndex(student => student.id === id);
        if(index === -1) {
            throw new NotFoundException(`Student with ID ${id} not found`);  // throws an exception if the student is not found
        }
        this.students.splice(index, 1);  // removes the student from the array
        return { message: `Student with ID ${id} deleted successfully` };  // returns a success message 
        }
}
