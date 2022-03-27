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
exports.PhasePayload = void 0;
const graphql_1 = require("@nestjs/graphql");
const entities_1 = require("../entities");
let PhasePayload = class PhasePayload {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", String)
], PhasePayload.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], PhasePayload.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => [entities_1.Task]),
    __metadata("design:type", Array)
], PhasePayload.prototype, "tasks", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean),
    __metadata("design:type", Boolean)
], PhasePayload.prototype, "allTasksCompleted", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean),
    __metadata("design:type", Boolean)
], PhasePayload.prototype, "isDisabled", void 0);
PhasePayload = __decorate([
    (0, graphql_1.ObjectType)()
], PhasePayload);
exports.PhasePayload = PhasePayload;
//# sourceMappingURL=phase.payload.js.map