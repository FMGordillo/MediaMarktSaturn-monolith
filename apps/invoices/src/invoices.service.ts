import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateInvoiceDto } from 'commons/dto/create-invoice.dto';
import { Invoice } from 'commons/entities/invoice.entity';
import { Model } from 'mongoose';

@Injectable()
export class InvoicesService {
  constructor(
    @InjectModel(Invoice.name) private invoiceModel: Model<Invoice>,
  ) {}

  create(createInvoiceDto: CreateInvoiceDto) {
    const createdInvoice = new this.invoiceModel(createInvoiceDto);
    return this.invoiceModel.create(createdInvoice);
  }

  findById(id: string) {
	return this.invoiceModel.findById(id, {}, { populate: { path: 'order' } });
  }

}
