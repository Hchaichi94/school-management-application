import { AssignStudentsToLessonInput } from "./assign-students-to-lesson.input";
import { CreateLessonInput } from "./lesson.input";
import { LessonService } from "./lesson.service";
export declare class LessonResolver {
    private lessonService;
    constructor(lessonService: LessonService);
    lesson(id: string): Promise<import("./lesson.entity").Lesson>;
    lessons(): Promise<import("./lesson.entity").Lesson[]>;
    createLesson(createLessonInput: CreateLessonInput): Promise<import("./lesson.entity").Lesson>;
    assignStudentsToLesson(assignStudentsToLessonInput: AssignStudentsToLessonInput): Promise<import("./lesson.entity").Lesson>;
}
