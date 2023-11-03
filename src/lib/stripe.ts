import Stripe from 'stripe'
const secretKey = process.env.STRIPE_SECRET_KEY as string

export const stripe = new Stripe(secretKey, {
  apiVersion: '2023-10-16',
  appInfo: {
    name: 't-shirt Shop',
  },
})
