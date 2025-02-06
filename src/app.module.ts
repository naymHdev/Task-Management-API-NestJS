import { Module } from '@nestjs/common';
import { DBModule } from './db/db.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';

@Module({
  imports: [DBModule, ConfigModule.forRoot({ isGlobal: true }), UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
