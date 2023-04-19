const { Router } = require('express');
const Stripe = require ('stripe');
require("dotenv").config();

const apiRouter = Router();
const stripe = Stripe(process.env.STRIPE_KEY)

// const express = require('express');
// const app = express();
// const stripe = require('stripe')('sk_test_51Mu08BJCQwXBtQNrbOdQorX7ZhZz6SPisSeEQjsAe2RwxFx4mOOKHsuF0wVMByDJkoE4dhkOQzGRIzvzEfBcCL2x00GG1MmXdx')

apiRouter.post('/create-checkout-session', async (req, res) => {
 
    const line_items = req.body.cartItems.map(item=>{
        return{
          price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
            images: item.image,
            description: item.description,
            metadata: {
                id: item.id,

            }
          },
          unit_amount: item.price * 100,
        },
        quantity: item.cartQuantity,

        }
    })

     const session = await stripe.checkout.sessions.create({

    line_items,
    mode: 'payment',
    success_url: `${process.env.CLIENT_URL}/checkout-success`,
    cancel_url: `${process.env.CLIENT_URL}/cart`,
  });

  res.send({url: session.url});
});


// apiRouter.post('/api/checkout', async (req, res) => {

//     try{
//     const {id, amount} = req.body

//     const payment = await stripe.paymentIntents.create({
    
//         amount,
//         currency:'USD',
//         description:'Ready Player Two',
//         payment_method: id,
//         confirm: true
//     })
//     console.log(payment)
//     console.log(req.body)
//     res.send({message: 'Succesfull payment'})

//         }catch(error){
//             console.log(error)
//             res.status(400).send({error: error.raw.message})
//         }
// })
 

module.exports = apiRouter;