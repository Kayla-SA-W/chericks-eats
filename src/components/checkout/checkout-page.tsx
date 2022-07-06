import React, { useContext, useState } from 'react';
import { CheckoutContext } from '../../context/checkout-cart';
import { CartContext } from '../../context';
import { initialCartState } from '../../context/initial-cart';
import { SmallSeperator, OrderSummary } from '../../components/cart';
import { Helmet } from "react-helmet";
import { CheckoutContainer, CheckoutForm } from '../../components/checkout';
import { useEffect } from 'react';
import { handlePaymentMethodSubmission, initializeCard } from '../../modules/card-payment';
import { calculateShipping } from '../../modules/calculate-shipping';
import { sendConfirmationEmail, sendNewOrderEmail } from '../../modules/email-confirmations';

const appId = process.env.GATSBY_APPLICATION_ID;
const locationId = process.env.GATSBY_LOCATION_ID;
declare global {
    interface Window {
        Square?: any;
    }
}

const FixedHelmet: any = Helmet;

const contentLoaded = async () => {
    if (!window.Square) {
        throw new Error('Square.js failed to load properly');
    }

    let payments;
    try {
        payments = window.Square.payments(appId, locationId);
    } catch {
        const statusContainer = document.getElementById(
            'payment-status-container'
        );
        statusContainer?.className == 'missing-credentials';
        statusContainer?.style.visibility == 'visible';
        return;
    }

    let card: { tokenize: () => any; };
    try {
        card = await initializeCard(payments);
    } catch (e) {
        console.error('Initializing Card failed', e);
        return;
    }

    const cardButton = document.getElementById('card-button');
    cardButton?.addEventListener('click', async function (event) {
        await handlePaymentMethodSubmission(event, card);
      });
};

const Checkout = () => {
    useEffect(() => {
        contentLoaded();
    })

    const { cart, setCart } = useContext(CartContext);
    const { checkoutCart, setCheckoutCart } = useContext(CheckoutContext);

    const cartWithQuantities = checkoutCart.map((item) => {
        return (
            <div key={item} style={{ margin: '0 5px 5px' }}>
                {item} x{cart[item].quantity}
            </div>
        )
    })

    const [customerInformation, setCustomerInformation] = useState({
        firstName: '',
        surname: '',
        emailAddress: '',
        address: ''
    })

    const subtotal = checkoutCart.map((name) => cart[name].price * cart[name].quantity).reduce((prev, current) => prev + current, 0);

    const allowShipping = checkoutCart.includes('Cake Batter Chocolate Chip Cookies - 15ct') || checkoutCart.includes('Brownies - 15ct');
    const shippingOptions = ['Pick Up - Orlando Only', 'Delivery - Orlando Only', ...(allowShipping ? ['Priority', 'Priority Express'] : [])];

    const [selectedShipping, setSelectedShipping] = useState('');

    const total = (calculateShipping(selectedShipping) + subtotal).toFixed(2);

    return (
        <>
            <FixedHelmet>
                <script type="text/javascript" src="https://sandbox.web.squarecdn.com/v1/square.js"></script>
            </FixedHelmet>
            <CheckoutContainer>
                <CheckoutForm>
                    <label htmlFor="first_name">First Name:</label>
                    <input type="text" id="first_name" name="first_name" onChange={(e) => setCustomerInformation({ ...customerInformation, firstName: e.target.value })} />
                    <label htmlFor="surname">Last Name:</label>
                    <input type="text" id="surname" name="surname" onChange={(e) => setCustomerInformation({ ...customerInformation, surname: e.target.value })} />
                    <label htmlFor="email">Email Address:</label>
                    <input type="text" id="email" name="email" onChange={(e) => setCustomerInformation({ ...customerInformation, emailAddress: e.target.value })} />
                    <label htmlFor="home_address">Home Address:</label>
                    <input type="text" id="home_address" name="home_address" onChange={(e) => setCustomerInformation({ ...customerInformation, address: e.target.value })} />
                    <label htmlFor='shipping_options'>Shipping Options</label>
                    <select
                        id="shipping_options"
                        onChange={(e) => {
                            setSelectedShipping(e.target.value);
                        }}>
                        {shippingOptions.map((type, key) => {
                            return (
                                <option value={type} key={key}>{type}</option>
                            )
                        })}
                    </select>
                    <div id="card-container"></div>
                    <button
                        id="card-button"
                        onClick={(event) => {
                            event.preventDefault();
                            sendConfirmationEmail({ customerInformation, cartWithQuantities });
                            sendNewOrderEmail({ customerInformation, cartWithQuantities, total, selectedShipping });
                            setTimeout(() => {
                                setCart(initialCartState);
                                setCheckoutCart([]);
                                if (typeof window !== 'undefined') {
                                    window.location.replace("/confirmation");
                                }
                            }, 1000);
                        }}>Complete Order</button>
                    <div id="payment-status-container"></div>
                </CheckoutForm>
                <OrderSummary style={{ marginTop: '50px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid black' }}>
                        <div style={{ marginBottom: '20px' }}>Order Summary</div>
                        <div style={{ marginBottom: '20px' }}>{cartWithQuantities}</div>
                    </div>
                    <div style={{ border: '1px solid black', padding: '20px 0', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', marginLeft: '20px', width: '150px' }}>
                            <div>Subtotal</div>
                            <div>{`$ ${subtotal}`}</div>
                            <div>Shipping</div>
                            <div>{`$ ${calculateShipping(selectedShipping).toFixed(2)}`}</div>
                        </div>
                        <SmallSeperator />
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', marginLeft: '20px', width: '150px' }}>
                            <div>Total</div>
                            <div>{`$ ${total}`}</div>
                        </div>
                        <div style={{ marginTop: '40px', color: 'red' }}>Due Today: $20</div>
                    </div>
                </OrderSummary>
            </CheckoutContainer>
        </>
    )
}

export default Checkout;