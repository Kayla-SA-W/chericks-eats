import * as React from "react"
import { createGlobalStyle } from 'styled-components';
import "@fontsource/dancing-script";
import { Nav } from "../components/nav";
import FlightFuelMenu from "../components/flight-fuel-menu";

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