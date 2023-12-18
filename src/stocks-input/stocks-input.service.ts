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
    return `This action returns all stocksInput`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stocksInput`;
  }

}
