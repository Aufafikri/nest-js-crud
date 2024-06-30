import {
    BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Res,
} from '@nestjs/common';
// import { AppService } from 'src/app.service';
import { ProductService } from './product.service';
import { CreateProductDto } from '../dto/create-product.dto';
import { Response } from 'express';

@Controller('/user')
export class ProductContoller {
  constructor(private productService: ProductService) {}

  @Get('/product')
  public async getAllProducts(@Res() response: Response) {
    const product = await this.productService.getAllProducts();

    response.status(200).json({
      data: product,
    });
  }

  @Get('/product/:id')
  public async getProductById(
    @Param('id') id: string,
    @Res() response: Response,
  ) {
    const product = await this.productService.getProductById(id);

    if (!product) {
      throw new HttpException('product id is missing', 401);
    }

    response.status(200).json({
      data: product,
      message: `get product id ${id}`,
    });
  }

  @Post('/product')
  public async createProduct(
    @Body() createproductDto: CreateProductDto,
    @Res() response: Response,
  ) {
    const product = await this.productService.createProduct(createproductDto);

    response.status(201).json({
      data: product,
      message: 'create product success!',
    });
  }

  @Put('/product/:id')
  public async updateProduct(
    @Param('id') id: string,
    @Body() createProductDto: CreateProductDto,
    @Res() response: Response,
  ) {
    const product = await this.productService.updateProduct(
      id,
      createProductDto,
    );

      response.status(200).json({
        data: product,
        message: 'success edit product',
      });
  }
  
  @Delete('/product/:id')
  public async deleteProduct(
    @Param('id') id: string,
    @Res() response: Response,
  ) {
    const product = await this.productService.deleteProduct(id);

    response.status(200).json({
      data: product,
      message: `success delete product`,
      ProductID: `${id}`,
    });
  }
}
