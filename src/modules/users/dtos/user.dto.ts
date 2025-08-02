import { IsEmail, IsEnum, IsNotEmpty } from "class-validator";
import { Role } from "src/core/common/enums/role.enum";

export class UserDto {
@IsNotEmpty()
id: string

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