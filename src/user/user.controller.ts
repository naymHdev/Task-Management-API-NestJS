import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('createUSer')
  async createUSer(@Body() data: CreateUserDto) {
    return await this.userService.createUser(data);
  }
}
