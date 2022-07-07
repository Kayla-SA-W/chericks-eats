import React, { useContext, useEffect, useState } from 'react';
import { Cart, CartContext } from '../context';
import { CheckoutContext } from '../context/checkout-cart';
import { desserts } from '../data/menu-items';
import styled from 'styled-components';
import { CounterButton, StyledPillButton } from './pill-button';
import Select from 'react-select';

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

const StyedSelect = styled(Select)`
margin-bottom: 30px;
`

const FilledCart = ({ cartItemNames }: { cartItemNames: string[]; }) => {
    const { cart, setCart } = useContext(CartContext);
    const pastries = desserts.map((pastry) => pastry.name);
    const [showAddOn, setShowAddOn] = useState(false);
    const [selectedAddOn, setSelectedAddOn] = useState(null);
    const [selectedLiquor, setSelectedLiquor] = useState(null);
    const [selectedLiqueur, setSelectedLiqueur] = useState(null);


    const FindAddOns = (type: string, name: string) => {
        if (type === 'addOn') {
            return (
                <StyedSelect
                    options={cart[name].addOn?.map(({ name, price }, i) => {
                        return { value: name, label: (`${name} ${price ? ` +$${price}` : ''}`) }
                    })}
                    value={selectedAddOn}
                    onChange={(e: any) => {
                        setSelectedAddOn(e);
                    }
                    }
                />
            )
        } else if (type === 'liquor') {
            return (
                <StyedSelect
                    options={
                        [
                            { value: 'Captain Morgan', label: 'Captain Morgan' },
                            { value: 'Bacardi', label: 'Bacardi' },
                            { value: 'Vodka', label: 'Vodka' },
                            { value: 'Remy', label: 'Remy' },
                            { value: 'Hennessy', label: 'Hennessy' },
                            { value: 'Tequila', label: 'Tequila' },
                            { value: 'Crown Royal', label: 'Crown Royal' },
                            { value: 'Brandy VSOP', label: 'Brandy VSOP' }
                        ]
                    }
                    value={selectedLiquor}
                    onChange={(e:any) => {
                        setSelectedLiquor(e);
                    }
                    }
                />
            )
        } else {
            return (
                <StyedSelect
                    options={
                        [
                            { value: 'Amaretto', label: "Amaretto" },
                            { value: 'Grand Marnier', label: "Grand Marnier" },
                            { value: 'Banana Liqueur', label: "Banana Liqueur" },
                            { value: 'Maraschino Liqueur', label: "Maraschino Liqueur" },
                            { value: "Meyer's", label: "Meyer's" },
                            { value: "Bailey's", label: "Bailey's" },
                            { value: 'Kahlua', label: "Kahlua" }
                        ]
                    }
                    value={selectedLiqueur}
                    onChange={(e:any) => {
                        setSelectedLiqueur(e);
                    }
                    }
                />
            )
        }
    }
    return (
        <>
            <CartContentLabels>
                <div>Meals</div>
                <div>Price</div>
                <div>Quantity</div>
            </CartContentLabels>
            {cartItemNames.map((name, i) => {
                const defineAddOns = cart[name].addOn || cart[name].liqueur || cart[name].liquor;
                setShowAddOn(defineAddOns ? true : false);
                return (
                    <>
                        <CartContent key={`cart ${i + name}`}>
                            <div style={{ marginRight: '15px' }}>{name}</div>
                            <div>{`$${cart[name].price}`}</div>
                            <CounterButton
                                style={{ backgroundColor: 'white' }}
                                updateCart={setCart}
                                currentProduct={{ ...cart[name], name: name, quantity: cart[name].quantity }}
                                singleItem={pastries.includes(name) ? true : false}
                            />
                        </CartContent>
                    </>
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
        if (errorMessage) {
            checkoutButton?.setAttribute('disabled', '')
            checkoutButton?.classList.add('checkout-button-disabled');
            checkoutButton?.classList.remove('checkout-button-enabled');
        } else {
            checkoutButton?.removeAttribute('disabled');
            checkoutButton?.classList.remove('checkout-button-disabled');
            checkoutButton?.classList.add('checkout-button-enabled');
        }
    }, [errorMessage])

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