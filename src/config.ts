if (process.env.NODE_ENV === undefined || process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const dotenv = require('dotenv')

  // eslint-disable-next-line n/no-path-concat
  dotenv.config({ path: __dirname + '/../.env' })
}

export default {
  port: process.env.PORT ?? 3000
}
