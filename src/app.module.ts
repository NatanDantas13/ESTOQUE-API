import { Module } from '@nestjs/common';
import { CompanyModule } from './modules/company/company.module';
import { DrizzleModule } from './database/drizzle.module'
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from './modules/product/product.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
     ConfigModule.forRoot({
      isGlobal: true, 
    }),
    CompanyModule,
    ProductModule,
    DrizzleModule,
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
