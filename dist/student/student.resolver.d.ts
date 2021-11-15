import { CreateStudentInput } from "./student.input";
import { StudentService } from "./student.service";
export declare class studentResolver {
    private studentService;
    constructor(studentService: StudentService);
    student(id: string): Promise<import("./student.entity").Student>;
    students(): Promise<import("./student.entity").Student[]>;
    createStudent(createStudentInput: CreateStudentInput): Promise<import("./student.entity").Student>;
}
