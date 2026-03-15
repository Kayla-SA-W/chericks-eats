import * as React from "react"
import { createGlobalStyle } from 'styled-components';
import "@fontsource/dancing-script";
import { Nav } from "../components/nav";
import { CookbooksContent } from "../components/cookbooks";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: "Dancing Script";
}
`

const GlobalStyleProxy: any = GlobalStyle;

const Cookbooks = () => {
  return (
    <>
      <GlobalStyleProxy />
      <Nav header />
      <CookbooksContent />
      <Nav header={false} />
    </>
  )
}

export default Cookbooks
