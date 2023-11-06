// sk_test_51O9WqsGDejpEXMz3iabMsHSR9YBXctWztH1qQG8il4o1goRV7hyHOuQef1jqxi8QZ60rDp579k5kOHo3hGVz7TSf00w4m1InoA
// This is your test secret API key.
const stripe = require('stripe')('sk_test_51O9WqsGDejpEXMz3iabMsHSR9YBXctWztH1qQG8il4o1goRV7hyHOuQef1jqxi8QZ60rDp579k5kOHo3hGVz7TSf00w4m1InoA');
const express = require('express');
const app = express();
app.use(express.static('public'));
var cors = require('cors')

const YOUR_DOMAIN = 'http://localhost:3000';
app.use(cors())
app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: '{{PRICE_ID}}',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.redirect(303, session.url);
});

app.listen(4242, () => console.log('Running on port 4242'));