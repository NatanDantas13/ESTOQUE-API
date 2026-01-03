import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductCreateService {
  execute(){
    return "Chegou na service"
  }
}
