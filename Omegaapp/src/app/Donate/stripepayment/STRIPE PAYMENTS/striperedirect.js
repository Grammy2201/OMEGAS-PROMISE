const express = require('express');
const app = express();
const stripe = require('stripe')('dotenv').config;
    console.log(process.env.STRIPE_API_KEY);

app.get('/order/success', async (req, res) => {
    const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
    const customer = await stripe.customers.retrieve(session.customer);

    res.send(`<html><body><h1>Thanks for your order, ${customer.name}!</h1></body></html>`);
});

app.listen(4242, () => console.log(`Listening on port ${4242}!`));