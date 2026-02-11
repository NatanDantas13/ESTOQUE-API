import { Injectable } from '@nestjs/common';
import type { UserCreatedDto } from 'src/core/dtos/user/user-created.dto';
import type { UserResponseDto } from 'src/core/dtos/user/user-response.dto';

@Injectable()
export class CreatedUserService {
  async execute(user: UserCreatedDto): Promise<UserResponseDto>{

    // primeira etapa é verificar se o usuário existe no banco de dados

    





    return {
      id: "1",
      name: "Natan",
      email: "natan.rsd13@gmail.com",
      createdAt: "12"
    }
  }
}
