import React from "react"
import styled from "styled-components"
import InnerContainer from "../InnerContainer/InnerContainer"
import ContactDetails from "../ContactDetails/ContactDetails"
import ContactForm from "../ContactForm/ContactForm"
import ContactUsIllustration from "../SvgComponents/ContactUsIllustration"
import { SectionHeading } from "../Headings/Headings"

const ContactSection = styled.section`
    background-color: hsl(220, 10%, 90%);
    color: hsl(250, 90%, 10%);
`

const ContactContainer = styled(InnerContainer)`
    /* border: 1px solid tomato; */
`

const ContactHeading = styled(SectionHeading)`
    color: hsl(249.3, 88%, 10%);
`

const ContactContent = styled.div`
    /* display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    @media screen and (max-width: 960px) {
        flex-direction: column;
    } */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    /* border: 1px solid white; */
`

const ContactImage = styled.div`
    flex-basis: 380px;
    flex-grow: 1;
    padding: 16px;
    /* border: 1px solid greenyellow; */
`

const ContactUs: React.FC = () => {
    return (
        <ContactSection>
            <ContactContainer>
                <ContactHeading>Contact Us</ContactHeading>
                <ContactDetails />
                <ContactContent>
                    <ContactImage>
                        <ContactUsIllustration />
                    </ContactImage>
                    <ContactForm />
                </ContactContent>
            </ContactContainer>
        </ContactSection>
    )
}

export default ContactUs

// Todo
// Hours of operation

// Call Us
// Email Us
// Visit Us
