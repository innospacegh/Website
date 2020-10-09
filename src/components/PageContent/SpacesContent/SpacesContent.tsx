import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import InnerContainer from "../../InnerContainer/InnerContainer"
import Space from "../../Spaces/Space/Space"

const SpaceSection = styled.section``

const SpacesContainer = styled(InnerContainer)`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`

const SpaceDescription = styled.p`
    text-align: center;
    max-width: 500px;
    margin: 2rem auto 1.5rem auto;
`

const SpacesContent: React.FC = () => {
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
        <SpaceSection>
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
        </SpaceSection>
    )
}

export default SpacesContent
