import { Injectable } from '@nestjs/common';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { Invoice } from './entities/invoice.entity';

@Injectable()
export class InvoicesService {

  readonly invoices: Invoice[] = [];

  create(createInvoiceDto: CreateInvoiceDto) {
	this.invoices.push(createInvoiceDto as Invoice);
  }
}
