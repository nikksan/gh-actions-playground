if (!process.env.NODE_ENV) {
    const dotenv = require('dotenv')
    dotenv.config({ path: __dirname + '/../.env.local'});
}

export default {
    port: process.env.PORT || 3000,
}
