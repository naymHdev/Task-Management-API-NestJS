import {
  IsNotEmpty,
  IsOptional,
  IsEnum,
  IsInt,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateTaskDto {
  @IsOptional()
  @IsUUID('4', { message: 'id must be a valid UUID' })
  id?: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsEnum(['OPEN', 'IN_PROGRESS', 'DONE'], {
    message: 'Status must be OPEN, IN_PROGRESS, or DONE',
  })
  status: 'OPEN' | 'IN_PROGRESS' | 'DONE' = 'OPEN';

  @IsInt({ message: 'user_id must be an integer' })
  @IsNotEmpty()
  user_id: string;

  @IsOptional()
  created_at?: Date;

  @IsOptional()
  updated_at?: Date;
}
