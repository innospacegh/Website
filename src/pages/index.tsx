import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero/Hero"
import Spaces from "../components/Spaces/Spaces"
import ContactUs from "../components/ContactUs/ContactUs"
import Map from "../components/Map/Map"

import heroBg from "../assets/images/Coworking-Office-Space-01.jpg"

const Header = styled.header`
    height: 780px;
    background-image: linear-gradient(
            hsla(0, 0%, 10%, 0.9),
            hsla(0, 0%, 10%, 0.9)
        ),
        url(${heroBg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`

const IndexPage: React.FC = () => (
    <Layout>
        <SEO title="Home" />
        <Header>
            <Hero />
        </Header>
        <Spaces />
        <ContactUs />
        <Map />
    </Layout>
)

export default IndexPage
