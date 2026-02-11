import { Body, Controller, Post } from '@nestjs/common';
import { CompanyDto } from 'src/core/dtos/company/company-dto';
import { CreateCompanyService } from 'src/core/usecases/company/create-company/create-company.service';

@Controller('company')
export class CompanyController { 

  constructor(
    private readonly createCompanyService : CreateCompanyService
  ){}

  @Post()
  async createCompany(@Body() company: CompanyDto ){
   return this.createCompanyService.execute(company)
  }
  
}
