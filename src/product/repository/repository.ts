import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { CreateProductDto } from '../dto/create-product.dto';

@Injectable()
export class ProductRepository {
    constructor(private prismaService: PrismaService) {}

    public async getAllProducts() {
        return await this.prismaService.product.findMany()
    }

    public async getProductById(productId: string) {
        return await this.prismaService.product.findUnique({
            where: {
                id: productId
            }
        })
    }

    public async createProduct(createProductDto: CreateProductDto) {
        return await this.prismaService.product.create({
            data: createProductDto
        })
    }

    public async updateProduct(productId: string, createProductDto: CreateProductDto) {
        return await this.prismaService.product.update({
            where: {
                id: productId
            }, 
            data: createProductDto
        })
    }

    public async deleteProduct(productId: string) {
        return await this.prismaService.product.delete({
            where: {
                id: productId
            }
        })
    }
}
