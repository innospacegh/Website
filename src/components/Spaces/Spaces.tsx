import React from "react"
import styled from "styled-components"
import InnerContainer from "../InnerContainer/InnerContainer"
import { SectionHeading } from "../Headings/Headings"
import Space from "./Space/Space"
import { useStaticQuery, graphql } from "gatsby"

const SpacesSection = styled.section`
    padding: 4rem 0 8rem 0;
    @media screen and (max-width: 760px) {
        padding: 3rem 0 6rem 0;
    }
    @media screen and (max-width: 500px) {
        padding: 2rem 0 4rem 0;
    }
`

const SpaceHeading = styled(SectionHeading)`
    color: hsl(0, 0%, 20%);
`

const SpaceDescription = styled.p`
    text-align: center;
    margin-bottom: 2rem;
`

const SpacesContainer = styled(InnerContainer)`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    color: hsl(0, 0%, 20%);
`

const Spaces: React.FC = () => {
    const spacesData = useStaticQuery(
        graphql`
            query {
                allAirtable(filter: { table: { eq: "Spaces" } }) {
                    nodes {
                        id
                        data {
                            Space
                            Description
                            Attachments {
                                url
                            }
                        }
                    }
                }
            }
        `
    )

    return (
        <SpacesSection>
            <SpaceHeading>Our Spaces</SpaceHeading>
            <SpaceDescription>
                We offer various affordable and spaces for you specific needs
                with flexible requirements in a serene environment.
            </SpaceDescription>
            <SpacesContainer>
                {spacesData.allAirtable.nodes.map(data => (
                    <Space
                        key={data.id}
                        space={data.data.Space}
                        description={data.data.Description}
                        image={data.data.Attachments[0].url}
                    />
                ))}
            </SpacesContainer>
        </SpacesSection>
    )
}

export default Spaces
