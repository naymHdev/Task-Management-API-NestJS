import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskEntity } from 'src/db/entities/task-entity';
import { UserEntity } from 'src/db/entities/user-entity';

@Module({
  imports: [TypeOrmModule.forFeature([TaskEntity, UserEntity])],
  providers: [TaskService],
  exports: [TaskService],
})
export class TaskModule {}
