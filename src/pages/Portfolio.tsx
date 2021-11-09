import React from 'react';

import styled from 'styled-components';
import { Button } from '@mui/material';
import { COLORS } from '../styles/globalStyles';

const PortfolioWrapper = styled.main`
    background-color: ${COLORS.greyBackground};
    margin-left: 100px;
    margin-right: 50px;
    padding-bottom: 800px;

`;

const TopWrapper = styled.div`
    margin-bottom: 50px;
    margin-left: 100px;
    width: 2000px;
`;

const PortfolioCard = styled.div`
    background-color: ${COLORS.whiteBackground};
    margin-left: 100px;
    margin-bottom: 20px;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 20px;
    width: 2000px;

`;

const ButtonGroup = styled.div`
    margin-top: 50px;
    margin-left: 100px;

`;

const Portfolio = () => {
    return (
        <PortfolioWrapper>
            <TopWrapper>
                <h1>Portefølje</h1>
            </TopWrapper>

            <PortfolioCard>
                <h3>Equinor</h3>
            </PortfolioCard>

            <PortfolioCard>
                <h3>DNB</h3>
            </PortfolioCard>

            <PortfolioCard>
                <h3>Nestle</h3>
            </PortfolioCard>

            <ButtonGroup>
                <Button variant="contained">
                    Legg til
                </Button>
            </ButtonGroup>
   

        </PortfolioWrapper>
    
    );
};

export default Portfolio;
