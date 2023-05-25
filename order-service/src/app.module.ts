import { Module } from '@nestjs/common';
import { OrderModule } from './order/order.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot("mongodb://root:root@localhost:27017/admin"), OrderModule],
})
export class AppModule {}
