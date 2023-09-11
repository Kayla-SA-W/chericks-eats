import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import Swag1 from '../images/food/swag1.jpg';
import Brownies from '../images/food/brownies.jpg';
import Menu from '../images/menu-stock.png';
import { Cart, CartContext } from '../context';

const TileWrapper = styled.div`
    margin: 60px 0px 35%;
    display: grid;
    grid-template-columns: 33% 33% 33%;
    @media screen and (max-width: 1024px){
        grid-template-columns: 1fr;
        row-gap: 80px;
        margin-bottom: 150px;
    }
`

const Tile = styled.div`
    height: 400px;
    width: max-content;
    > img{ 
        height: fill-available;
        @media screen and (max-width: 1024px){
           width: 100vw; 
        }
    }
`

const FloatingName = styled.a`
    text-decoration: none;
    color: black;
    background-color: white;
    position: relative;
    width: 90%;
    height: 108px;
    top: 15%;
    left: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    @media screen and (max-width: 1024px){
        width: 60%;
        margin: 0 auto;
        text-align: center;
      }
`
const Image = styled.img`
    width: fill-available;
`

export const FloatingTiles = () => {
    const [password, setPassword] = useState('');
    const [useNewFeature, setUseNewFeature] = useState(false);

    useEffect(() => {
        const urlQuery = (window.location.search).split('?');
        setPassword(String(urlQuery[1]));

        const date = new Date();
        const todayString = date.getMonth() + 1 + '' + date.getDate() + '' + date.getFullYear();
        const releaseDate = 9152023;
        const today = Number(todayString);
        if (today >= releaseDate || password === 'chefCherick') {
            setUseNewFeature(true);
        }
    });

    const { setCart } = useContext(CartContext);

    const onClick = () => {
        if(useNewFeature) {
            setCart((prevState: Cart) => ({ ...prevState, ['Chericks Weekend Eats']: {...prevState['Chericks Weekend Eats'], quantity: 1, price: 20 }}));
        }
    }

    return (
        <TileWrapper>
            <Tile>
                <FloatingName href='/swag'>Swag</FloatingName>
                <Image src={Swag1} />
            </Tile>
            <Tile>
                <FloatingName href='/menu'>Menu</FloatingName>
                <Image src={Menu} />
            </Tile>
            <Tile>
                <FloatingName href={useNewFeature ? '/cart' : '/menu'} onClick={onClick}>{useNewFeature ? 'Chericks Weekend Eats' : 'Order'}</FloatingName>
                <Image src={Brownies} />
            </Tile>
        </TileWrapper>
    )
}