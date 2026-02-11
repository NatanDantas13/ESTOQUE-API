import { Injectable } from '@nestjs/common';
import type { CompanyDto } from 'src/core/dtos/company/company-dto';
import { DrizzleService } from 'src/database/drizzle.service';
import { company } from 'src/database/schema/company.schema'
@Injectable()
export class CreateCompanyService {
  constructor(
    private readonly drizzle: DrizzleService
  ) { }
  async execute(companyData: CompanyDto) {
    return this.drizzle.db.insert(company).values({
      name: companyData.name
    })
  }
}
