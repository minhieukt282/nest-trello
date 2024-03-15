import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from "./users.entity";
import { UsersService } from "./users.service";
import { UsersDto } from "./dto/users.dto";

@Controller('users')
export class UsersController {
  constructor(
    private userService: UsersService,
  ) {
  }

  @Get('find-all')
  async getAllUser(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Post('create')
  async createUser(@Body() user: UsersDto): Promise<User> {
    return await this.userService.createUser(user);
  }

}
