import { Controller, Post, Body } from '@nestjs/common';
import { SubstractService } from './substract.service';
import { NumbersDto } from '../dto/numers.dto';

@Controller('substract')
export class SubstractController {
  constructor(private readonly substractService: SubstractService) {}

  @Post()
  substractTwoNumbers(@Body() numbersDto: NumbersDto): Promise<any> {
    return this.substractService.substractTwoNumbers(numbersDto);
  }
}
