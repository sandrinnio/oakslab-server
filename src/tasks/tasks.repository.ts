import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskArgs, RemoveTaskArgs, UpdateTaskArgs } from './dto';
import { Phase, Task } from './entities';
import { PhasePayload } from './payloads';

@Injectable()
export class TasksRepository {
  constructor(
    @InjectRepository(Task)
    private readonly tasksRepository: Repository<Task>,
    @InjectRepository(Phase)
    private readonly phasesRepository: Repository<Phase>,
  ) {}

  async createPhases() {
    const phases = await this.phasesRepository.find();
    if (phases.length === 0) {
      await this.phasesRepository.save([
        { title: 'Foundation' },
        { title: 'Discovery' },
        { title: 'Delivery' },
      ]);
    } else {
      console.log('Phases already exist');
    }
  }

  async getPhasesTasks(): Promise<PhasePayload[]> {
    const phases = await this.phasesRepository.find({
      order: { title: 'DESC', tasks: { createdAt: 'ASC' } },
    });
    let prevPhaseCompleted: boolean;
    return phases.map((phase, index) => {
      const tasksInPhaseCompleted = phase.tasks.filter((task) => task.isDone);
      const allTasksCompleted =
        tasksInPhaseCompleted.length !== 0 &&
        tasksInPhaseCompleted.length === phase.tasks.length;
      let isDisabled = false;
      if (index !== 0) {
        isDisabled = prevPhaseCompleted ? false : true;
        prevPhaseCompleted = false;
      }
      prevPhaseCompleted = allTasksCompleted && true;
      return {
        ...phase,
        allTasksCompleted,
        isDisabled,
      };
    });
  }

  async createTask(createTaskArgs: CreateTaskArgs) {
    const phase = await this.phasesRepository.findOne({
      where: { id: createTaskArgs.record.phaseId },
    });
    if (!phase) {
      throw new NotFoundException('phase_not_found');
    }
    const task = this.tasksRepository.create({
      ...createTaskArgs.record,
      phase,
    });
    return this.tasksRepository.save(task);
  }

  async updateTask(updateTaskArgs: UpdateTaskArgs) {
    const { id, isDone } = updateTaskArgs.record;
    await this.tasksRepository.update(id, { isDone });
    return this.tasksRepository.findOne({ where: { id } });
  }

  async removeTask(removeTaskArgs: RemoveTaskArgs) {
    const deleteResponse = await this.tasksRepository.delete({
      id: removeTaskArgs.record.id,
    });
    if (!deleteResponse.affected) {
      throw new NotFoundException(removeTaskArgs.record.id);
    }
  }
}
