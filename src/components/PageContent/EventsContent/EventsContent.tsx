import React from "react"
import styled from "styled-components"

import InnerContainer from "../../InnerContainer/InnerContainer"

const EventsSection = styled.section``

const EventsContainer = styled(InnerContainer)``

const EventsContent: React.FC = () => {
    return (
        <EventsSection>
            <EventsContainer>
                <h1>Coming Soon...</h1>
            </EventsContainer>
        </EventsSection>
    )
}

export default EventsContent
