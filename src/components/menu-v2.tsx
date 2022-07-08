import React, { Dispatch, SetStateAction, useContext, useMemo } from 'react';
import { Cart, CartContext } from '../context';
import styled from 'styled-components';
import { meatLessItems, pastaItems, desserts, proteinItems, sideItems } from '../data/menu-items';
import { CounterButton, OrderNowButton, StyledPillButton } from './pill-button';
import { initialCartState } from '../context/initial-cart';
import "@fontsource/libre-caslon-display";

const MenuWrapper = styled.div`
width: 100%;
padding: 30px 0;
`

const Menu = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
margin: 25px 0px 25px;
justify-content: center; 
gap: 20px;
padding: 0 5%;
`

const MenuOptions = styled.div`
display: grid;
grid-template-columns: 49% 21%;
margin-bottom: 15px;
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
margin: 0px 0px 15px;
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
`;

const MenuSelection = styled.div`
 display: flex;
 justify-content: flex-start;
 flex-grow: 1;
 flex-direction: column;
 padding: 20px;
 border: 4px dotted #c4e2e8;
 font-family: "Libre Caslon Display";
`
const Flavors = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
gap: 50px;
font-family: "Libre Caslon Display";
@media screen and (max-width: 540px){
    flex-direction: column;
}
`

export interface MenuItemSection {
    sectionName: string;
    options: {
        name: string;
    }[];
    singleItem?: boolean;
    cart: Cart;
    setOptionsCounter: Dispatch<SetStateAction<Cart>>;
}

const MenuItemSection = ({ sectionName, options, singleItem, cart, setOptionsCounter }: MenuItemSection) => {
    return (
        <MenuSelection>
            <div style={{ fontSize: '24px', display: 'flex', alignSelf: 'center', marginBottom: '15px' }}>{sectionName}</div>
            {options.map((option, i) => {

                const alcohol = cart[option.name].liqueur || cart[option.name].liquor;
            
                const MarkingStar = () => <div style={{color:'blue'}}> **</div>
                return (
                    <MenuOptions key={i}>
                        <div style={{ display: 'flex' }}>{option.name + ` -- $${cart[option.name].price} `}{cart[option.name].addOn || alcohol ? <MarkingStar /> : null}</div>
                        <div>
                            <CounterButton updateCart={setOptionsCounter} currentProduct={{ ...cart[option.name], name: option.name, quantity: cart[option.name].quantity }} singleItem={singleItem} />
                        </div>
                    </MenuOptions>
                )
            })}
        </MenuSelection>
    )
}

export const MenuContent = () => {
    const { cart, setCart } = useContext(CartContext);
    const memoizedMenu = useMemo(() =>
    (
        <MenuWrapper>
            <Title>Menu</Title>
            <div style={{margin: '0 25px', textAlign: 'center'}}>
            <Warning style={{ color: 'red' }}>Meal preperation services are only available to the Orlando Florida. All meal options are A La Carte and will be automatically set at 3 to meet the required 3 day meal prep minimum</Warning>
            <Warning>Only cookies and brownies are available for shipment anywhere in the USA.</Warning>
            <Warning>Please contact us at cherickseats@gmail.com to let us know of any allergies or food sensitivities before placing your oder.</Warning>
            </div>
            <Menu>
                <div style={{ display: 'flex', flexDirection: 'column', rowGap: '20px', flexGrow: 1 }}>
                    <MenuItemSection sectionName={'Veggie'} options={meatLessItems} cart={cart} setOptionsCounter={setCart} />
                    <MenuItemSection sectionName={'Protein'} options={proteinItems} cart={cart} setOptionsCounter={setCart} />
                    <MenuItemSection sectionName={'Pasta'} options={pastaItems} cart={cart} setOptionsCounter={setCart} />
                </div>
                <MenuItemSection sectionName={'Sides'} options={sideItems} cart={cart} setOptionsCounter={setCart} />
                <MenuItemSection sectionName={'Desserts'} options={desserts} cart={cart} setOptionsCounter={setCart} singleItem />
            </Menu>
            <div style={{margin: '0 25px', textAlign: 'center'}}>
                <Warning style={{color: 'blue'}}>**Once your order is confirmed and the depoist is paid we will reach out to you for Additional options including cake and liquor flavors</Warning>
                <Flavors>
                <div style={{display: 'flex', flexDirection:'column'}}>
                    <Warning style={{textDecoration: 'underline blue'}}>Liquor</Warning>
                   <p>Captain Morgan</p>
                   <p>Bacardi</p>
                   <p>Vodka</p>
                   <p>Remy</p>
                   <p>Hennessy</p>
                   <p>Tequila</p>
                   <p>Crown Royal</p>
                   <p>Brandy VSOP</p>
                </div>
                <div style={{display: 'flex', flexDirection:'column'}}>
                    <Warning style={{textDecoration: 'underline blue'}}>Liqueurs</Warning>
                   <p>Amaretto</p>
                   <p>Grand Marnier</p>
                   <p>Banana Liqueur</p>
                   <p>Maraschino Liqueur</p>
                   <p>Meyer's</p>
                   <p>Bailey's</p>
                   <p>Kahlua</p>
                </div>
                <div style={{display: 'flex', flexDirection:'column'}}>
                    <Warning style={{textDecoration: 'underline blue'}}>Mousse Flavors</Warning>
                   <p>White Chocolate Mousse</p>
                   <p>Milk Chocolate Mousse</p>
                   <p>Dark Chocolate Mousse</p>
                   <p>Caramel Mousse</p>
                </div>
                <div style={{display: 'flex', flexDirection:'column'}}>
                    <Warning style={{textDecoration: 'underline blue'}}>Cake Flavors</Warning>
                   <p>Funfetti Cake</p>
                   <p>Vanilla Cake</p>
                   <p>Chocolate Cake</p>
                </div>
                </Flavors>
            </div> 
            <ButtonWrapper>
                <StyledPillButton
                    onClick={() => {
                        setCart(initialCartState);
                    }}>
                    Empty Cart
                </StyledPillButton>
                <OrderNowButton location='cart' text='Go to Cart' style={{ width: '100px' }} />
            </ButtonWrapper>
        </MenuWrapper>
    ), [cart, setCart]);

    return memoizedMenu;
}