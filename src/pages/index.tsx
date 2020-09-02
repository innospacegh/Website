import React, { useRef } from "react"
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

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop)

const IndexPage: React.FC = () => {
    const mapRef = useRef(null)
    const executeScroll = () => scrollToRef(mapRef)

    return (
        <Layout>
            <SEO title="Home" />
            <Header>
                <Hero scrollToMap={executeScroll} />
            </Header>
            <Spaces />
            <ContactUs />
            <Map mapRef={mapRef} />
        </Layout>
    )
}

export default IndexPage
