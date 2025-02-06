import { Body, Controller, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post('createTask')
  async createTask(@Body() data: CreateTaskDto) {
    return await this.taskService.createTask(data);
  }
}
