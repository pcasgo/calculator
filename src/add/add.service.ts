import { Injectable } from '@nestjs/common';
import { NumbersDto } from 'src/dto/numers.dto';

@Injectable()
export class AddService {
  async addTwoNumbers(numbersDto: NumbersDto): Promise<any> {
    return await `La suma de los numeros es:
        ${(numbersDto.numberOne === undefined ? 0 : numbersDto.numberOne) +
          (numbersDto.numberTwo === undefined ? 0 : numbersDto.numberTwo)}`;
  }
}
