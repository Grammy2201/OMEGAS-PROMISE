
const stripe = require('stripe')('STRIPE_API_KEY');
const endpointSecret = ('STRIPE_API_KEY');
const express = require('express');
const app = express();

app.post('/webhook', express.raw({type: 'application/json'}), (request, response) => {
  let event = request.body;
  if (endpointSecret) {  
    const signature = request.headers['stripe-signature'];
    try {
      event = stripe.webhooks.constructEvent(
        request.body,
        signature,
        endpointSecret
      );
    } catch (err) {
      console.log(`⚠️  Webhook signature verification failed.`, err.message);
      return response.sendStatus(400);
    }
  }

  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      console.log(`PaymentIntent for ${paymentIntent.amount} was successful!`);

      break;
    case 'payment_method.attached':
      const paymentMethod = event.data.object;

      break;
    default:
      // Unexpected event type
      console.log(`Unhandled event type ${event.type}.`);
  }
  response.send();
});

app.listen(4242, () => console.log('Running on port 4242'));