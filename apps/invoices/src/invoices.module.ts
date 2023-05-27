import { Module } from '@nestjs/common';
import { InvoicesController } from './invoices.controller';
import { InvoicesService } from './invoices.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Invoice, InvoiceSchema } from 'commons/entities/invoice.entity';
import { Order, OrderSchema } from 'commons/entities/order.entity';
import { MONGODB_URI } from 'config/constants';

@Module({
  imports: [
    MongooseModule.forRoot(MONGODB_URI),
    MongooseModule.forFeature([{ name: Invoice.name, schema: InvoiceSchema }]),
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
  ],
  controllers: [InvoicesController],
  providers: [InvoicesService],
})
export class InvoicesModule {}
