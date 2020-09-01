import React from "react"
import styled from "styled-components"

import Leaf from "../../assets/svg/leaf.svg"
import { MainHeading } from "../Headings/Headings"

type PageHeroProps = {
    heading: string
    bgImage?: string
    bgColor?: string
}

type PageHeroContainerProps = {
    bgImage?: string
    bgColor?: string
}

const PageHeroContainer = styled.div<PageHeroContainerProps>`
    width: 100%;
    height: 400px;
    background-color: hsla(151, 50%, 60%, 1);
    background-image: /*linear-gradient(
            hsla(250, 20%, 10%, 0.3),
            hsla(250, 20%, 10%, 0.3)
        ),*/ url(${Leaf});
    background-position: center;
    background-repeat: repeat;
    background-size: center;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 960px) {
        height: 300px;
    }
    @media screen and (max-width: 600px) {
        height: 200px;
    }
`

const PageHeroHeading = styled(MainHeading)`
    color: white;
`

const PageHero: React.FC<PageHeroProps> = ({ heading }) => {
    return (
        <PageHeroContainer>
            <PageHeroHeading>{heading}</PageHeroHeading>
        </PageHeroContainer>
    )
}

export default PageHero
