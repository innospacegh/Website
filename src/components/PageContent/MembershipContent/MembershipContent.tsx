import React from "react"
import styled from "styled-components"
import InnerContainer from "../../InnerContainer/InnerContainer"

const MembershipSection = styled.section``

const MembershipContainer = styled(InnerContainer)`
    display: flex;
    justify-content: center;
`

const MembershipBodyText = styled.p`
    @media screen and (min-width: 992px) {
        flex-basis: 66.66%;
    }
`

const MembershipContent: React.FC = () => {
    return (
        <MembershipSection>
            <MembershipContainer>
                <MembershipBodyText>
                    Our Co working spaces offer you a great ambiance and support
                    to boost your productivity. Whether you are a start-up on a
                    lean budget, a maturing or matured enterprise or a
                    freelancer, we can give you a great value for your money.
                    Our facility comes with additional services such as WiFi,
                    copy centre, multipurpose hall, tea/coffee, private lockable
                    and furnished offices and signage display.{" "}
                </MembershipBodyText>
            </MembershipContainer>
        </MembershipSection>
    )
}

export default MembershipContent
