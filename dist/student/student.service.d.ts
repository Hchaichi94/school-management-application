import { Repository } from 'typeorm';
import { Student } from './student.entity';
import { CreateStudentInput } from './student.input';
export declare class StudentService {
    private studentRepository;
    constructor(studentRepository: Repository<Student>);
    createStudent(createStudentInput: CreateStudentInput): Promise<Student>;
    getStudent(id: string): Promise<Student>;
    getAllStudents(): Promise<Student[]>;
}
