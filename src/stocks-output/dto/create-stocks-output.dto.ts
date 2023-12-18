import { Type } from "class-transformer";
import { IsDate, IsDateString, IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive } from "class-validator";

export class CreateStocksOutputDto {
    @IsPositive()
    @IsInt()
    @IsNumber()
    @IsNotEmpty()
    product_id: number;

    @IsPositive()
    @IsInt()
    @IsNumber()
    @IsNotEmpty()
    quantity: number;

    @IsDate() //iso_8601
    @IsNotEmpty()
    @Type(() => Date)
    date: Date;
}
