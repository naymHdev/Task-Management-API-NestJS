import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { UserEntity } from './user-entity';

@Entity('tasks')
export class TaskEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100, unique: true })
  title: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  description: string;

  @Column({
    type: 'enum',
    enum: ['OPEN', 'IN_PROGRESS', 'DONE'],
    default: 'OPEN',
  })
  status: 'OPEN' | 'IN_PROGRESS' | 'DONE';

  @ManyToOne(() => UserEntity, { nullable: false })
  @JoinColumn({ name: 'user_id' })
  user_id: UserEntity;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  created_at: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updated_at: Date;
}
