import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { UserService } from '../services/user.service';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';

@Controller('api/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Get all users
  @Get()
  async getAllUsers() {
    return this.userService.getAllUsers();
  }

  // Create a new user
  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  // Get user by ID
  @Get(':id')
  async getUserById(@Param('id') id: number) {
    return this.userService.getUserById(+id);
  }

  // Update user by ID
  @Patch(':id')
  async updateUser(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.updateUser(+id, updateUserDto);
  }

  // Delete user by ID
  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    return this.userService.deleteUser(+id);
  }
}
