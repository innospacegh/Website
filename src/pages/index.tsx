import React, { useRef } from "react"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero/Hero"
import Spaces from "../components/Spaces/Spaces"
import ContactUs from "../components/ContactUs/ContactUs"
import Map from "../components/Map/Map"

const HeaderWithBg: React.FC = ({ children }) => (
    <StaticQuery
        query={graphql`
            query {
                desktop: file(
                    relativePath: { eq: "Coworking-Office-Space-01.jpg" }
                ) {
                    childImageSharp {
                        fluid(quality: 90, maxWidth: 3024) {
                            ...GatsbyImageSharpFluid_withWebp_tracedSVG
                        }
                    }
                }
            }
        `}
        render={data => {
            // Set Image Data
            const backgroundFluidImageStack = [
                data.desktop.childImageSharp.fluid,
                `linear-gradient(
                    hsla(0, 0%, 10%, 0.9),
                    hsla(0, 0%, 10%, 0.9)
                )`,
            ].reverse()
            return (
                <BackgroundImage
                    fluid={backgroundFluidImageStack}
                    preserveStackingContext={true}
                    style={{
                        width: "100%",
                        height: "780px",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        display: "flex",
                    }}
                    Tag="header"
                >
                    {children}
                </BackgroundImage>
            )
        }}
    />
)

// const Header = styled(HeaderWithBg)`
//     height: 780px;
//     background-image: linear-gradient(
//             hsla(0, 0%, 10%, 0.9),
//             hsla(0, 0%, 10%, 0.9)
//         ),
//         url(${heroBg});
//     background-position: center;
//     background-repeat: no-repeat;
//     background-size: cover;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop)

const IndexPage: React.FC = () => {
    const mapRef = useRef(null)
    const executeScroll = () => scrollToRef(mapRef)

    return (
        <Layout>
            <SEO title="Home" />
            <HeaderWithBg>
                <Hero scrollToMap={executeScroll} />
            </HeaderWithBg>
            {/* <HeaderWithBg /> */}
            <Spaces />
            <ContactUs />
            <Map mapRef={mapRef} />
        </Layout>
    )
}

export default IndexPage
