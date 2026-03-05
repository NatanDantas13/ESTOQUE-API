import { Module } from "@nestjs/common";
import { DrizzleUserRepository } from "src/infraestructure/repositories/user/user-drizzle.repository";
import { UserController } from "src/interface/controllers/user/user.controller";
import { CreatedUserService } from "src/use-cases/created-user/created-user.service";

@Module({
  imports: [],
  controllers: [UserController],
  providers: [CreatedUserService, 
    {
    provide: "USER_REPOSITORY",
    useClass: DrizzleUserRepository
  }]
})

export class UserModule {}