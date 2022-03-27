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
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const dto_1 = require("./dto");
const tasks_repository_1 = require("./tasks.repository");
let TasksService = class TasksService {
    constructor(tasksRepository) {
        this.tasksRepository = tasksRepository;
    }
    async onModuleInit() {
        await this.tasksRepository.createPhases();
    }
    getPhasesTasks() {
        return this.tasksRepository.getPhasesTasks();
    }
    createTask(createTaskArgs) {
        return this.tasksRepository.createTask(createTaskArgs);
    }
    updateTask(updateTaskArgs) {
        return this.tasksRepository.updateTask(updateTaskArgs);
    }
    removeTask(removeTaskArgs) {
        return this.tasksRepository.removeTask(removeTaskArgs);
    }
};
__decorate([
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.UpdateTaskArgs]),
    __metadata("design:returntype", void 0)
], TasksService.prototype, "updateTask", null);
__decorate([
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.RemoveTaskArgs]),
    __metadata("design:returntype", void 0)
], TasksService.prototype, "removeTask", null);
TasksService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [tasks_repository_1.TasksRepository])
], TasksService);
exports.TasksService = TasksService;
//# sourceMappingURL=tasks.service.js.map