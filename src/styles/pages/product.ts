import { styled } from '..'

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '4rem',
  alignItems: 'stretch',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
})
export const ProductImage = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  padding: '0.25rem',
  width: '100%',
  maxWidth: 576,
  height: 'calc(656px - 0.5rem)',
  borderRadius: 8,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})
export const ProductDetail = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '$2xl',
    color: '$gray300',
  },
  span: {
    fontSize: '$2xl',
    color: '$green300',
    display: 'block',
    marginTop: '1rem',
  },
  p: {
    fontSize: '$md',
    color: '$gray300',
    marginTop: '2.5rem',
  },
  button: {
    marginTop: 'auto',
    padding: '1.25rem 2rem',
    borderRadius: 8,
    border: 0,
    color: '$white',
    backgroundColor: '$green500',
    fontSize: '$md',
    fontWeight: 'bold',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: '$green300',
    },
  },
})
