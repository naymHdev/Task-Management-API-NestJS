import { Module } from '@nestjs/common';
import { DBModule } from './db/db.module';
import { ConfigModule } from '@nestjs/config';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [DBModule, ConfigModule.forRoot({ isGlobal: true }), UserModule],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
