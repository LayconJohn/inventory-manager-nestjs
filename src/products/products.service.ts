import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';

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

  findOne(id: number) {
    return this.prismaService.product.findUnique({
      where: {
        id
      }
    });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.prismaService.product.update({
      where: {
        id
      },
      data: updateProductDto
    });
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
