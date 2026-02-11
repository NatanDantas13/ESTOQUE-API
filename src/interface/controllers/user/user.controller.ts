import { Body, Controller, Post } from '@nestjs/common';
import type { UserCreatedDto } from 'src/core/dtos/user/user-created.dto';
import { UserResponseDto } from 'src/core/dtos/user/user-response.dto'
import { CreatedUserService } from 'src/interface/service/created-user/created-user.service';



@Controller('user')
export class UserController {
  constructor(
    private readonly createdUserService: CreatedUserService
  ){}


  @Post('')
  create(@Body() user: UserCreatedDto): Promise<UserResponseDto> {
    return this.createdUserService.execute(user)
  }
}
