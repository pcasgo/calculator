import { Injectable } from '@nestjs/common';
import { NumbersDto } from '../dto/numers.dto';

@Injectable()
export class MultiplyService {
  async multiplyTwoNumbers(numbersDto: NumbersDto): Promise<any> {
    const unirest = require('unirest');

    return new Promise((resolve, reject) => {
      unirest.post('http://www.dneonline.com/calculator.asmx')
        .headers({
          'cache-control': 'no-cache',
          'Connection': 'keep-alive',
          'Content-Length': '293',
          'Accept-Encoding': 'gzip, deflate',
          'Host': 'www.dneonline.com',
          'Postman-Token': 'dfea8a8a-a980-4f00-8ded-7ab453bd7f62,57a1f796-4122-40cb-9a82-48ae389a1b81',
          'Cache-Control': 'no-cache',
          'Accept': '*/*',
          'User-Agent': 'PostmanRuntime/7.15.2',
          'Content-Type': 'text/xml',
        })
        // tslint:disable-next-line: max-line-length
        .send(`<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">\n   <soapenv:Header/>\n   <soapenv:Body>\n      <tem:Multiply>\n         <tem:intA>${numbersDto.numberOne}</tem:intA>\n         <tem:intB>${numbersDto.numberTwo}</tem:intB>\n      </tem:Multiply>\n   </soapenv:Body>\n</soapenv:Envelope>`)
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
