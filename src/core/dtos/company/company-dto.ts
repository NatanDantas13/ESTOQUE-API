import { IsString } from "class-validator";

export class CompanyDto {
  @IsString()
  name: string
}