import React, { Dispatch, SetStateAction, useContext, useMemo } from 'react';
import { Cart, CartContext } from '../context';
import styled from 'styled-components';
import { meatLessItems, pastaItems, proteinItems, sideItems } from '../data/menu-items';
import { CounterButton, OrderNowButton, StyledPillButton } from './pill-button';
import { initialCartState } from '../context/initial-cart';

const MenuWrapper = styled.div`
background-color: #E77878;
width: 100%;
height: fit-content;
display: flex;
justify-content: center;
align-items: center;
padding: 30px 0;
`

const Menu = styled.div`
background-color: white;
height: fit-content;
width: fit-content;
margin: 25px 0px 25px;
`

const ContentWrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
@media screen and (max-width: 540px){
    grid-template-columns: 1fr;
 }
`

const MenuOptions = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
column-gap: 10px;
margin-bottom: 15px;
padding: 0 10%;
@media screen and (max-width: 540px){
    padding: 0;
    width: 100%;
    margin-bottom: 20px;
 }
`

const Title = styled.div`
display: flex;
font-size: 48px;
justify-content: center;
margin: 40px 0px 15px;
@media screen and (max-width: 540px){
    margin-bottom: 25px;
 }
`

const Warning = styled.div`
font-family: "Libre Caslon Display";
display: flex;
font-size: 20px;
justify-content: center;
margin: 15px 0px;
@media screen and (max-width: 540px){
    text-align: center;
    padding: 0 10px;
    margin-bottom: 25px;
 }
`

const ButtonWrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
width: 350px;
place-items: center;
margin: 20px auto 50px;
`
export interface MenuItemSection {
    sectionName: string;
    options: {
        name: string;
    }[];
    cart: Cart;
    setOptionsCounter: Dispatch<SetStateAction<Cart>>;
}

const MenuItemSection = ({ sectionName, options, cart, setOptionsCounter }: MenuItemSection) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', padding: '0 20px' }}>
            <div style={{ fontSize: '24px', display: 'flex', alignSelf: 'center', marginBottom: '15px' }}>{sectionName}</div>
            {options.map((option) => {
                return (
                    <MenuOptions>
                        <div style={{ display: 'flex' }}>{option.name}</div>
                        <div style={{ display: 'grid', gridTemplateColumns: '40px 1fr', placeItems: 'center flex-end'}}>
                            {`$ ${cart[option.name].price}`}
                            <CounterButton updateCart={setOptionsCounter} currentProduct={{ ...cart[option.name], name: option.name, quantity: cart[option.name].quantity }} singleItem={sectionName === 'Pastry' ? true : false} />
                        </div>
                    </MenuOptions>
                )
            })}
        </div>
    )
}

export const MenuContent = () => {
    const { cart, setCart } = useContext(CartContext);
    const memoizedMenu = useMemo(() =>
    (
        <MenuWrapper>
            <Menu>
                <Title>Menu</Title>
                <Warning>Meal preperation services are only available to the Orlando Florida area and require a 3 day prep minimum to be placed.</Warning>
                <Warning style={{color: 'red'}}>All meal options are A La Carte and will be automatically set at 3 to meet the required 3 day meal prep minimum</Warning>
                <Warning style={{textTransform: 'uppercase'}}><strong>Pastry items are not included in the three day prep minimum.</strong></Warning>
                <Warning>Only cookies and brownies are available for shipment anywhere in the USA.</Warning>
                <Warning>Please contact us at cherickseats@gmail.com to let us know of any allergies or food sensitivities before placing your oder.</Warning>
                <ContentWrapper>
                    <MenuItemSection sectionName={'Veggie'} options={meatLessItems} cart={cart} setOptionsCounter={setCart} />
                    <MenuItemSection sectionName={'Protein'} options={proteinItems} cart={cart} setOptionsCounter={setCart} />
                    <MenuItemSection sectionName={'Pasta'} options={pastaItems} cart={cart} setOptionsCounter={setCart} />
                </ContentWrapper>
                <ContentWrapper>
                    <MenuItemSection sectionName={'Sides'} options={sideItems} cart={cart} setOptionsCounter={setCart} />
                </ContentWrapper>
                <ButtonWrapper>
                    <StyledPillButton
                        onClick={() => {
                            setCart(initialCartState);
                        }}>
                        Empty Cart
                    </StyledPillButton>
                    <OrderNowButton location='cart' text='Go to Cart' style={{ width: '100px' }} />
                </ButtonWrapper>
            </Menu>
        </MenuWrapper>
    ), [cart, setCart]);

    return memoizedMenu;
}