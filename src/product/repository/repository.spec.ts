import { Test, TestingModule } from '@nestjs/testing';
import { ProductRepository } from './repository';

describe('ProductRepository', () => {
  let provider: ProductRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductRepository],
    }).compile();

    provider = module.get<ProductRepository>(ProductRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
