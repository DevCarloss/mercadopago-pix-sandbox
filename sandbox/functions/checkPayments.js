const mercadoPago = require('../mercadopago')

let id = "" // Add your payment ID here
mercadoPago.payment.get(id)
.then(function (data){
    console.log(JSON.stringify(data))
})
.catch(function (error) {
    console.error(error)
})