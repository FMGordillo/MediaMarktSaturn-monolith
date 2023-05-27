import { Module } from '@nestjs/common';
import { InvoicesController } from './invoices.controller';
import { InvoicesService } from './invoices.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Invoice, InvoiceSchema } from 'commons/entities/invoice.entity';
import { Order, OrderSchema } from 'commons/entities/order.entity';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:root@localhost:27017/admin'),
    MongooseModule.forFeature([{ name: Invoice.name, schema: InvoiceSchema }]),
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
  ],
  controllers: [InvoicesController],
  providers: [InvoicesService],
})
export class InvoicesModule {}
