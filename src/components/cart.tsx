import React, { useContext, useEffect } from 'react';
import { CartContext } from '../context';
import { CheckoutContext } from '../context/checkout-cart';
import { pastryItems } from '../data/menu-items';
import styled from 'styled-components';
import { CounterButton, StyledPillButton } from './pill-button';

export const OrderSummary = styled.div`
background-color: white;
height: 153px;
width: 237px;
padding: 10px 25px;
display: flex;
justify-content: center;
flex-direction: column;
`

const OrderSummaryWrapper = styled.div`
@media screen and (max-width: 540px){
place-items: center;
display: flex;
flex-direction: column;
}
`

const CheckoutWrapper = styled.div`
background-color: #E77878;
display: flex;
align-items: center;
flex-direction: column;
height: 700px;
@media screen and (max-width: 540px){
    height: fit-content;
    padding-bottom: 50px;
}
`

const Title = styled.div`
display: flex;
font-size: 48px;
justify-content: center;
margin: 40px 0px 15px;
`

const Seperator = styled.hr`
height: .5px;
width: 90%;
background-color: black;
border: 1px black solid;
margin-bottom: 40px;
`
export const SmallSeperator = styled.hr`
height: .5px;
width: 90%;
background-color: black;
border: 1px black solid;
`

const CheckoutProperties = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
column-gap: 60px;
@media screen and (max-width: 540px){
    grid-template-columns: 1fr;
 }
`

const CartItems = styled.div`
width: 500px;
@media screen and (max-width: 540px){
    width: 350px;
 }
`

const CartContent = styled.div`
display: grid;
grid-template-columns: 350px 50px 123px;
font-size: 20px;
margin-bottom: 15px;
padding-bottom: 3px;
@media screen and (max-width: 540px){
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;
 }
`

const CartContentLabels = styled.div`
display: grid;
grid-template-columns: 350px 60px 115px;
font-size: 26px;
border-bottom: 1px solid black;
margin-bottom: 15px;
@media screen and (max-width: 540px){
    grid-template-columns: 1fr 1fr 1fr;
 }
`

const CheckoutError = styled.div`
background-color: white;
height: 60px;
width: 237px;
padding: 10px 25px;
text-align: center;
font-size: 20px;
color: red;
`

const FilledCart = ({ cartItemNames }: { cartItemNames: string[]; }) => {
    const { cart, setCart } = useContext(CartContext);
    const pastries = pastryItems.map((pastry) => pastry.name);
    return (
        <>
            <CartContentLabels>
            <div>Meals</div>
            <div>Price</div>
            <div>Quantity</div>
            </CartContentLabels>
            {cartItemNames.map((name, i) => {
                return (
                    <CartContent key={i}>
                        <div style={{ marginRight: '15px' }}>{name}</div>
                        <div>{`$${cart[name].price}`}</div>
                        <CounterButton 
                            style={{backgroundColor: 'white'}} 
                            updateCart={setCart} 
                            currentProduct={{ ...cart[name], name: name, quantity: cart[name].quantity }} 
                            singleItem={pastries.includes(name) ? true : false} 
                        />
                    </CartContent>
                )
            })}
        </>
    )
}

export const CheckoutContent = () => {
    const { cart } = useContext(CartContext);
    const cartItemNames = Object.keys(cart).filter((i) => {
        if (cart[i].quantity > 0) {
            return cart
        }
    });

    const { setCheckoutCart } = useContext(CheckoutContext);

    const subtotal = cartItemNames.map((name) => cart[name].price * cart[name].quantity).reduce((prev, current) => prev + current, 0);
    const totalQuantities = cartItemNames.map((name) => cart[name].quantity).reduce((prev, current) => prev + current, 0);
    const tax = subtotal * .065;
    const total = (subtotal + tax).toFixed(2);

    const allowShipping = cartItemNames.includes('Cake Batter Chocolate Chip Cookies - 15ct') || cartItemNames.includes('Brownies - 15ct');

    const errorMessage = cartItemNames.length === 0 || (totalQuantities < 3 && !allowShipping) ? true : false;

    useEffect(() => {
        const checkoutButton = document.getElementById('checkout-button');
        if(errorMessage){
            checkoutButton?.setAttribute('disabled', '');
        }else{
            checkoutButton?.removeAttribute('disabled');
        }
    },[errorMessage])

    return (
        <CheckoutWrapper>
            <Title>
                Your Cart
            </Title>
            <Seperator />
            <CheckoutProperties>
                <div>
                    <CartItems>
                        <FilledCart cartItemNames={cartItemNames} />
                    </CartItems>
                </div>
                <OrderSummaryWrapper>
                    <OrderSummary>
                        <div style={{alignSelf: 'center', marginBottom: '20px'}}>Order Summary</div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', marginLeft: '20px' }}>
                            <div>Subtotal</div>
                            <div>{`$ ${subtotal}`}</div>
                            <div>Shipping</div>
                            <div>TBD</div>
                            <div>Tax</div>
                            <div>{`$ ${tax.toFixed(2)}`}</div>
                        </div>
                        <SmallSeperator />
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', marginLeft: '20px' }}>
                            <div>Total</div>
                            <div>{`$ ${total}`}</div>
                        </div>
                    </OrderSummary>
                    {errorMessage ? <CheckoutError>Please add 3 or more items to your cart</CheckoutError> : null}
                        <StyledPillButton
                            id='checkout-button'
                            onClick={() => {
                                setCheckoutCart(cartItemNames);
                                if(!errorMessage){
                                    window.location.replace("/checkout");
                                }
                            }} 
                            style={{ width: '130px', backgroundColor: errorMessage ? '' : 'white', cursor: errorMessage ? 'default' : 'pointer' }}>
                        Checkout
                        </StyledPillButton>
                </OrderSummaryWrapper>
            </CheckoutProperties>
        </CheckoutWrapper>
    )
}