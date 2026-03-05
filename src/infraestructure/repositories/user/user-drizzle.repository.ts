import { Injectable, Logger } from "@nestjs/common";
import { eq } from "drizzle-orm";
import type { UserCreatedDto } from "src/core/dtos/user/user-created.dto";
import type { UserResponseDto } from "src/core/dtos/user/user-response.dto";
import type { IUserRepository } from "src/domain/repositories/user.repository";
import { DrizzleService } from "src/infraestructure/drizzle/drizzle.service"
import { userTable } from "src/schemas/schema/user/user.shema";

@Injectable()
export class DrizzleUserRepository implements IUserRepository {
  private readonly logger = new Logger(DrizzleUserRepository.name)
  constructor(
    private readonly drizzleService: DrizzleService
  ){}
  async create(user: UserCreatedDto): Promise<UserResponseDto> {
    try{
      this.logger.log('Adicionando usuário no banco de dados', 'IUserRepository')
      const result = await this.drizzleService.db.insert(userTable).values(user)

      const insertedUser = await this.drizzleService.db
        .select()
        .from(userTable)
        .where(eq(userTable.id, result[0].insertId))

      return {
        id: insertedUser[0].id,
        name: insertedUser[0].name,
        email: insertedUser[0].email,
      }


    }catch(error){
      throw new error
    }
  }

}