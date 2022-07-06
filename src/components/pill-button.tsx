import React, { Dispatch, SetStateAction } from 'react';
import styled, { CSSObject } from 'styled-components';
import "@fontsource/dancing-script";
import { Cart } from '../context';

const StyledPill = styled.a`
    background-color: rgba(55, 69, 119, 0.23);
    border-radius: 25px;
    padding: 10px 25px;
    font-size: 25px;
    border-color: rgba(55, 69, 119, 0.23);
    font-family: 'Dancing Script';
    width: fit-content;
    justify-content: center;
    text-decoration: none;
    color: black;
    margin-top: 25px;
    text-align: center;
`

export const OrderNowButton = ({ location, text, style }: { location?: string; text: string; style?: CSSObject }) => (
    <StyledPill href={`/${location}`} style={style}>{text}</StyledPill>
);

export const StyledPillButton = styled.button`
    background-color: rgba(55, 69, 119, 0.23);
    border-radius: 25px;
    padding: 10px 25px;
    font-size: 25px;
    border: none;
    font-family: 'Dancing Script';
    width: 150px;
    justify-content: center;
    text-decoration: none;
    color: black;
    margin-top: 25px;
    cursor: pointer;
`

const StyledInput = styled.input`
place-self: center;
width: 35px;
background-color: white;
font-family: 'Dancing Script';
border: none;
text-align: center;
outline: none;
padding: 0px;
`

const ChangeButtons = styled.button`
background-color: inherit;
border: none;
font-size: 22px;
font-family: 'Dancing Script';
`

const CounterButtonWrapper = styled(props => <div {...props} />)`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
place-items: center;
border: 1px solid #E77878;
margin-left: 20px;
width: fit-content;
height: 31px;
`

interface CounterButton {
    currentProduct: {
        name: string;
        price: number;
        quantity: number;
    };
    updateCart: Dispatch<SetStateAction<Cart>>;
    singleItem?: boolean
    style?: CSSObject;
}

export const CounterButton = ({ currentProduct, updateCart, singleItem, style }: CounterButton) => {
    const updateValues = ({currentValue, addition, subtraction}:{currentValue: number; addition?: boolean; subtraction?: boolean }) => {
        const firstAdd = currentValue === 0 && !singleItem ? 3 : 1;
        const firstSub = currentValue === 3 && !singleItem ? 3 : 1;
        const setValue = addition ? currentValue + firstAdd : subtraction ? currentValue - firstSub : currentValue;
        const updateValue = setValue < 0 ? 0 : setValue;
        updateCart((prevState: Cart) => ({ ...prevState, [currentProduct.name]: { quantity: updateValue, price: currentProduct.price } }));
    }

    return (
        <CounterButtonWrapper style={style}>
            <ChangeButtons
            style={{borderRight: '1px solid rgba(55, 69, 119, 0.23)', placeSelf: 'center'}}
                onClick={() => { 
                    updateValues({currentValue: currentProduct.quantity, subtraction: true})
                }}
            >
                -
            </ChangeButtons>
            <StyledInput type='text'
                readOnly
                value={currentProduct.quantity}
                onChange={(event) => { 
                    updateValues({currentValue: parseInt(event.target.value)})
                 }}
            />
            <ChangeButtons
                style={{borderLeft: '1px solid rgba(55, 69, 119, 0.23)', placeSelf: 'center'}}
                onClick={() => { 
                    updateValues({currentValue: currentProduct.quantity, addition: true})
                }}
            >
                +
            </ChangeButtons>
        </CounterButtonWrapper>

    )
}
