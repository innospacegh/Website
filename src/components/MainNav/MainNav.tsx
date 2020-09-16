import React, { useState } from "react"
import styled, { keyframes } from "styled-components"
import { Link } from "gatsby"
import InnoSpaceLogo from "../SvgComponents/InnoSpaceLogo"

const breakpoint = "860px"

type DisplayType = "default" | "opened" | "closed"

interface NavButtonProps {
    toggle: () => void
    toggled: DisplayType
}

interface MenuButtonProps {
    toggled: DisplayType
}

interface NavListProps {
    display: DisplayType
}

const navitems = [
    {
        name: "Spaces",
        link: "spaces",
    },
    {
        name: "Events",
        link: "events",
    },
    {
        name: "Memberships",
        link: "memberships",
    },
    {
        name: "About",
        link: "about",
    },
    {
        name: "Contact",
        link: "contact",
    },
]

const NavContainer = styled.div`
    z-index: 999;
    width: 100%;
    height: 64px;
    background-color: white;
    display: flex;
    align-items: center;
    @media (max-width: ${breakpoint}) {
        position: fixed;
    }
`

const NavContent = styled.div`
    flex-basis: 1280px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Brand = styled(Link)`
    display: block;
    padding: 0;
    margin: 0 20px;
    width: 160px;
`

const slideIn = keyframes`
    from {
        right: -270px;
    }
    to {
        right: -20px;
    }
`

const slideOut = keyframes`
    from {
        right: -20px;
    }
    to {
        right: -270px;
    }
`

const NavList = styled.ul<NavListProps>`
    display: flex;
    margin: 0 20px;
    padding: 0 20px;
    justify-content: space-between;
    @media (max-width: ${breakpoint}) {
        position: fixed;
        top: 0;
        right: -300px;
        height: 100vh;
        width: 250px;
        overflow: hidden;
        animation: ${props =>
                props.display === "default"
                    ? null
                    : props.display === "opened"
                    ? slideIn
                    : slideOut}
            0.3s forwards;
        flex-direction: column;
        justify-content: flex-start;
        padding-top: 65px;
        background-color: white;
    }
`

const NavItem = styled.li`
    list-style: none;
    margin: 0 10px;
    @media (max-width: ${breakpoint}) {
        margin: 10px 20px;
        &:first-child {
            margin-top: 0;
        }
    }
`

const NavLink = styled(Link)`
    display: block;
    padding: 6px 6px;
    text-decoration: none;
    color: ${props => props.theme.colors.bodyColor};
    border-radius: 1px;
    font-size: 18px;
    font-weight: 500;
    &:hover {
        color: ${props => props.theme.colors.innospaceGreen};
    }
    @media (max-width: ${breakpoint}) {
        padding: 12px;
        font-size: 20px;
    }
`

const MenuButton = styled.button`
    display: none;
    position: absolute;
    top: 8px;
    right: 20px;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    padding: 0 5px;
    min-height: 48px;
    z-index: 99;
    @media (max-width: ${breakpoint}) {
        display: inline-block;
    }
`

const MenuBars = styled.i<MenuButtonProps>`
    display: block;
    position: relative;
    width: 45px;
    height: 5px;
    border-radius: 5px;
    background-color: ${props =>
        props.toggled === "opened"
            ? "transparent"
            : props.theme.colors.bodyColor};
    transition: 0.3s;
    &::before,
    &::after {
        content: "";
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 20px;
        background-color: ${props => props.theme.colors.bodyColor};
        transition: 0.3s;
    }
    &::before {
        transform: translate(0, -12px);
        transform: ${props => props.toggled === "opened" && "rotate(45deg)"};
    }
    &::after {
        transform: translate(0, 12px);
        transform: ${props => props.toggled === "opened" && "rotate(-45deg)"};
    }
`

const NavButton: React.FC<NavButtonProps> = ({ toggle, toggled }) => {
    return (
        <MenuButton onClick={() => toggle()}>
            <MenuBars toggled={toggled} />
        </MenuButton>
    )
}

const MainNav: React.FC = () => {
    const [toggled, setToggle] = useState<DisplayType>("default")

    const handleToggle = () => {
        if (toggled === "default") {
            setToggle("opened")
        } else if (toggled === "opened") {
            setToggle("closed")
        } else {
            setToggle("opened")
        }
    }

    return (
        <NavContainer>
            <NavContent>
                <Brand to="/">
                    <InnoSpaceLogo />
                </Brand>
                <NavButton toggled={toggled} toggle={handleToggle}>
                    Menu
                </NavButton>
                <NavList display={toggled}>
                    {navitems.map(item => (
                        <NavItem key={item.name}>
                            <NavLink
                                activeStyle={{
                                    color: "hsl(165, 90%, 37%)",
                                    fontWeight: "bold",
                                }}
                                to={`/${item.link}`}
                            >
                                {item.name}
                            </NavLink>
                        </NavItem>
                    ))}
                </NavList>
            </NavContent>
        </NavContainer>
    )
}

export default MainNav
