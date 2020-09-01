import React from "react"

const LocationIconOutline: React.FC = () => (
    <svg viewBox="0 0 512 512">
        <title>{"Location Icon"}</title>
        <path
            d="M256,48c-79.5,0-144,61.39-144,137,0,87,96,224.87,131.25,272.49a15.77,15.77,0,0,0,25.5,0C304,409.89,400,272.07,400,185,400,109.39,335.5,48,256,48Z"
            style={{
                fill: "none",
                // stroke: "#000",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 32,
            }}
        />
        <circle
            cx={256}
            cy={192}
            r={48}
            style={{
                fill: "none",
                // stroke: "#000",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 32,
            }}
        />
    </svg>
)

export default LocationIconOutline
