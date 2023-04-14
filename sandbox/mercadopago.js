const mercadopago = require('mercadopago')
const dotenv = require('dotenv').config()

// Add credentials
try {
    mercadopago.configure({
        access_token: process.env.ACCESS_TOKEN,
        sandbox: true
    })
    module.exports = mercadopago
}
catch (err) {
    console.log('Mercado Pago ' + err)
}



