import { IsNumberString, IsNotEmpty, IsInt, Min } from 'class-validator';

export class NumbersDto {
  @IsNotEmpty()
  @IsNumberString()
  @IsInt()
  @Min(0)
  numberOne: number;

  @IsNotEmpty()
  @IsNumberString()
  @IsInt()
  @Min(0)
  numberTwo: number;
}
