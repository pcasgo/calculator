import { Injectable } from '@nestjs/common';
import { NumbersDto } from '../dto/numers.dto';

@Injectable()
export class MultiplyService {
  async multiplyTwoNumbers(numbersDto: NumbersDto): Promise<any> {
    return await `El producto de los numeros es: ${(numbersDto.numberOne ===
    undefined
      ? 0
      : numbersDto.numberOne) *
      (numbersDto.numberTwo === undefined ? 0 : numbersDto.numberTwo)}`;
  }
}
