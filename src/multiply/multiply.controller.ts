import { Controller, Post, Body } from '@nestjs/common';
import { MultiplyService } from './multiply.service';
import { NumbersDto } from '../dto/numers.dto';

@Controller('multiply')
export class MultiplyController {
  constructor(private readonly multiplyService: MultiplyService) {}

  @Post()
  multiplyTwoNumbers(@Body() numbersDto: NumbersDto): Promise<any> {
    return this.multiplyService.multiplyTwoNumbers(numbersDto);
  }
}
