import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsInt,
  IsDate,
} from 'class-validator';

export class CreateUserDto {
  @IsInt()
  id: string;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsOptional()
  @IsDate()
  created_at?: Date;

  @IsOptional()
  @IsDate()
  updated_at?: Date;
}
