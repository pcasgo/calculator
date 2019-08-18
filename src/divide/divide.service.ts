import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { NumbersDto } from '../dto/numers.dto';

@Injectable()
export class DivideService {
  async divideTwoNumbers(numbersDto: NumbersDto): Promise<any> {
    if (numbersDto.numberOne === undefined) {
      numbersDto.numberOne = 0;
    }
    if (numbersDto.numberTwo === undefined) {
      numbersDto.numberTwo = 0;
    }
    if (numbersDto.numberTwo === 0) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Error el numero divisor debe ser mayor a 0',
        },
        400,
      );
    }
    return await `El resultado de la division es: ${numbersDto.numberOne /
      numbersDto.numberTwo}`;
  }
}
