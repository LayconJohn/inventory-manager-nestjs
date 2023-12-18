import { Injectable } from '@nestjs/common';
import { CreateStocksOutputDto } from './dto/create-stocks-output.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotFoundError } from 'src/errors/index';

@Injectable()
export class StocksOutputService {
  constructor(
    private prismaService: PrismaService
  ) {}

  
  async create(createStocksOutputDto: CreateStocksOutputDto) {
    const product = await this.prismaService.stockOutput.findUnique({
      where: {id: createStocksOutputDto.product_id}
    });
    if(!product) {
      throw new NotFoundError("Product not found");
    }


    if(product.quantity === 0) {

    }

    if(createStocksOutputDto.quantity > product.quantity || product.quantity - createStocksOutputDto.quantity < 0) {
      
    }

    const result = await this.prismaService.$transaction([
      this.prismaService.stockOutput.create({
        data: {
          productId: createStocksOutputDto.product_id,
          quantity: createStocksOutputDto.quantity,
          date: createStocksOutputDto.date
        }
      }),

      this.prismaService.stockOutput.update({
        where: {
          id: createStocksOutputDto.product_id
        },
        data: {
          quantity: {
            decrement: createStocksOutputDto.quantity
          }
        }
      }),
    ]);

    return result[0];
  }

  findAll() {
    return this.prismaService.stockOutput.findMany();
  }

  async findOne(id: number) {
      try {
        return await this.prismaService.stockOutput.findUniqueOrThrow({
          where: {
            id
          }
        });
      } catch (error) {
        console.error(error);
        if (error.code === 'P2025') {
          throw new NotFoundError(`Stock output with id ${id} not found`);
        }
        throw error;
      }
  }

}
