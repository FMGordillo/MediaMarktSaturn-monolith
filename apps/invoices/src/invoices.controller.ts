import { Controller } from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { MQ_CONFIGURATION_REGISTER, MQ_TOPICS } from 'config/constants';
import { CreateInvoiceDto } from 'commons/dto/create-invoice.dto';
import { Client, ClientProxy, EventPattern } from '@nestjs/microservices';
import { UpdateInvoiceDto } from 'commons/dto/update-invoice.dto';

@Controller()
export class InvoicesController {
  constructor(private readonly invoiceService: InvoicesService) {}

  @Client(MQ_CONFIGURATION_REGISTER.INVOICES as any)
  client: ClientProxy;

  @EventPattern(MQ_TOPICS.CREATE_INVOICE)
  async create(data: CreateInvoiceDto) {
    try {
      const response = await this.invoiceService.create(data);
	  this.client.emit(MQ_TOPICS.SEND_INVOICE, response);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }

  // TODO: Improve typing
  @EventPattern(MQ_TOPICS.UPDATE_ORDER)
  async update(data: UpdateInvoiceDto) {
    const response = await this.invoiceService.update(data);
    return response;
  }

  @EventPattern(MQ_TOPICS.SEND_INVOICE)
  async send({ _id, invoiceId }: { _id: string; invoiceId: string }) {
	console.log({ _id, invoiceId });
    const invoiceToCheck = _id || invoiceId;

    if (!invoiceToCheck) return;
    const invoice = await this.invoiceService.findById(invoiceToCheck);

    if (!invoice) {
      console.log('invoice not found');
      return;
    } else {
      console.log('invoice found');
      console.log(invoice);
    }

    return invoice;
  }
}
