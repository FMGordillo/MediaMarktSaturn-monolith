import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

@Schema()
export class Invoice {

  @Prop()
  id: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true })
  orderId: string;

  @Prop()
  file: string;

  @Prop()
  timestamp: string;
}

export type OrderDocument = HydratedDocument<Invoice>;

export const InvoiceSchema = SchemaFactory.createForClass(Invoice);

