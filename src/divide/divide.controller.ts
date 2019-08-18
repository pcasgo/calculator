import { Controller, Post, Body } from '@nestjs/common';
import { DivideService } from './divide.service';
import { NumbersDto } from '../dto/numers.dto';

@Controller('divide')
export class DivideController {
  constructor(private readonly divideService: DivideService) {}

  @Post()
  divideTwoNumbers(@Body() numbersDto: NumbersDto): Promise<any> {
    return this.divideService.divideTwoNumbers(numbersDto);
  }
}
