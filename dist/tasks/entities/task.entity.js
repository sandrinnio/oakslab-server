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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const _1 = require(".");
let Task = class Task {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", String)
], Task.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Task.prototype, "text", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_done', default: false }),
    (0, graphql_1.Field)(() => Boolean),
    __metadata("design:type", Boolean)
], Task.prototype, "isDone", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.Phase, (phase) => phase.tasks),
    (0, typeorm_1.JoinColumn)({ name: 'phase_id', referencedColumnName: 'id' }),
    (0, graphql_1.Field)(() => _1.Phase),
    __metadata("design:type", _1.Phase)
], Task.prototype, "phase", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
        name: 'created_at',
    }),
    (0, graphql_1.Field)(() => Date),
    __metadata("design:type", Date)
], Task.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
        name: 'updated_at',
    }),
    (0, graphql_1.Field)(() => Date),
    __metadata("design:type", Date)
], Task.prototype, "updatedAt", void 0);
Task = __decorate([
    (0, typeorm_1.Entity)(),
    (0, graphql_1.ObjectType)()
], Task);
exports.Task = Task;
//# sourceMappingURL=task.entity.js.map