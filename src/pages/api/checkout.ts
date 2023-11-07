import { stripe } from '@/lib/stripe'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { priceId } = req.body

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' })
  }
  if (!priceId) {
    res.status(400).json({ error: 'Price not found' })
  }

  const cancelUrl = `${process.env.NEXT_URL}/`
  const successUrl = `${process.env.NEXT_URL}/success`

  const sessionCheckout = await stripe.checkout.sessions.create({
    cancel_url: cancelUrl,
    success_url: successUrl,
    mode: 'payment',
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
  })

  return res.status(201).json({
    checkoutUrl: sessionCheckout.url,
  })
}
