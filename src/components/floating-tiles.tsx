import React from 'react';
import styled from 'styled-components';
import FlightFuel from '../images/flight-fuel.png';
import Menu from '../images/menu-stock.png';

const TileWrapper = styled.div`
    margin: 60px 0px 35%;
    display: grid;
    grid-template-columns: 50% 50%;
    gap: 50px;
    @media screen and (max-width: 1024px){
        grid-template-columns: 1fr;
        row-gap: 80px;
        margin-bottom: 150px;
    }
`

const Tile = styled.div`
    height: 450px;
    width: max-content;
    > img {
        height: 100%;
        @media screen and (max-width: 1024px){
           width: 80vw;
        }
    }
    > div {
        font-family: "Libre Caslon Display";
        max-width: 30vw;
        background-color: rgba(149, 190, 206, 0.5);
        display: flex;
        flex-direction: column;
        align-items: center;
        height: inherit;
        @media screen and (max-width: 1024px){
           max-width: 80vw;
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
    width: 100%;
`

export const FloatingTiles = () => {

    return (
        <TileWrapper>
            <Tile>
                <FloatingName href='/menu'>Menu</FloatingName>
                <Image src={Menu} />
            </Tile>
            <Tile>
                <FloatingName href='/flight-fuel'>Flight Fuel</FloatingName>
                <div>
                    <Image src={FlightFuel} /> 
                    <p style={{margin: '5px 0', fontSize: '16px', fontWeight: 'bold'}}>Meals Made for Life in the Sky </p>
                    <p style={{margin: '3px 0'}}>✈️ Flight-friendly (no strong odors, low spill risk)</p>
                    <p style={{margin: '3px 0'}}>🥗 Hearty & satisfying (keeps crew full for long duty days)</p>
                    <p style={{margin: '3px 0'}}>🧊 Multi-day prep friendly (3-4 days refrigerated)</p>
                    <p style={{margin: '3px 0'}}>💼 Professional enough for pilots & crew </p>
                    <p style={{margin: '3px 0'}}>🕰️ Easy to eat on short breaks or during layovers</p>
                </div>
            </Tile>
        </TileWrapper>
    )
}