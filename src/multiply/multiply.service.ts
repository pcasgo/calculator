import { Injectable } from '@nestjs/common';
import { NumbersDto } from '../dto/numers.dto';

@Injectable()
export class MultiplyService {
  async multiplyTwoNumbers(numbersDto: NumbersDto): Promise<any> {

    const soapRequest = require('easy-soap-request');
    const url = 'http://www.dneonline.com/calculator.asmx?WSDL';
    const headers = {
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_3) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.151 Safari/535.19',
      'Content-Type': 'text/xml;charset=UTF-8',
      'soapAction': 'http://tempuri.org/Multiply',
    };
    const xml = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">
    <soapenv:Header/>
    <soapenv:Body>
       <tem:Multiply>
          <tem:intA>${numbersDto.numberOne}</tem:intA>
          <tem:intB>${numbersDto.numberTwo}</tem:intB>
       </tem:Multiply>
    </soapenv:Body>
 </soapenv:Envelope>`;
    const { response } = await soapRequest(url, headers, xml, 1000);
    const { body, statusCode } = response;
    const convert = require('xml-js');
    const xmlToJson = convert.xml2json(body, { compact: false, spaces: 10 });
    const result = JSON.parse(xmlToJson);
    const finalResult = result.elements[0].elements[0].elements[0].elements[0].elements[0].text;
    return `{"result": ${finalResult}}`;
    // const unirest = require('unirest');

    // return new Promise((resolve, reject) => {
    //   unirest.post('http://www.dneonline.com/calculator.asmx')
    //     .headers({
    //       'cache-control': 'no-cache',
    //       'Connection': 'keep-alive',
    //       'Content-Length': '293',
    //       'Accept-Encoding': 'gzip, deflate',
    //       'Host': 'www.dneonline.com',
    //       'Postman-Token': 'dfea8a8a-a980-4f00-8ded-7ab453bd7f62,57a1f796-4122-40cb-9a82-48ae389a1b81',
    //       'Cache-Control': 'no-cache',
    //       'Accept': '*/*',
    //       'User-Agent': 'PostmanRuntime/7.15.2',
    //       'Content-Type': 'text/xml',
    //     })
    //     // tslint:disable-next-line: max-line-length
    //     .send(`<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">\n   <soapenv:Header/>\n   <soapenv:Body>\n      <tem:Multiply>\n         <tem:intA>${numbersDto.numberOne}</tem:intA>\n         <tem:intB>${numbersDto.numberTwo}</tem:intB>\n      </tem:Multiply>\n   </soapenv:Body>\n</soapenv:Envelope>`)
    //     // tslint:disable-next-line: only-arrow-functions
    //     .end(function(response) {
    //       const convert = require('xml-js');
    //       if (response.error) { return reject(Error); }
    //       const xmlToJson = convert.xml2json(response.body, { compact: true, spaces: 4 });
    //       return resolve(xmlToJson);
    //     });
    // });
  }
}
