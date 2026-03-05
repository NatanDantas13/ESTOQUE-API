import type { UserCreatedDto } from "src/core/dtos/user/user-created.dto";
import type { UserResponseDto } from "src/core/dtos/user/user-response.dto";

export abstract class IUserRepository {
  abstract create(user: UserCreatedDto): Promise<UserResponseDto>;
}