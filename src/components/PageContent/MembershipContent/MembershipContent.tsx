import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import InnerContainer from "../../InnerContainer/InnerContainer"

const MembershipSection = styled.section``

const MembershipContainer = styled(InnerContainer)``

const MembershipDiv = styled.div`
    margin: 3rem 0;
`

const MembershipTitle = styled.h3`
    font-family: "Muli", Arial, Helvetica, sans-serif;
    margin-top: 0.5rem;
`

const MembershipBodyText = styled.p`
    margin: 0.5rem 0 1rem 0;
    @media screen and (min-width: 992px) {
        max-width: 66.66%;
    }
`

const MembershipTable = styled.table`
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    border-collapse: collapse;
    border-bottom: 2px solid hsl(170, 98%, 30%);
    border-radius: 0.5rem;
`
const MembershipTableHead = styled.thead`
    background-color: hsl(170, 98%, 30%);
    color: white;
`
const TableRow = styled.tr`
    &:nth-of-type(even) {
        background-color: hsl(0, 0%, 90%);
    }
`

const TableHeader = styled.th`
    padding: 0.5rem;
    border: hsl(170, 98%, 30%);
`
const TableBody = styled.tbody``

const TableData = styled.td`
    @media screen and (max-width: 992px) {
        min-width: 100px;
    }
    padding: 0.5rem;
    &:nth-of-type(even) {
        text-align: center;
    }
`

