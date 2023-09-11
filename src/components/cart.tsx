import React, { useContext, useEffect, useState } from 'react';
import { Cart, CartContext } from '../context';
import { CheckoutContext } from '../context/checkout-cart';
import { desserts } from '../data/menu-items';
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
@media screen and (max-width: 1024px){
place-items: center;
display: flex;
flex-direction: column;
}
`

const CheckoutWrapper = styled.div`
background-color: #c4e2e8;
display: flex;
align-items: center;
flex-direction: column;
height: 700px;
.checkout-button-enabled {
    background-color: white;
    cursor: pointer
}
.checkout-button-disabled {
    background-color: '';
    cursor: default;
}

@media screen and (max-width: 1024px){
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
width: 60%;
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
justify-items: center;
margin: 0 15%;
column-gap: 60px;
@media screen and (max-width: 1024px){
    grid-template-columns: 1fr;
 }
`

const CartItems = styled.div`
width: 500px;
@media screen and (max-width: 1024px){
    width: 350px;
 }
`

const CartContent = styled.div`
display: grid;
grid-template-columns: 350px 50px 123px;
font-size: 20px;
margin-bottom: 15px;
padding-bottom: 3px;
@media screen and (max-width: 1024px){
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
@media screen and (max-width: 1024px){
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

const WeekendEats = styled.div`
 font-size: 20px;
 > input { 
    width: 20px;
 }
`

const FilledCart = ({ cartItemNames, setAddEight }: { cartItemNames: string[]; setAddEight: React.Dispatch<React.SetStateAction<boolean>>; }) => {
    const { cart, setCart } = useContext(CartContext);
    const pastries = desserts.map((pastry) => pastry.name);

    const weekendEats = cartItemNames.includes('Chericks Weekend Eats');
    const weekendAndSides = cartItemNames.includes('Chericks Weekend Eats & Extra Side')

    return (
        <>
            <CartContentLabels>
                <div>Meals</div>
                <div>Price</div>
                <div>Quantity</div>
            </CartContentLabels>
            {cartItemNames.map((name, i) => {
                return (
                    <>
                        <CartContent key={`cart ${i + name}`}>
                            <div style={{ marginRight: '15px' }}>{name}</div>
                            <div>{`$${cart[name].price}`}</div>
                            {
                                weekendEats || weekendAndSides  ? <div style={{display: 'flex', justifyContent: 'center'}}>1</div> : (
                                    <CounterButton
                                        style={{ backgroundColor: 'white' }}
                                        updateCart={setCart}
                                        currentProduct={{ ...cart[name], name: name, quantity: cart[name].quantity }}
                                        singleItem={pastries.includes(name) ? true : false}
                                    />
                                )
                            }
                        </CartContent>
                    </>
                )
            })}
            { weekendEats ? (
                <WeekendEats>
                <input type='checkbox' id='extra-sides' onClick={() => {
                    setCart((prevState: Cart) => ({ ...prevState, ['Chericks Weekend Eats']: {...prevState['Chericks Weekend Eats'], quantity: 0, price: 20}, ['Chericks Weekend Eats & Extra Side']: {...prevState['Chericks Weekend Eats & Extra Side'], quantity: 1, price: 28 }}));
                }}/>
                <label htmlFor='extra-sides'>Extra Side?</label>
                </WeekendEats>
            ) : null}
        </>
    )
}

export const CheckoutContent = () => {
    const { cart } = useContext(CartContext);
    const [addEight, setAddEight] = useState(false);
    const cartItemNames = Object.keys(cart).filter((i) => {
        if (cart[i].quantity > 0) {
            return cart
        }
    });

    const { setCheckoutCart } = useContext(CheckoutContext);
    
    let subtotal = cartItemNames.map((name) => cart[name].price * cart[name].quantity).reduce((prev, current) => prev + current, 0) + (addEight ? 8 : 0 );
    const totalQuantities = cartItemNames.map((name) => cart[name].quantity).reduce((prev, current) => prev + current, 0);
    const tax = subtotal * .065;
    const total = (subtotal + tax).toFixed(2);

    const weekendEats = cartItemNames.includes('Chericks Weekend Eats') || cartItemNames.includes('Chericks Weekend Eats & Extra Side');
    const allowShipping = cartItemNames.includes('Cake Batter Chocolate Chip Cookies - 15ct') || cartItemNames.includes('Brownies - 15ct') || weekendEats;

    const errorMessage = cartItemNames.length === 0 || (totalQuantities < 3 && !allowShipping) ? true : false;

    useEffect(() => {
        const checkoutButton = document.getElementById('checkout-button');
        
        if (errorMessage) {
            checkoutButton?.setAttribute('disabled', '')
            checkoutButton?.classList.add('checkout-button-disabled');
            checkoutButton?.classList.remove('checkout-button-enabled');
        } else {
            checkoutButton?.removeAttribute('disabled');
            checkoutButton?.classList.remove('checkout-button-disabled');
            checkoutButton?.classList.add('checkout-button-enabled');
        }
    }, [errorMessage]);

    return (
        <CheckoutWrapper>
            <Title>
                Your Cart
            </Title>
            <Seperator />
            <CheckoutProperties>
                <div>
                    <CartItems>
                        <FilledCart cartItemNames={cartItemNames} setAddEight={setAddEight}/>
                    </CartItems>
                </div>
                <OrderSummaryWrapper>
                    <OrderSummary>
                        <div style={{ alignSelf: 'center', marginBottom: '20px' }}>Order Summary</div>
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
                            if (!errorMessage) {
                                window.location.replace("/checkout");
                            }
                        }}
                        style={{ width: '130px' }}>
                        Checkout
                    </StyledPillButton>
                </OrderSummaryWrapper>
            </CheckoutProperties>
        </CheckoutWrapper>
    )
}