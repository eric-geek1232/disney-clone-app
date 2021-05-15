import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg"/>
                <SignUpButton>
                    GET ALL THERE
                </SignUpButton>
                <Description>
                    Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
                </Description>
                <CTALogoTwo src="/images/cta-logo-two.png"/>
            </CTA>
        </Container>
    )
}

export default Login

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    justify-content: center;
    align-items: center;

    &:before {
        position: absolute;
        content: "";
        right: 0;
        left: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.7);
        background: url("/images/login-background.jpg") top / cover no-repeat;
        z-index: -10;
    }
`

const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const CTALogoOne = styled.img`

`

const CTALogoTwo = styled.img`
    width: 90%;
`

const SignUpButton = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px; 

    &:hover {
        background-color: #0483ee; 
    }
`

const Description = styled.p`
    font-size: 12px;
    letter-spacing: 1.5px;
    line-height: 1.5;
    text-align: center;
`

