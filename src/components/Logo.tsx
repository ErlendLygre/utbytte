import React from 'react';
import styled from 'styled-components';
import { COLORS, mediaQuery } from '../styles/globalStyles';

const LogoWrapper = styled.h1`
    font-family: 'Quicksand', sans-serif;
    font-size: 2rem;
    margin-top: 50px;
    margin-left: 4%;
    ${mediaQuery(1000)} {
        margin-top: 12px;
        margin-left: 12px;
    }
`;

const PurpleText = styled.span`
    color: ${COLORS.primary};
`;

const Logo = () => {
    return (
        <LogoWrapper>
            utbytte<PurpleText>.io</PurpleText>
        </LogoWrapper>
    );
};

export default Logo;
