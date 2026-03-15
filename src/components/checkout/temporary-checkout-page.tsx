import React, { useContext, useState } from 'react';
import { MealPrepCartContext } from '../../context/meal-prep-cart';
import { CheckoutContainer, CheckoutForm } from '../../components/checkout';
import { calculateShipping } from '../../modules/calculate-shipping';
import styled from 'styled-components';
import { showCheckoutWindow } from './script/checkout-buttom-script';

declare global {
    interface Window {
        Square?: any;
    }
}

export const OrderSummary = styled.div`
background-color: white;
width: 267px;
padding: 10px 25px;
display: flex;
justify-content: center;
flex-direction: column;
place-items: center;
@media screen and (max-width: 1024px){
    margin-bottom: 80px;
}
`

const FormInput = styled.input`
margin-bottom: 20px;
`

const SmallSeperator = styled.hr`
height: .5px;
width: 90%;
background-color: black;
border: 1px black solid;
`

const checkAllInputs = () => {
    const firstName = document.getElementById('first_name');
    const surname = document.getElementById('surname');
    const email = document.getElementById('email');
    const address = document.getElementById('home_address');
    const terms = document.getElementById('terms-and-conditions') as HTMLInputElement;

    if (firstName && surname && email && address && terms.checked) {
        return true;
    } else {
        return false;
    };
};

const checkIfEmpty = (event: { target: { value: string; style: { border: string; }; }; }) => {
    if (event.target.value === '') {
        event.target.style.border = '1px solid red'
    } else {
        event.target.style.border = '1px solid black'
    }
}

const SQUARE_CHECKOUT_URL = "https://square.link/u/Nj8Hk5Zi?src=embed";

const MockCheckout = () => {
    const { orders } = useContext(MealPrepCartContext);

    const [customerInformation, setCustomerInformation] = useState({
        firstName: '',
        surname: '',
        emailAddress: '',
        address: ''
    })

    const subtotal = orders.reduce((sum, o) => sum + o.total, 0);

    const shippingOptions = ['Pick Up - Orlando Only', 'Delivery - Orlando Only'];

    const [selectedShipping, setSelectedShipping] = useState('');
    const [error, setError] = useState(false);

    const tax = subtotal * .065;
    const withTax = subtotal + tax;

    const total = (calculateShipping(selectedShipping) + withTax).toFixed(2);

    const OnClickPayNow = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (checkAllInputs()) {
            setError(false);
            showCheckoutWindow(e);
        } else {
            setError(true);
        }
    }

    if (orders.length === 0) {
        return (
            <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Libre Caslon Display' }}>
                <p>Your cart is empty.</p>
                <a href="/order">Go to Order</a>
            </div>
        );
    }

    return (
        <>
            {error ? <div style={{ marginTop: '40px', color: 'red', display: 'flex', placeContent: 'center' }}>Please fill in the missing information</div> : null}
            <CheckoutContainer>
                <CheckoutForm>
                    <label htmlFor="first_name">First Name:</label>
                    <FormInput type="text" id="first_name" name="first_name" onBlur={(e) => checkIfEmpty(e)} onChange={(e) => setCustomerInformation({ ...customerInformation, firstName: e.target.value })} />
                    <label htmlFor="surname">Last Name:</label>
                    <FormInput type="text" id="surname" name="surname" onBlur={(e) => checkIfEmpty(e)} onChange={(e) => setCustomerInformation({ ...customerInformation, surname: e.target.value })} />
                    <label htmlFor="email">Email Address:</label>
                    <FormInput type="text" id="email" name="email" onBlur={(e) => checkIfEmpty(e)} onChange={(e) => setCustomerInformation({ ...customerInformation, emailAddress: e.target.value })} />
                    <label htmlFor="home_address">Home Address:</label>
                    <FormInput type="text" id="home_address" name="home_address" onBlur={(e) => checkIfEmpty(e)} onChange={(e) => setCustomerInformation({ ...customerInformation, address: e.target.value })} />
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
                    <div style={{ marginTop: '20px' }}>
                        <input type="checkbox" id="terms-and-conditions" name="terms-and-conditions" />
                        <label htmlFor="terms-and-conditions">I hereby agree to the <a href='/terms-and-conditions.pdf' target="_blank">terms and conditions.</a></label>
                    </div>
                </CheckoutForm>
                <OrderSummary>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid black', width: 'inherit' }}>
                        <div style={{ marginBottom: '20px' }}>Order Summary</div>
                        {orders.map((order) => {
                            const s = order.selections;
                            return (
                                <div key={order.id} style={{ margin: '0 5px 10px', textAlign: 'center', fontSize: '14px' }}>
                                    <div>
                                        {s.plateType === 'protein' ? s.protein : s.pasta}
                                        {s.pastaProtein && s.pastaProtein !== 'none' ? ` + ${s.pastaProtein}` : ''}
                                    </div>
                                    <div>{s.base} · {s.veggie} · {s.sauce}</div>
                                    <div>{s.days} days — ${order.total}</div>
                                </div>
                            );
                        })}
                    </div>
                    <div style={{ border: '1px solid black', padding: '20px 0', display: 'flex', alignItems: 'center', flexDirection: 'column', width: 'inherit' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', marginLeft: '20px' }}>
                            <div>Subtotal</div>
                            <div>{`$ ${subtotal}`}</div>
                            <div style={{ marginRight: '15px' }}>Shipping</div>
                            <div>{`$ ${calculateShipping(selectedShipping).toFixed(2)}`}</div>
                            <div>Tax</div>
                            <div>{`$ ${tax.toFixed(2)}`}</div>
                        </div>
                        <SmallSeperator />
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', marginLeft: '20px' }}>
                            <div>Total</div>
                            <div>{`$ ${total}`}</div>
                        </div>
                    </div>
                    <div>
                        <p style={{ color: 'red' }}>Final Payment is due one week before order completion</p>
                        <div><div style={{
                            overflow: 'auto',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            width: '259px',
                            background: '#FFFFFF',
                            fontFamily: 'Playfair Display, SQ Market, Helvetica, Arial, sans-serif'
                        }}>
                            <div style={{ padding: '20px' }}>
                                <a id='modal-checkout-button' data-url={SQUARE_CHECKOUT_URL} href={SQUARE_CHECKOUT_URL} onClick={(e) => OnClickPayNow(e)} style={{
                                    display: 'inline-block',
                                    fontSize: '18px',
                                    lineHeight: '48px',
                                    height: '48px',
                                    color: '#ffffff',
                                    minWidth: '212px',
                                    backgroundColor: '#c4e2e8',
                                    textAlign: 'center',
                                    boxShadow: '0 0 0 1px rgba(0,0,0,.1) inset',
                                    borderRadius: '50px'
                                }}>Pay now</a>
                            </div>
                            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Playfair Display" />
                        </div>
                        </div>
                    </div>
                </OrderSummary>
            </CheckoutContainer>
        </>
    )
}

export default MockCheckout;
