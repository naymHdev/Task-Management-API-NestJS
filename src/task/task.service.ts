/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { TaskEntity } from 'src/db/entities/task-entity';
import { DataSource, EntityManager } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UserEntity } from 'src/db/entities/user-entity';

@Injectable()
export class TaskService {
  private manager: EntityManager;
  constructor(
    @Inject('DataSource')
    private dataSource: DataSource,
  ) {
    this.manager = this.dataSource.manager;
  }

  // Create task
  async createTask(data: CreateTaskDto) {
    try {
      const user = await this.manager.findOne(UserEntity, {
        where: { id: data.user_id },
      });

      if (!user) {
        throw new NotFoundException('User not found');
      }

      const taskData = {
        ...data,
        user_id: user,
        status: data.status || 'OPEN',
      };

      const createTask = this.manager.create(TaskEntity, taskData);

      const saveTask = await this.manager.save(TaskEntity, createTask);

      return {
        id: saveTask.id,
        title: saveTask.title,
        description: saveTask.description,
        status: saveTask.status,
        user_id: saveTask.user_id,
        created_at: saveTask.created_at,
        updated_at: saveTask.updated_at,
      };
    } catch (error) {
      throw new NotFoundException(`Error creating task: ${error.message}`);
    }
  }

  // Delete Task
  // Update Task
  // Get All Tasks
  // Get Id Base Task Task
}
