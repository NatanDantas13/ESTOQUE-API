import { Module } from '@nestjs/common';
import { CompanyModule } from './modules/company/company.module';
import { DrizzleModule } from './database/drizzle.module'
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
     ConfigModule.forRoot({
      isGlobal: true, 
    }),
    CompanyModule, DrizzleModule],
  controllers: [],
  providers: [],
})
export class AppModule {
}
