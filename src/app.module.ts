import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AddModule } from './add/add.module';
import { SubstractModule } from './substract/substract.module';
import { DivideModule } from './divide/divide.module';
import { MultiplyModule } from './multiply/multiply.module';

@Module({
  imports: [AddModule, SubstractModule, DivideModule, MultiplyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
