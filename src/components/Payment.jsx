import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const Payment = () => {

  const onToken = (token) =>{
    console.log(token);
  }

  return (
    <div className='pt-20'>
      <StripeCheckout
        token={onToken}
        name="LUXIFY"
        amount={1000000} 
        currency="INR"
        stripeKey="pk_test_51Oea8YDkXACyP9iVSPf3UmFad6aANnsf4XPl7dU3ZzPUjwCQpyJnPfItM4DrU9vzAGYgghdJJHLkdKhlzaANBlvY00cptkB7oD"
      />
    </div>
  )
}

export default Payment