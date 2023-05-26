export type Status =
  | 'CREATED'
  | 'ACCEPTED'
  | 'REJECTED'
  | 'SHIPPING'
  | 'SHIPPED';

export class Order {
  id: number;

  status: Status;

  price: number;

  quantity: number;

  // Auto generated
  productId: number;

  // Auto generated
  customerId: number;

  sellerId: number;
}
