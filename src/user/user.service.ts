/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Inject, Injectable, ConflictException } from '@nestjs/common';
import { DataSource, EntityManager } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from 'src/db/entities/user-entity';

@Injectable()
export class UserService {
  private manager: EntityManager;

  constructor(@Inject('DataSource') private dataSource: DataSource) {
    this.manager = this.dataSource.manager;
  }

  // Create User
  async createUser(data: CreateUserDto) {
    try {
      // Check if username already exists
      const existingUser = await this.manager.findOneBy(UserEntity, {
        username: data.username,
      });
      if (existingUser) {
        throw new ConflictException('User already exists, please login!');
      }

      // Hash the password before storing
      const hashedPassword = await bcrypt.hash(data.password, 10);

      // Create user entity
      const createUser = this.manager.create(UserEntity, {
        username: data.username,
        password: hashedPassword,
      });

      // Save user to DB
      const savedUser = await this.manager.save(UserEntity, createUser);

      // Return only required fields
      return {
        id: savedUser.id,
        username: savedUser.username,
        created_at: savedUser.created_at,
      };
    } catch (error) {
      throw new ConflictException(error.message);
    }
  }

  // Deleted User
  async deleteUser(id: string) {
    try {
      // Find user by ID
      const user = await this.manager.findOneBy(UserEntity, { id });

      if (!user) {
        throw new Error('User not found');
      }

      // Delete user from database
      await this.manager.delete(UserEntity, user);

      return {
        message: 'User deleted successfully',
        userId: id,
      };
    } catch (error) {
      throw new Error(error.message || 'Failed to delete user');
    }
  }
}
