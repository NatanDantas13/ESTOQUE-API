import { IsString, MaxLength, MinLength } from "class-validator";

export class UserCreatedDto {
  @IsString()
  @MaxLength(50)
  name: string

  @IsString()
  email: string

  @IsString()
  @MinLength(8)
  password: string
}