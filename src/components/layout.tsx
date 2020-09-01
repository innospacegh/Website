import React from "react"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import Helmet from "react-helmet"

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
    }
`

type LayoutProps = {
    children: React.ReactNode
}

const Layout: React.FC = ({ children }: LayoutProps) => {
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles />
                <Helmet>
                    <link
                        href="https://fonts.googleapis.com/css?family=Poppins:400,500,600&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.googleapis.com/css?family=Muli:400,600,700&display=swap"
                        rel="stylesheet"
                    />
                </Helmet>
                <MainNav />
                <main>{children}</main>
                <Footer />
            </>
        </ThemeProvider>
    )
}

export default Layout
