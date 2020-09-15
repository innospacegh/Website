import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHero from "../components/PageHero/PageHero"

const Main = styled.main`
    margin-top: 64px;
    text-align: center;
`

const NotFoundTitle = styled.h1`
    font-family: "Poppins", "Muli", sans-serif;
    font-size: 5rem;
`

const NotFoundText = styled.p`
    font-size: 2rem;
`

const NotFoundPage: React.FC = () => (
    <Layout>
        <SEO title="404: Not found" />
        <Main>
            <PageHero heading={"404: Page Not found"} />
            <NotFoundTitle>NOT FOUND</NotFoundTitle>
            <NotFoundText>
                You just hit a route that doesn&#39;t exist... the sadness.
            </NotFoundText>
        </Main>
    </Layout>
)

export default NotFoundPage
