import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./users.entity";
import { Repository } from "typeorm";
import { UsersDto } from "./dto/users.dto";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find({
      relations: {
        cols: {
          rows: true
        }
      }
    });
  }

  async createUser(user: UsersDto): Promise<User> {
    return await this.usersRepository.save(user);
  }

  async findUserById(userId: number): Promise<User> {
    return await this.usersRepository.findOneBy({
      userId: userId
    });
  }

}
