"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LessonResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const lesson_service_1 = require("./lesson.service");
const lesson_type_1 = require("./lesson.type");
let LessonResolver = class LessonResolver {
    constructor(lessonService) {
        this.lessonService = lessonService;
    }
    lesson() {
        return {
            id: 'dsdfvsdfbgfbnh',
            name: "akrem",
            startDate: (new Date().toISOString()),
            endDate: (new Date().toISOString()),
        };
    }
    createLesson(name, startDate, endDate) {
        return this.lessonService.createLesson(name, startDate, endDate);
    }
};
__decorate([
    (0, graphql_1.Query)(returns => lesson_type_1.LessonType),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LessonResolver.prototype, "lesson", null);
__decorate([
    (0, graphql_1.Mutation)(returns => lesson_type_1.LessonType),
    __param(0, (0, graphql_1.Args)('name')),
    __param(1, (0, graphql_1.Args)('startDate')),
    __param(2, (0, graphql_1.Args)('endDate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], LessonResolver.prototype, "createLesson", null);
LessonResolver = __decorate([
    (0, graphql_1.Resolver)(of => lesson_type_1.LessonType),
    __metadata("design:paramtypes", [lesson_service_1.LessonService])
], LessonResolver);
exports.LessonResolver = LessonResolver;
//# sourceMappingURL=lesson.resolver.js.map