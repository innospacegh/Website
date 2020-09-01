import styled from "styled-components"

const Button = styled.button`
    display: inline-block;
    height: 40px;
    line-height: 40px;
    font-family: "Poppins", Arial, Helvetica, sans-serif;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.025em;
    text-decoration: none;
    padding: 0 14px;
    border: none;
    border-radius: 4px;
    text-align: center;
    background-color: white;
    color: ${props => props.theme.colors.headingColor};
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    transition: all 0.15s;
    &:hover {
        transform: translateY(-1px);
        box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1),
            0 3px 6px rgba(0, 0, 0, 0.08);
        transition: all 0.15s;
    }
    &:active {
        box-shadow: 0 6px 12px -2px rgba(50, 50, 93, 0.25),
            0 3px 7px -3px rgba(0, 0, 0, 0.3);
    }
`

export default Button
