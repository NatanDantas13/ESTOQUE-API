import { Module } from '@nestjs/common';
import { CreateCompanyService } from 'src/core/usecases/company/create-company/create-company.service';
import { CompanyController } from 'src/interface/controllers/company/company.controller';

@Module({
  imports: [],
  controllers: [CompanyController],
  providers: [CreateCompanyService],
})
export class CompanyModule {}
