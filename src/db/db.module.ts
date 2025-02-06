import { Module } from '@nestjs/common';
import { DBConnection } from './db.source';

@Module({
  providers: [...DBConnection],
  exports: [...DBConnection],
})
export class DBModule {}
