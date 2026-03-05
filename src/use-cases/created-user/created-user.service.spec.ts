import { Test, TestingModule } from '@nestjs/testing';
import { CreatedUserService } from './created-user.service';

describe('CreatedUserService', () => {
  let service: CreatedUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreatedUserService],
    }).compile();

    service = module.get<CreatedUserService>(CreatedUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
