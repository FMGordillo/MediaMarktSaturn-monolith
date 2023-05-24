import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OrderDocument  = HydratedDocument<Order>;

@Schema()
export class Order {
  @Prop()
  id: string;

  @Prop()
  price: number;

  @Prop()
  quantity: number;

  // Auto generated for now
  @Prop()
  productId: number;

  // Auto generated for now
  @Prop()
  customerId: number;

  // Auto generated for now
  @Prop()
  sellerId: number;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
