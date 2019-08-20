import { Injectable } from '@nestjs/common';
import { NumbersDto } from 'src/dto/numers.dto';

@Injectable()
export class AddService {
  async addTwoNumbers(numbersDto: NumbersDto): Promise<any> {
    return await `La suma de los numeros es:
        ${(numbersDto.numberOne === undefined ? 0 : numbersDto.numberOne) +
      (numbersDto.numberTwo === undefined ? 0 : numbersDto.numberTwo)}`;
  }

  async test(): Promise<any> {
    const request = require('request');

    const options = {
      method: 'POST',
      url: 'http://www.dneonline.com/calculator.asmx',
      qs: { WSDL: '' },
      headers:
      {
        'cache-control': 'no-cache',
        'Connection': 'keep-alive',
        'Content-Length': '283',
        'Accept-Encoding': 'gzip, deflate',
        'Host': 'www.dneonline.com',
        'Postman-Token': '9f16019b-a0fd-48ab-8bca-32ba9767aedc,cdc15d67-05f4-4c96-955c-419bbeb3f7aa',
        'Cache-Control': 'no-cache',
        'Accept': '*/*',
        'User-Agent': 'PostmanRuntime/7.15.2',
        'Content-Type': 'text/xml',
      },
      // tslint:disable-next-line: max-line-length
      body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">\n   <soapenv:Header/>\n   <soapenv:Body>\n      <tem:Add>\n         <tem:intA>1</tem:intA>\n         <tem:intB>2</tem:intB>\n      </tem:Add>\n   </soapenv:Body>\n</soapenv:Envelope>',
    };

    // tslint:disable-next-line: only-arrow-functions
    request(options, function(error, response, body) {
      if (error) { throw new Error(error); }
      console.log(response);
    });
  }
}
