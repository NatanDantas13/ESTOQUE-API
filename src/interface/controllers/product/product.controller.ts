import { Controller, Post } from '@nestjs/common';
import { ProductCreateService } from 'src/core/usecases/product/product-create/product-create.service';

@Controller('product')
export class ProductController {

  constructor(
    private readonly createProductService : ProductCreateService
  ){}

  @Post("")
  async create(){
    return this.createProductService.execute()
  }

}
