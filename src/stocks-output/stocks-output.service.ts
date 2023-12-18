import { Injectable } from '@nestjs/common';
import { CreateStocksOutputDto } from './dto/create-stocks-output.dto';

@Injectable()
export class StocksOutputService {
  create(createStocksOutputDto: CreateStocksOutputDto) {
    return 'This action adds a new stocksOutput';
  }

  findAll() {
    return `This action returns all stocksOutput`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stocksOutput`;
  }

}
