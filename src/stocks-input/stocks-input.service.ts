import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStocksInputDto } from './dto/create-stocks-input.dto';
import { NotFoundError } from 'src/errors/index';

@Injectable()
export class StocksInputService {
  constructor(
    private prismaService: PrismaService
  ) {}

  async create(createStocksInputDto: CreateStocksInputDto) {
    const product = await this.prismaService.product.findUnique({
      where: {
        id: createStocksInputDto.product_id
      }
    })
    if (!product) {
      throw new NotFoundError("Product not found")
    }

    const result = await this.prismaService.$transaction([
      this.prismaService.stockInput.create({
        data: {
          productId: createStocksInputDto.product_id,
          quantity: createStocksInputDto.quantity,
          date: createStocksInputDto.date
        }
      }),

      this.prismaService.product.update({
        where: {
          id: createStocksInputDto.product_id
        },
        data: {
          quantity: {
            increment: createStocksInputDto.quantity
          }
        }
      })
    ]);

    return result[0];


  }

  findAll() {
    return this.prismaService.stockInput.findMany();
  }

  async findOne(id: number) {
    try {
      return await this.prismaService.stockInput.findUniqueOrThrow({
        where: {
          id
        }
      });
    } catch (error) {
      console.error(error);
      if (error.code === "P2025") {
        throw new NotFoundError(`Stock input with id ${id} not found`);
      }
      throw error;
    }
  }

}
