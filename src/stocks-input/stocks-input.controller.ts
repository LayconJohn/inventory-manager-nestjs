import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StocksInputService } from './stocks-input.service';
import { CreateStocksInputDto } from './dto/create-stocks-input.dto';


@Controller('stocks-input')
export class StocksInputController {
  constructor(private readonly stocksInputService: StocksInputService) {}

  @Post()
  create(@Body() createStocksInputDto: CreateStocksInputDto) {
    return this.stocksInputService.create(createStocksInputDto);
  }

  @Get()
  findAll() {
    return this.stocksInputService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stocksInputService.findOne(+id);
  }

}
