import React from "react"
import styled from "styled-components"

type MapProps = {
    width?: string | number
    height?: string | number
}

const MapContainer = styled.section<MapProps>`
    height: ${props => props.height}px;
    width: ${props => props.width};
    margin: auto;
`

const Map: React.FC<MapProps> = ({ width = "100%", height = 500 }) => {
    return (
        <MapContainer height={height} width={width}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7941.052719493844!2d-0.004367825604194485!3d5.636693286219778!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5a0d8f087fae8488!2sINNOSPACE!5e0!3m2!1sen!2sgh!4v1597185563705!5m2!1sen!2sgh"
                height={height}
                frameBorder="0"
                style={{ border: 0, width: "100%" }}
                allowFullScreen
                aria-hidden="false"
            ></iframe>
        </MapContainer>
    )
}

export default Map
