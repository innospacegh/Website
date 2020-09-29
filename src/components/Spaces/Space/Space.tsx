import React from "react"
import styled, { css } from "styled-components"
import { SubHeading } from "../../Headings/Headings"

type SpaceProps = {
    space: string
    description: string
    image: string
}

const sharedStyling = css`
    font-family: ${props => props.theme.typography.altFont};
    margin: 10px 0;
`

const SpaceContent = styled.div`
    padding: 30px 30px 20px 30px;
`

const SpaceHeading = styled(SubHeading)`
    ${sharedStyling}
    font-size: 24px;
    font-weight: 600;
    color: hsl(0, 0%, 15%);
    text-align: left;
`

const SpaceDescription = styled.p`
    ${sharedStyling}
    font-size: 14px;
    line-height: 1.5;
    color: hsl(0, 0%, 30%);
    font-size: 16px;
`

const SpaceContainer = styled.div`
    margin: 16px 0;
    width: 360px;
    /* height: 380px; */
    border: 1px solid hsla(0, 0%, 80%, 0.5);
    border-radius: 5px;
`

const SpaceImageContainer = styled.div``

const SpaceImage = styled.div<{ bg: string }>`
    height: 215px;
    width: 100%;
    background: hsl(193, 50%, 33%);
    background-image: url(${props => props.bg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin: auto;
`

const Space: React.FC<SpaceProps> = ({ space, description, image }) => {
    return (
        <SpaceContainer>
            <SpaceImageContainer>
                <SpaceImage bg={image} />
            </SpaceImageContainer>
            <SpaceContent>
                <SpaceHeading>{space}</SpaceHeading>
                <SpaceDescription>{description}</SpaceDescription>
            </SpaceContent>
        </SpaceContainer>
    )
}

export default Space
