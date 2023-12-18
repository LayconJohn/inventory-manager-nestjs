import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotFoundError } from 'src/errors/index';

@Injectable()
export class ProductsService {
  constructor(
    private readonly prismaService: PrismaService,
  ) {}

  create(createProductDto: CreateProductDto) {
    return this.prismaService.product.create({
      data: {
        ...createProductDto,
        quantity: 0
      }
    });
  }

  findAll() {
    return this.prismaService.product.findMany({});
  }

  async findOne(id: number) {
    try {
      return await this.prismaService.product.findUniqueOrThrow({
        where: {
          id
        }
      });
    } catch (error) {
      console.error(error);
      if (error.code === "P2025") {
        throw new NotFoundError(`Product with id ${id} not found`);
      }
      throw error;
    }

  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.prismaService.product.update({
      where: {
        id
      },
      data: updateProductDto
    });
  }

  async remove(id: number) {
    const product =  await this.findOne(id);
    if (!product) {
      throw new Error("Product dont exist");
    }
    return this.prismaService.product.delete({
      where: {
        id
      }
    });
  }
}
