import { Module } from '@nestjs/common';
import { SubstractService } from './substract.service';
import { SubstractController } from './substract.controller';

@Module({
    controllers: [SubstractController],
    providers: [SubstractService],
  })
export class SubstractModule {}
