import React from "react"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"

import theme from "../theme"
import MainNav from "./MainNav/MainNav"
import Footer from "./Footer/Footer"
const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        font-family: 'Poppins', Arial, Helvetica, sans-serif;
        font-style: normal;
        text-rendering: optimizeLegibility;
        scroll-behavior: smooth;
    }
`

const Main = styled.main`
    scroll-behavior: smooth;
`

const Layout: React.FC = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles />
                <MainNav />
                <Main>{children}</Main>
                <Footer />
            </>
        </ThemeProvider>
    )
}

export default Layout
