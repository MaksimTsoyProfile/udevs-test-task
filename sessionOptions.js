export const sessionOptions = {
  password: '12312312312641872684612836781628735',
  cookieName: 'my-session-cookie',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
};