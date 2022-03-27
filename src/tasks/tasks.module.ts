import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksResolver } from './tasks.resolver';
import { TasksService } from './tasks.service';
import { Task, Phase } from './entities';
import { TasksRepository } from './tasks.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Task, Phase])],
  providers: [TasksResolver, TasksService, TasksRepository],
})
export class TasksModule {}
