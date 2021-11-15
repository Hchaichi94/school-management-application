import { Repository } from 'typeorm';
import { Lesson } from './lesson.entity';
export declare class LessonService {
    private lessonRepository;
    constructor(lessonRepository: Repository<Lesson>);
    createLesson(name: any, startDate: any, endDate: any): Promise<Lesson>;
}
