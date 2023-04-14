const mercadoPago = require('../mercadopago')
const payment_data_pix = require('../assets/payment_data_pix')

// Get payment PIX
var payment_data = payment_data_pix
mercadoPago.payment.create(payment_data)
.then(function (data){
    console.log(JSON.stringify(data))
})
.catch(function (error) {
    console.error(error)
});
