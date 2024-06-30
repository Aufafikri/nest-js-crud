import { HttpException, Injectable } from '@nestjs/common';
import { CreateProductDto } from '../dto/create-product.dto';
import { ProductRepository } from '../repository/repository';

@Injectable()
export class ProductService {
    constructor(private productRepository: ProductRepository) {}

    public async getAllProducts() {
        return await this.productRepository.getAllProducts()
    }

    public async getProductById(productId: string) {
        return await this.productRepository.getProductById(productId) 
    }

    public async createProduct(createProductDto: CreateProductDto) {
        return await this.productRepository.createProduct(createProductDto)
    }

    public async updateProduct(productId: string, createProductDto: CreateProductDto) {
        return await this.productRepository.updateProduct(productId, createProductDto)
    }

    public async deleteProduct(productId: string) {
        return await this.productRepository.deleteProduct(productId)
    }
}
