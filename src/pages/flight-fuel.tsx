import * as React from "react"
import { createGlobalStyle } from 'styled-components';
import "@fontsource/dancing-script";
import { Nav } from "../components/nav";
import FlightFuelMenu from "../components/flight-fuel-menu";
import { SiteHead } from '../components/site-head';

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: "Dancing Script";
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