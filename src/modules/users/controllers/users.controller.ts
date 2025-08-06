import { Body, Controller, Post } from '@nestjs/common';
import { UserDto } from '../dtos/user.dto';

@Controller('users')
export class UserController {
    @Post()
    create(@Body() data: UserDto){
        return data
    }
}
