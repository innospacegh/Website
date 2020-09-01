import React from "react"
import { useForm } from "react-hook-form"
import styled, { css } from "styled-components"

import { SubHeading } from "../../Headings/Headings"
import Button from "../../Button/Button"

type ContactFormProps = {
    page?: string
}

const ContactFormContainer = styled.form`
    flex: 1 1 0;
    padding: 1rem;
    min-width: 300px;
    @media screen and (max-width: 960px) {
        /* flex: 0; */
    }
    /* border: 1px solid greenyellow; */
`

const ContactFormHeading = styled(SubHeading)`
    text-align: left;
    margin: 1rem 0;
    font-size: 24px;
    font-family: "Muli";
`

const ContactLabel = styled.label`
    display: block;
    margin: 5px 0;
`

const inputStyles = css`
    display: block;
    width: 100%;
    padding: 10px;
    font-family: "Poppins", Arial, Helvetica, sans-serif;
    font-size: 14px;
    line-height: 1.5;
    border: 1px solid #ccc;
    border-radius: 0.1em;
    background: hsl(160, 50%, 99%);
    margin-bottom: 2em;
    color: #0e314c;
    &:focus {
        background: #fff;
        border-color: #44ce6f;
        color: #495057;
    }
`

const ContactInput = styled.input`
    ${inputStyles}
    height: 45px;
`

const ContactTextArea = styled.textarea`
    ${inputStyles}
    resize: none;
`

const ContactButton = styled(Button)`
    color: white;
    background-color: ${props => props.theme.colors.innospaceGreen};
`

const ContactForm: React.FC<ContactFormProps> = () => {
    const { register, handleSubmit } = useForm()

    const onSubmit = data => {
        const fields = {
            fields: {
                Name: data.name,
                Email: data.email,
                Phone: data.phone,
                Message: data.message,
            },
        }
        fetch(
            `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Enquiries`,
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(fields),
            }
        )
            .then(() => alert("Form Sent!"))
            .catch(error => alert(error))
    }

    return (
        <ContactFormContainer onSubmit={handleSubmit(onSubmit)}>
            <ContactFormHeading>Send Us a Message</ContactFormHeading>
            <ContactLabel htmlFor="name">Name</ContactLabel>
            <ContactInput
                name="name"
                type="text"
                ref={register({ required: true })}
                // placeholder="Name"
            />
            <ContactLabel htmlFor="email">Email</ContactLabel>
            <ContactInput
                name="email"
                type="email"
                ref={register({ required: true })}
                // placeholder="Email"
            />
            <ContactLabel htmlFor="phone">Phone</ContactLabel>
            <ContactInput
                name="phone"
                type="tel"
                ref={register}
                // placeholder="Phone"
            />
            <ContactLabel htmlFor="message">Message</ContactLabel>
            <ContactTextArea
                cols={30}
                rows={5}
                name="message"
                ref={register}
                // placeholder="Message"
            />
            <ContactButton type="submit">Send Message</ContactButton>
        </ContactFormContainer>
    )
}

export default ContactForm
