import { LessonService } from "./lesson.service";
export declare class LessonResolver {
    private lessonService;
    constructor(lessonService: LessonService);
    lesson(): {
        id: string;
        name: string;
        startDate: string;
        endDate: string;
    };
    createLesson(name: string, startDate: string, endDate: string): Promise<import("./lesson.entity").Lesson>;
}
