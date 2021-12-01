import React from 'react';
import './Checkout.css';

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout--left">
                <img className="checkout--adv" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Jupiter21P1/pay_stripe_desk.png" alt="adv"/>
                <h3 className="checkout--title">Your Shopping </h3>
                {/* Cart Item here*/}
                {/* Cart Item here*/}

            </div>

            <div className="checkout--right">
                <h3>SubTotal (2 Item ): </h3>
                
            </div>
            
        </div>
    )
}

export default Checkout
