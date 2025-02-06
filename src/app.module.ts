import { Module } from '@nestjs/common';
import { DBModule } from './db/db.module';
import { ConfigModule } from '@nestjs/config';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { TaskModule } from './task/task.module';
import { TaskController } from './task/task.controller';
import { TaskService } from './task/task.service';

@Module({
  imports: [
    DBModule,
    ConfigModule.forRoot({ isGlobal: true }),
    UserModule,
    TaskModule,
  ],
  controllers: [UserController, TaskController],
  providers: [UserService, TaskService],
})
export class AppModule {}
