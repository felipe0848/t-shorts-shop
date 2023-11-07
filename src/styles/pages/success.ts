import { styled } from '..'

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: 656,
  h1: {
    fontSize: '$2xl',
    color: '$gray100',
  },
  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 590,
    textAlign: 'center',
    lineHeight: 1.4,

    marginTop: '2rem',
  },
  a: {
    fontSize: '$lg',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: '$green500',
    borderBottom: '1px solid transparent',
    transition: '0.2s',

    '&:hover': {
      color: '$green300',
      borderBottom: '1px solid $green300',
    },

    marginTop: '5.5rem',
  },
})
export const SuccessImgContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  borderRadius: 8,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',

  minHeight: 145,
  maxWidth: 127,
  width: '100%',

  marginTop: '4rem',

  img: {
    objectFit: 'cover',
  },
})
