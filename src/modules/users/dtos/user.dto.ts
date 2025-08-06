import { IsEmail, IsEnum, IsNotEmpty, IsNumber } from "class-validator";
import { Role } from "src/core/common/enums/role.enum";

export class UserDto {
@IsNumber()
id: number

@IsNotEmpty()
name: string

@IsEmail()
email: string

@IsNotEmpty()
password: string

@IsEnum(Role)
role: Role

@IsNotEmpty()
active: boolean
}