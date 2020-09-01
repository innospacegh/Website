import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import InnerContainer from "../InnerContainer/InnerContainer"
import InnoSpaceLogo from "../SvgComponents/InnoSpaceLogo"
import FacebookLogo from "../SvgComponents/FacebookLogo"
import InstagramLogo from "../SvgComponents/InstagramLogo"
import TwitterLogo from "../SvgComponents/TwitterLogo"

type FooterProps = {
    sticky?: boolean
}

const FooterSection = styled.section<FooterProps>`
    background-color: hsl(206, 50%, 18%); /*hsl(200, 20%, 40%);*/
    width: 100%;
    padding: 0.5rem;
    ${props => (props.sticky ? "position: absolute; bottom: 0;" : null)}
`

const FooterContainer = styled(InnerContainer)`
    padding: 15px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 400px) {
        flex-direction: column;
        justify-content: space-between;
        align-items: space-between;
    }
`

const FooterBrand = styled(Link)`
    display: block;
    padding: 0;
    margin: 0 20px;
    width: 160px;
    line-height: 100%;
    @media screen and (max-width: 400px) {
        margin: 0.5rem;
    }
`

const FooterSocial = styled.div`
    display: flex;
    @media screen and (max-width: 400px) {
        margin: 0.5rem;
    }
`

const FooterSocialLink = styled.a`
    display: block;
    width: 50px;
    height: 50px;
    margin-right: 0.5em;
    // margin-left: 16px;
    text-decoration: none;
`

const Footer: React.FC<FooterProps> = ({ sticky }) => {
    return (
        <FooterSection sticky={sticky}>
            <FooterContainer>
                <FooterBrand to="/">
                    <InnoSpaceLogo spaceColor="white" />
                </FooterBrand>
                <FooterSocial>
                    <FooterSocialLink
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener"
                    >
                        <FacebookLogo />
                    </FooterSocialLink>
                    <FooterSocialLink
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener"
                    >
                        <InstagramLogo />
                    </FooterSocialLink>
                    <FooterSocialLink
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener"
                    >
                        <TwitterLogo />
                    </FooterSocialLink>
                </FooterSocial>
            </FooterContainer>
        </FooterSection>
    )
}

export default Footer
