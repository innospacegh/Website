import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import CallIconOutline from "../SvgComponents/CallIconOutline"
import MailIconOutline from "../SvgComponents/MailIconOutline"
import AddressIconOutline from "../SvgComponents/AddressIconOutline"

const ContactCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    /* border: 1px solid black; */
`

const ContactCard = styled.div`
    width: 280px;
    padding: 1rem;
    border: 1px solid #44ce6f;
    border-radius: 6px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`

const ContactIcon = styled.div`
    width: 60px;
    height: 60px;
    text-align: center;
    & svg {
        fill: hsl(160, 50%, 50%);
        stroke: hsl(160, 50%, 50%);
    }
    border: 1px solid white;
`

const ContactCardName = styled.h4`
    color: hsl(160, 50%, 50%);
`

const ContactList = styled.ul`
    padding: 0;
    text-align: left;
    border: 1px solid black;
`

const ContactItem = styled.li`
    list-style: none;
    padding: 0.3rem;
    font-family: ${props => props.theme.typography.altFont};
    font-size: 18px;
`

const ContactLink = styled.a`
    text-decoration: none;
`

const ContactDetails: React.FC = () => {
    const contactsData = useStaticQuery(
        graphql`
            query {
                allAirtable(filter: { table: { eq: "Contacts" } }) {
                    edges {
                        node {
                            id
                            data {
                                Phone
                                Email
                                Address
                            }
                        }
                    }
                }
            }
        `
    )

    return (
        <ContactCards>
            <ContactCard>
                <ContactIcon>
                    <CallIconOutline />
                </ContactIcon>
                <ContactCardName>Call Us</ContactCardName>
                <ContactList>
                    {contactsData.allAirtable.edges.map(edge => (
                        <ContactItem key={edge.node.id}>
                            <ContactLink href={`tel: ${edge.node.data.Phone}`}>
                                {edge.node.data.Phone}
                            </ContactLink>
                        </ContactItem>
                    ))}
                </ContactList>
            </ContactCard>
            <ContactCard>
                <ContactIcon>
                    <MailIconOutline />
                </ContactIcon>
                <ContactCardName>Email Us</ContactCardName>
                <ContactList>
                    {contactsData.allAirtable.edges.map(edge => (
                        <ContactItem key={edge.node.id}>
                            <ContactLink
                                href={`mailto: ${edge.node.data.Email}`}
                            >
                                {edge.node.data.Email}
                            </ContactLink>
                        </ContactItem>
                    ))}
                </ContactList>
            </ContactCard>
            <ContactCard>
                <ContactIcon>
                    <AddressIconOutline />
                </ContactIcon>
                <ContactCardName>Vist Us!</ContactCardName>
                <ContactList>
                    {contactsData.allAirtable.edges.map(edge => (
                        <ContactItem key={edge.node.id}>
                            {edge.node.data.Address}
                        </ContactItem>
                    ))}
                </ContactList>
            </ContactCard>
        </ContactCards>
    )
}

export default ContactDetails