const MembershipContent: React.FC = () => {
    const membershipData = useStaticQuery(
        graphql`
            query {
                openDesk: allAirtable(
                    filter: { table: { eq: "Open Desk" } }
                    sort: { fields: data___Cost, order: ASC }
                ) {
                    nodes {
                        id
                        data {
                            Categories
                            Cost
                            Services
                        }
                    }
                }
                openMemberships: allAirtable(
                    filter: { table: { eq: "Open Memberships" } }
                    sort: { fields: data___Cost, order: ASC }
                ) {
                    nodes {
                        id
                        data {
                            Categories
                            Cost
                            Services
                        }
                    }
                }
                private: allAirtable(
                    filter: { table: { eq: "Private Office" } }
                    sort: { fields: data___Cost, order: ASC }
                ) {
                    nodes {
                        id
                        data {
                            Categories
                            Cost
                            Services
                        }
                    }
                }
                meeting: allAirtable(
                    filter: { table: { eq: "Meeting Room" } }
                    sort: { fields: data___Cost, order: ASC }
                ) {
                    nodes {
                        id
                        data {
                            Categories
                            Cost
                            Services
                        }
                    }
                }
                multipurpose: allAirtable(
                    filter: { table: { eq: "Multipurpose Centre" } }
                    sort: { fields: data___Cost, order: ASC }
                ) {
                    nodes {
                        id
                        data {
                            Categories
                            Cost
                            Services
                        }
                    }
                }
            }
        `
    )

    return (
        <MembershipSection>
            <MembershipContainer>
                <MembershipDiv>
                    <MembershipTitle>Packages</MembershipTitle>
                    <MembershipBodyText>
                        Our Co working spaces offer you a great ambiance and
                        support to boost your productivity. Whether you are a
                        start-up on a lean budget, a maturing or matured
                        enterprise or a freelancer, we can give you a great
                        value for your money. Our facility comes with additional
                        services such as WiFi, copy centre, multipurpose hall,
                        tea/coffee, private lockable and furnished offices and
                        signage display.{" "}
                    </MembershipBodyText>
                </MembershipDiv>
                <MembershipDiv>
                    <MembershipTitle>
                        Open Desk(Day, Weekly & Monthly Pass)
                    </MembershipTitle>
                    <MembershipTable>
                        <MembershipTableHead>
                            <TableRow>
                                <TableHeader>Desk Category</TableHeader>
                                <TableHeader>Cost</TableHeader>
                                <TableHeader>Services</TableHeader>
                            </TableRow>
                        </MembershipTableHead>
                        <TableBody>
                            {membershipData.openDesk.nodes.map(node => (
                                <TableRow key={node.id}>
                                    <TableData>
                                        {node.data.Categories}
                                    </TableData>
                                    <TableData>GH₵ {node.data.Cost}</TableData>
                                    <TableData>{node.data.Services}</TableData>
                                </TableRow>
                            ))}
                        </TableBody>
                    </MembershipTable>
                </MembershipDiv>
                <MembershipDiv>
                    <MembershipTitle>
                        Co working Annual Pass: Membership subscription (minimum
                        3 months)
                    </MembershipTitle>
                    <MembershipTable>
                        <MembershipTableHead>
                            <TableRow>
                                <TableHeader>Membership</TableHeader>
                                <TableHeader>Cost</TableHeader>
                                <TableHeader>Services</TableHeader>
                            </TableRow>
                        </MembershipTableHead>
                        <TableBody>
                            {membershipData.openMemberships.nodes.map(node => (
                                <TableRow key={node.id}>
                                    <TableData>
                                        {node.data.Categories}
                                    </TableData>
                                    <TableData>
                                        GH₵{node.data.Cost}/month
                                    </TableData>
                                    <TableData>{node.data.Services}</TableData>
                                </TableRow>
                            ))}
                        </TableBody>
                    </MembershipTable>
                </MembershipDiv>
                <MembershipDiv>
                    <MembershipTitle>Private Offices (5 sqft)</MembershipTitle>
                    <MembershipTable>
                        <MembershipTableHead>
                            <TableRow>
                                <TableHeader>Category</TableHeader>
                                <TableHeader>Cost</TableHeader>
                                <TableHeader>Services</TableHeader>
                            </TableRow>
                        </MembershipTableHead>
                        <TableBody>
                            {membershipData.private.nodes.map(node => (
                                <TableRow key={node.id}>
                                    <TableData>
                                        {node.data.Categories}
                                    </TableData>
                                    <TableData>
                                        GH₵ {node.data.Cost}/month (any
                                        additional head will attract 100 per
                                        month)
                                    </TableData>
                                    <TableData>{node.data.Services}</TableData>
                                </TableRow>
                            ))}
                        </TableBody>
                    </MembershipTable>
                    <MembershipBodyText>
                        Enjoy discount of GHC 1000 at six months plus.
                    </MembershipBodyText>
                </MembershipDiv>
                <MembershipDiv>
                    <MembershipTitle>Short Meeting Room</MembershipTitle>
                    <MembershipTable>
                        <MembershipTableHead>
                            <TableRow>
                                <TableHeader>Category</TableHeader>
                                <TableHeader>Cost</TableHeader>
                                <TableHeader>Services</TableHeader>
                            </TableRow>
                        </MembershipTableHead>
                        <TableBody>
                            {membershipData.meeting.nodes.map((node, index) => (
                                <TableRow key={node.id}>
                                    <TableData>
                                        {node.data.Categories}
                                    </TableData>
                                    <TableData>
                                        {index === 0
                                            ? `GH₵ ${node.data.Cost}/4hrs`
                                            : `GH₵ ${node.data.Cost}`}
                                    </TableData>
                                    <TableData>{node.data.Services}</TableData>
                                </TableRow>
                            ))}
                        </TableBody>
                    </MembershipTable>
                    <MembershipTitle>Payment conditions</MembershipTitle>
                    <MembershipBodyText>
                        For short-term occupancy(minimum of 3 months, maximum of
                        6 months), fees are paid upfront (pay per use). For
                        long-term occupancy(beyond 6 months), a tenancy contract
                        shall be issued and a payment schedule shall be agreed
                        upon.
                    </MembershipBodyText>
                </MembershipDiv>
                <MembershipDiv>
                    <MembershipTitle>Multipurpose centre</MembershipTitle>
                    <MembershipBodyText>
                        Our multipurpose facility is ideal for meetings,
                        conferences, staff training, video presentation and
                        social events. It is equipped with state-of-the-art
                        audio visual equipment for your purpose and can
                        accommodate 50 people at a sitting.
                    </MembershipBodyText>
                    <MembershipTable>
                        <MembershipTableHead>
                            <TableRow>
                                <TableHeader>Category</TableHeader>
                                <TableHeader>Cost</TableHeader>
                                <TableHeader>Services</TableHeader>
                            </TableRow>
                        </MembershipTableHead>
                        <TableBody>
                            {membershipData.multipurpose.nodes.map(
                                (node, index) => (
                                    <TableRow key={node.id}>
                                        <TableData>
                                            {node.data.Categories}
                                        </TableData>
                                        <TableData>
                                            {index === 0
                                                ? `GH₵ ${node.data.Cost}/2hrs`
                                                : index === 1
                                                ? `GH₵ ${node.data.Cost}/4hrs`
                                                : `GH₵ ${node.data.Cost}/daily`}
                                        </TableData>
                                        <TableData>
                                            {node.data.Services}
                                        </TableData>
                                    </TableRow>
                                )
                            )}
                        </TableBody>
                    </MembershipTable>
                </MembershipDiv>
            </MembershipContainer>
        </MembershipSection>
    )
}

export default MembershipContent
