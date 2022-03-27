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
exports.TasksRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const entities_1 = require("./entities");
let TasksRepository = class TasksRepository {
    constructor(tasksRepository, phasesRepository) {
        this.tasksRepository = tasksRepository;
        this.phasesRepository = phasesRepository;
    }
    async createPhases() {
        const phases = await this.phasesRepository.find();
        if (phases.length === 0) {
            await this.phasesRepository.save([
                { title: 'Foundation' },
                { title: 'Discovery' },
                { title: 'Delivery' },
            ]);
        }
        else {
            console.log('Phases already exist');
        }
    }
    async getPhasesTasks() {
        const phases = await this.phasesRepository.find({
            order: { title: 'DESC', tasks: { createdAt: 'ASC' } },
        });
        let prevPhaseCompleted;
        return phases.map((phase, index) => {
            const tasksInPhaseCompleted = phase.tasks.filter((task) => task.isDone);
            const allTasksCompleted = tasksInPhaseCompleted.length !== 0 &&
                tasksInPhaseCompleted.length === phase.tasks.length;
            let isDisabled = false;
            if (index !== 0) {
                isDisabled = prevPhaseCompleted ? false : true;
                prevPhaseCompleted = false;
            }
            prevPhaseCompleted = allTasksCompleted && true;
            return Object.assign(Object.assign({}, phase), { allTasksCompleted,
                isDisabled });
        });
    }
    async createTask(createTaskArgs) {
        const phase = await this.phasesRepository.findOne({
            where: { id: createTaskArgs.record.phaseId },
        });
        if (!phase) {
            throw new common_1.NotFoundException('phase_not_found');
        }
        const task = this.tasksRepository.create(Object.assign(Object.assign({}, createTaskArgs.record), { phase }));
        return this.tasksRepository.save(task);
    }
    async updateTask(updateTaskArgs) {
        const { id, isDone } = updateTaskArgs.record;
        await this.tasksRepository.update(id, { isDone });
        return this.tasksRepository.findOne({ where: { id } });
    }
    async removeTask(removeTaskArgs) {
        const deleteResponse = await this.tasksRepository.delete({
            id: removeTaskArgs.record.id,
        });
        if (!deleteResponse.affected) {
            throw new common_1.NotFoundException(removeTaskArgs.record.id);
        }
    }
};
TasksRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.Task)),
    __param(1, (0, typeorm_1.InjectRepository)(entities_1.Phase)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], TasksRepository);
exports.TasksRepository = TasksRepository;
//# sourceMappingURL=tasks.repository.js.map