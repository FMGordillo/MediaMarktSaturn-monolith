Build a simplified ecommerce system
For ordering and invoicing

It should include two micro services
INVOICE ATTACHMENT SERVICE | INVOICE SENDER SERVICE
They communicate each other "async" "when it makes sense"

Order's status: CREATED | ACCEPTED | REJECTED | SHIPPING | SHIPPED

Order -> Product

Order properties:
- id
- price
- quantity
- productId -> Can be auto-generated
- customerId -> Can be auto-generated
- sellerId

Invoice properties:
- id
- orderId
- timestamp (optional)

Order also has PDF support (invoice)

We need REST endpoints for
- Order creation
- Order update
- Order list (/orders)
- Order details (/:order-id)

-------

Invoice service is the file uploader for Orders?

-------

When an order has an invoice
And the order's status is SHIPPED
Then invoice is updated (timestamp)
