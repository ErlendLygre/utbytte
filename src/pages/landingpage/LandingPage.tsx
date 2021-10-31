import React from 'react';
import styled from 'styled-components';
import Logo from '../../components/Logo';
import { COLORS, mediaQuery } from '../../styles/globalStyles';
import MainSection from './sections/MainSection';

const LandingPageWrapper = styled.main``;
const BigPurpleCircle = styled.div`
    height: 70vw;
    width: 70vw;
    border-radius: 50%;
    background-color: ${COLORS.primary};
    position: fixed;
    z-index: -1;
    top: 0;
    right: 0;
    transform: translateX(15vw) translateY(-20vw);
    ${mediaQuery(1000)} {
        display: none;
    }
`;

const LandingPage = () => {
    return (
        <LandingPageWrapper>
            <Logo />
            <BigPurpleCircle />
            <MainSection />
        </LandingPageWrapper>
    );
};

export default LandingPage;
