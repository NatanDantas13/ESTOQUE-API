import { Module } from "@nestjs/common";
import { UserController } from "src/interface/controllers/user/user.controller";
import { CreatedUserService } from "src/interface/service/created-user/created-user.service";

@Module({
  imports: [],
  controllers: [UserController],
  providers: [CreatedUserService]
})

export class UserModule {}