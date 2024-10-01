import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  // Get all users
  async getAllUsers() {
    return await this.prisma.user.findMany({
      include: { Profile: true },
    });
  }

  // Create a user and their profile
  async createUser(createUserDto: CreateUserDto) {
    const {
      username,
      phone,
      email,
      gender,
      address,
      pincode,
      city,
      state,
      country,
    } = createUserDto;
    const user = await this.prisma.user.create({
      data: {
        username,
        phone,
        Profile: {
          create: {
            email,
            gender,
            address,
            pincode,
            city,
            state,
            country,
          },
        },
      },
      include: { Profile: true },
    });
    return user;
  }

  // Get a user by ID
  async getUserById(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      include: { Profile: true },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  // Update a user and their profile
  async updateUser(id: number, updateUserDto: UpdateUserDto) {
    const {
      username,
      phone,
      email,
      gender,
      address,
      pincode,
      city,
      state,
      country,
    } = updateUserDto;
    const user = await this.prisma.user.update({
      where: { id },
      data: {
        username,
        phone,
        Profile: {
          update: {
            email,
            gender,
            address,
            pincode,
            city,
            state,
            country,
          },
        },
      },
      include: { Profile: true },
    });
    return user;
  }

  // Delete a user by ID
  async deleteUser(id: number) {
    return await this.prisma.user.delete({
      where: { id },
    });
  }
}
