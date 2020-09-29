import React from "react"
import Layout from "../layout"
import SEO from "../seo"
import styled from "styled-components"
import PageHero from "../PageHero/PageHero"
import SpacesContent from "../PageContent/SpacesContent/SpacesContent"
import EventsContent from "../PageContent/EventsContent/EventsContent"
import MembershipContent from "../PageContent/MembershipContent/MembershipContent"
import AboutContent from "../PageContent/AboutContent/AboutContent"
import ContactContent from "../PageContent/ContactContent/ContactContent"

type PageTemplateProps = {
    pageContext?: any
}

const Main = styled.main`
    margin-top: 64px;
`

const PageTemplate: React.FC<PageTemplateProps> = ({
    pageContext,
}: PageTemplateProps) => {
    const page = pageContext.name
    let content = <h1>404</h1>

    switch (page) {
        case "Spaces":
            content = <SpacesContent />
            break
        case "Events":
            content = <EventsContent />
            break
        case "Memberships":
            content = <MembershipContent />
            break
        case "About":
            content = <AboutContent />
            break
        case "Contact":
            content = <ContactContent />
            break
        default:
            content = <h1>404</h1>
    }

    return (
        <Layout>
            <SEO title={page} />
            <Main>
                <PageHero heading={page} />
            </Main>
            {content}
        </Layout>
    )
}

export default PageTemplate
