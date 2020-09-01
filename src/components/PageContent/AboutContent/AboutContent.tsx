import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import InnerContainer from "../../InnerContainer/InnerContainer"

const AboutSection = styled.section``

const AboutContainer = styled(InnerContainer)`
    display: flex;
    justify-content: center;
`

const TextSection = styled.div`
    @media screen and (min-width: 992px) {
        max-width: 66.66%;
        flex-basis: 66.66%;
    }
    @media screen and (min-width: 768px) {
        padding: 1rem;
    }
`

const AboutText = styled.p`
    font-size: 1rem;
    line-height: 1.5;
    letter-spacing: 0.03em;
    margin: 1rem;
`

const AboutContent: React.FC = () => {
    const aboutData = useStaticQuery(
        graphql`
            query {
                allAirtable(filter: { table: { eq: "About" } }) {
                    nodes {
                        id
                        data {
                            Notes
                        }
                    }
                }
            }
        `
    )
    return (
        <AboutSection>
            <AboutContainer>
                <TextSection>
                    {aboutData.allAirtable.nodes.map(item => (
                        <AboutText key={item.id}>{item.data.Notes}</AboutText>
                    ))}
                </TextSection>
            </AboutContainer>
        </AboutSection>
    )
}

export default AboutContent
