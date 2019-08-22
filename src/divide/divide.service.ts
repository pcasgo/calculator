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
    const unirest = require('unirest');

    return new Promise((resolve, reject) => {
      unirest.post('http://www.dneonline.com/calculator.asmx')
        .headers({
          'cache-control': 'no-cache',
          'Connection': 'keep-alive',
          'Content-Length': '289',
          'Accept-Encoding': 'gzip, deflate',
          'Host': 'www.dneonline.com',
          'Postman-Token': 'adf96ff7-01ec-4e8b-9258-1a34a1f8b2b2,c8aa09cd-96a2-45d7-be66-7a1cdc1d743d',
          'Cache-Control': 'no-cache',
          'Accept': '*/*',
          'User-Agent': 'PostmanRuntime/7.15.2',
          'Content-Type': 'text/xml',
        })
        // tslint:disable-next-line: max-line-length
        .send(`<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">\n   <soapenv:Header/>\n   <soapenv:Body>\n      <tem:Divide>\n         <tem:intA>${numbersDto.numberOne}</tem:intA>\n         <tem:intB>${numbersDto.numberTwo}</tem:intB>\n      </tem:Divide>\n   </soapenv:Body>\n</soapenv:Envelope>`)
        // tslint:disable-next-line: only-arrow-functions
        .end(function(response) {
          const convert = require('xml-js');
          if (response.error) { return reject(Error); }
          const xmlToJson = convert.xml2json(response.body, { compact: true, spaces: 4 });
          return resolve(xmlToJson);
        });
    });
  }
}
