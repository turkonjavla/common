export enum OrderStatus {
  // when the order has been created but the
  // ticket it is trying to order has not been reserved
  Created = 'created',

  // the ticket the order is trying to reserve has already
  // been reserved, or when the user has cancelled the order,
  // or the order expires befor payment
  Cancelled = 'cancelled',

  // the order has successfully reserved the ticket
  AwaitingPayment = 'awaitingpayment',

  // the order has reserved the tciket and the user has
  // has provided payment successfully
  Complete = 'complete',
}
