import { Module } from '@nestjs/common';
import { ProductContoller } from './product/product.controller';
import { ProductService } from './product/product.service';
import { ProductRepository } from './repository/repository';

@Module({
  controllers: [ProductContoller],
  providers: [ProductService, ProductRepository],
})
export class UserModule {}
