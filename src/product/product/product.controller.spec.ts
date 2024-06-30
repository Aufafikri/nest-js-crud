import { Test, TestingModule } from '@nestjs/testing';
import { ProductContoller } from './product.controller';

describe('ProductContoller', () => {
  let controller: ProductContoller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductContoller],
    }).compile();

    controller = module.get<ProductContoller>(ProductContoller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
