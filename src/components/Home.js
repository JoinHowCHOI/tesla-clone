import React from "react"
import styled from "styled-components"
import Section from "./Section";

function Home() {
    return (
        <Container>
            <Section
                title="Mountain 769089"
                description="This Image is name Mountain"
                backgroundImg="mountain-7690893.jpg"
                leftBtnText="Look a Mountain"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Cat 7498364"
                description="This Image is name Cat"
                backgroundImg="cat-7498364.jpg"
                leftBtnText="Look a Cat"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Building 7844703"
                description="Tis Image is name Building"
                backgroundImg="building-7844703.jpg"
                leftBtnText="Look a Building"
                rightBtnText="Learn more"
            />
            <Section
                title="Joint 7528769"
                description="Tis Image is name Joint"
                backgroundImg="joint-7528769.jpg"
                leftBtnText="Look a Joint"
                rightBtnText="Learn more"
            />
            <Section
                title="Dog 7630252"
                description="Tis Image is name Dog"
                backgroundImg="dog-7630252.jpg"
                leftBtnText="Look a Dog"
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`;