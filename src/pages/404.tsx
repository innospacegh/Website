import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHero from "../components/PageHero/PageHero"

const Main = styled.main`
    margin-top: 64px;
    text-align: center;
`

const NotFoundPage: React.FC = () => (
    <Layout>
        <SEO title="404: Not found" />
        <Main>
            <PageHero heading={"404: Page Not found"}/>
            <h1>NOT FOUND</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </Main>
    </Layout>
)

export default NotFoundPage
