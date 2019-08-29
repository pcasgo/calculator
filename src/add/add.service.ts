import { Injectable } from '@nestjs/common';
import { NumbersDto } from 'src/dto/numers.dto';

@Injectable()
export class AddService {

  async addTwoNumbers(numbersDto: NumbersDto): Promise<any> {
    const soapRequest = require('easy-soap-request');
    const url = 'http://www.dneonline.com/calculator.asmx?WSDL';
    const headers = {
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_3) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.151 Safari/535.19',
      'Content-Type': 'text/xml;charset=UTF-8',
      'soapAction': 'http://tempuri.org/Add',
    };
    const xml = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">
<soapenv:Header/>
<soapenv:Body>
   <tem:Add>
      <tem:intA>${numbersDto.numberOne}</tem:intA>
      <tem:intB>${numbersDto.numberTwo}</tem:intB>
   </tem:Add>
</soapenv:Body>
</soapenv:Envelope>`;
    const { response } = await soapRequest(url, headers, xml, 1000);
    const { body, statusCode } = response;
    const convert = require('xml-js');
    const xmlToJson = convert.xml2json(body, { compact: false, spaces: 10 });
    const result = JSON.parse(xmlToJson);
    const finalResult = result.elements[0].elements[0].elements[0].elements[0].elements[0].text;
    return `{"result": ${finalResult}}`;
  }
}
