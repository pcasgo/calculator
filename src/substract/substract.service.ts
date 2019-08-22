import { Injectable } from '@nestjs/common';
import { NumbersDto } from 'src/dto/numers.dto';

@Injectable()
export class SubstractService {

  async substractTwoNumbers(numbersDto: NumbersDto): Promise<any> {
    const unirest = require('unirest');

    return new Promise((resolve, reject) => {
      unirest.post('http://www.dneonline.com/calculator.asmx')
        .headers({
          'cache-control': 'no-cache',
          'Connection': 'keep-alive',
          'Content-Length': '306',
          'Accept-Encoding': 'gzip, deflate',
          'Host': 'www.dneonline.com',
          'Postman-Token': 'adf96ff7-01ec-4e8b-9258-1a34a1f8b2b2,c8aa09cd-96a2-45d7-be66-7a1cdc1d743d',
          'Cache-Control': 'no-cache',
          'Accept': '*/*',
          'User-Agent': 'PostmanRuntime/7.15.2',
          'Content-Type': 'text/xml',
        })
        // tslint:disable-next-line: max-line-length
        .send(`<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">\n    <soapenv:Header/>\n    <soapenv:Body>\n        <tem:Subtract>\n            <tem:intA>${numbersDto.numberOne}</tem:intA>\n            <tem:intB>${numbersDto.numberTwo}</tem:intB>\n        </tem:Subtract>\n    </soapenv:Body>\n</soapenv:Envelope>`)
        // tslint:disable-next-line: only-arrow-functions
        .end(function (response) {
          const convert = require('xml-js');
          if (response.error) { return reject(Error); }
          const xmlToJson = convert.xml2json(response.body, { compact: true, spaces: 4 });
          return resolve(xmlToJson);
        });
    });
  }
}
