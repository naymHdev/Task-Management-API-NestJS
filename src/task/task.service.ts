import { Inject, Injectable } from '@nestjs/common';
import { DataSource, EntityManager } from 'typeorm';

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
  async createTask() {
    // try {
    //   const isTask = await this.manager.findOneBy({
    //     email: data.id,
    //   });
    // } catch (error) {
    //   throw new NotFoundException(`${error.message}`);
    // }
  }

  // Delete Task
  // Update Task
  // Get All Tasks
  // Get Id Base Task Task
}
