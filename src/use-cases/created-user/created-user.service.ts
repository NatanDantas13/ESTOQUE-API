import { Inject, Injectable } from '@nestjs/common';
import type { UserCreatedDto } from 'src/core/dtos/user/user-created.dto';
import type { UserResponseDto } from 'src/core/dtos/user/user-response.dto';
import * as bcrypt from 'bcrypt';
import { Logger  } from '@nestjs/common';
import type { IUserRepository } from 'src/domain/repositories/user.repository';

@Injectable()
export class CreatedUserService {
  private readonly logger = new Logger(CreatedUserService.name);

  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: IUserRepository
  ){}

  async execute(user: UserCreatedDto): Promise<UserResponseDto>{ 
    try {
      this.logger.log('Creating user with email: ' + user.email)

      const hashedPassword = await bcrypt.hash(user.password, 10)

      const userCompleted = {
        ...user,
        password: hashedPassword
      }

      return await this.userRepository.create(userCompleted)

    }catch (error){
      throw error
    }

  }
}
