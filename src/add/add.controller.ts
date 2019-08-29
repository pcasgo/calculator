import { Controller, Body, Post } from '@nestjs/common';
import { AddService } from './add.service';
import { NumbersDto } from '../dto/numers.dto';
@Controller('add')
export class AddController {
  constructor(private readonly addService: AddService) { }

  @Post()
  addTwoNumbers(@Body() numbersDto: NumbersDto): Promise<any> {
    return this.addService.addTwoNumbers(numbersDto);
  }
}
