/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';
import { UserEntity } from './entities/user-entity';
import { TaskEntity } from './entities/task-entity';

export const DBConnection = [
  {
    provide: 'DataSource',
    useFactory: async (configService: ConfigService) => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: configService.get('DB_Host'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        synchronize: true,
        entities: [UserEntity, TaskEntity],
        logging: true,
      });
      return await dataSource.initialize();
    },
    inject: [ConfigService],
  },
];
