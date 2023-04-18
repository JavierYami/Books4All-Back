const { Router } = require('express');
const Stripe = require ('stripe');
const { STRIPE } = process.env;


const apiRouter = Router();
const stripe = new Stripe(`${STRIPE}`);


apiRouter.post('/api/checkout', async (req, res) => {

    try{
    const {id, amount} = req.body

    const payment = await stripe.paymentIntents.create({
    
        amount,
        currency:'USD',
        description:'Ready Player Two',
        payment_method: id,
        confirm: true
    })
    console.log(payment)
    console.log(req.body)
    res.send({message: 'Succesfull payment'})

        }catch(error){
            console.log(error)
            res.status(400).send({error: error.raw.message})
        }
})
 

module.exports = apiRouter;