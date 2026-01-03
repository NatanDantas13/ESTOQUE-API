import { Module } from "@nestjs/common";
import { ProductCreateService } from "src/core/usecases/product/product-create/product-create.service";
import { ProductController } from "src/interface/controllers/product/product.controller";

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [ProductCreateService],

})

export class ProductModule {}