import * as React from "react"
import { createGlobalStyle } from 'styled-components';
import "@fontsource/dancing-script";
import { Nav } from "../components/nav";
import FlightFuelMenu from "../components/flight-fuel-menu";
import { SiteHead } from '../components/site-head';

const GlobalStyle = createGlobalStyle`
body {
  background-color: #1a0e07;
  margin: 0;
  font-family: "Libre Caslon Display";
  color: #f5edd8;
}
`

const GlobalStyleProxy: any = GlobalStyle;

const FlightFuel = () => {
  return (
    <>
      <GlobalStyleProxy />
      <Nav header />
      <FlightFuelMenu />
      <Nav header={false} />
    </>
  )
}

export default FlightFuel
export const Head = () => <SiteHead title="Flight Fuel | Cherick's Eats" description="Cherick's Eats Flight Fuel — nutritious, travel-ready meals designed to keep you energized on the go." path="/flight-fuel" />;