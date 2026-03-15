import * as React from "react"
import { createGlobalStyle } from 'styled-components';
import "@fontsource/dancing-script";
import { Nav } from "../components/nav";
import MealPrepMenuPage from "../components/meal-prep-menu-page";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: "Dancing Script";
}
`

const GlobalStyleProxy: any = GlobalStyle;

const MealPrep = () => {
  return (
    <>
      <GlobalStyleProxy />
      <Nav header />
      <MealPrepMenuPage />
      <Nav header={false} />
    </>
  )
}

export default MealPrep
