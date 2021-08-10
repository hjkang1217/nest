import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async create(User): Promise<void> {
    await this.userRepository.insert(User);
  }
}
