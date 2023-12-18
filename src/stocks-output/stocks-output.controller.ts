import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StocksOutputService } from './stocks-output.service';
import { CreateStocksOutputDto } from './dto/create-stocks-output.dto';

@Controller('stocks-output')
export class StocksOutputController {
  constructor(private readonly stocksOutputService: StocksOutputService) {}

  @Post()
  create(@Body() createStocksOutputDto: CreateStocksOutputDto) {
    return this.stocksOutputService.create(createStocksOutputDto);
  }

  @Get()
  findAll() {
    return this.stocksOutputService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stocksOutputService.findOne(+id);
  }

}
