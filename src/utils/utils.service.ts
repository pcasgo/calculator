import { Injectable } from '@nestjs/common';
import { Constants } from './utils.interface';
import { NumbersDto } from 'src/dto/numers.dto';

@Injectable()
export class UtilsService {

    static Constants(numbersDto: NumbersDto): Constants {
        return {
          // tslint:disable-next-line: max-line-length
          ADD: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">\n   <soapenv:Header/>\n   <soapenv:Body>\n      <tem:Add>\n         <tem:intA>${numbersDto.numberOne}</tem:intA>\n         <tem:intB>${numbersDto.numberTwo}</tem:intB>\n      </tem:Add>\n   </soapenv:Body>\n</soapenv:Envelope>`,
          // tslint:disable-next-line: max-line-length
          SUBTRACT: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">\n    <soapenv:Header/>\n    <soapenv:Body>\n        <tem:Subtract>\n            <tem:intA>${numbersDto.numberOne}</tem:intA>\n            <tem:intB>${numbersDto.numberTwo}</tem:intB>\n        </tem:Subtract>\n    </soapenv:Body>\n</soapenv:Envelope>`,
          // tslint:disable-next-line: max-line-length
          DIVIDE: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">\n   <soapenv:Header/>\n   <soapenv:Body>\n      <tem:Divide>\n         <tem:intA>${numbersDto.numberOne}</tem:intA>\n         <tem:intB>${numbersDto.numberTwo}</tem:intB>\n      </tem:Divide>\n   </soapenv:Body>\n</soapenv:Envelope>`,
          // tslint:disable-next-line: max-line-length
          MULTIPLY: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">\n   <soapenv:Header/>\n   <soapenv:Body>\n      <tem:Multiply>\n         <tem:intA>${numbersDto.numberOne}</tem:intA>\n         <tem:intB>${numbersDto.numberTwo}</tem:intB>\n      </tem:Multiply>\n   </soapenv:Body>\n   </soapenv:Envelope`,
        };
      }
}
