import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import CallIconOutline from "../../SvgComponents/CallIconOutline"
import MailIconOutline from "../../SvgComponents/MailIconOutline"
import AddressIconOutline from "../../SvgComponents/AddressIconOutline"

const ContactCards = styled.div`
    display: flex;
    padding: 1rem;
    padding-top: 3rem;
    flex: 0.5;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: flex-end;
    /* border: 1px solid black; */
    @media screen and (max-width: 600px) {
        padding: 2rem 0 1rem 1rem;
    }
`

const ContactCard = styled.div`
    width: 360px;
    /* border: 1px solid #44ce6f; */
    border-radius: 3px;
    text-align: center;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 2rem;
    @media screen and (max-width: 600px) {
        width: 280px;
    }
`

const ContactIcon = styled.div`
    width: 40px;
    height: 40px;
    flex-basis: 40px;
    flex-shrink: 0;
    text-align: center;
    /* border: 1px solid black; */
    & svg {
        stroke: hsl(160, 50%, 50%);
    }
`

const ContactList = styled.ul`
    padding: 0;
    /* border: 1px solid grey; */
    margin-left: 1rem;
    text-align: left;
`

const ContactItem = styled.li`
    list-style: none;
    padding: 0.1rem;
    font-family: ${props => props.theme.typography.altFont};
    font-size: 16px;
    font-weight: 600;
    color: hsl(160, 60%, 20%);
    &:first-child a {
        font-weight: bold;
    }
    font-size: 1.3rem;
`

const ContactLink = styled.a`
    text-decoration: none;
    color: hsla(160, 90%, 20%, 1);
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
