import React from 'react';
import styled from 'styled-components';
import useCommonHooks from '../../../utils/useCommonHooks';
import dashboardPreviewImage from '../../../assets/dashboardpreview.png';
import { Button } from '@mui/material';
import { mediaQuery } from '../../../styles/globalStyles';

const MainSectionWrapper = styled.section`
    display: flex;
    justify-content: center;
    margin-top: 100px;
    ${mediaQuery(1000)} {
        flex-direction: column;
        align-items: center;
        margin-top: 30px;
    }
`;
const LeftContent = styled.div`
    max-width: 400px;
    h1 {
        font-size: 3rem;
        margin-bottom: 12px;
    }
    ${mediaQuery(1000)} {
        width: 80vw;
    }
`;

const ButtonGroup = styled.div`
    button:first-child {
        margin-right: 12px;
    }
`;
const DashboardPreview = styled.img`
    width: 545px;
    margin-left: 150px;
    object-fit: contain;
    border-radius: 25px;
    ${mediaQuery(1000)} {
        margin-left: 0;
        margin-top: 50px;
        width: 80vw;
    }
`;

const MainSection = () => {
    const { history } = useCommonHooks();
    return (
        <MainSectionWrapper>
            <LeftContent>
                <h1>Oversikten du trenger, men enda ikke har funnet</h1>
                <p>
                    Finn ut hva du tjener på utbytte, og når utbetalingene
                    kommer.
                </p>
                <ButtonGroup>
                    <Button
                        variant="contained"
                        onClick={() => history.push('/dine-aksjer')}
                    >
                        Kom i gang
                    </Button>
                    <Button>Lær mer</Button>
                </ButtonGroup>
            </LeftContent>
            <DashboardPreview src={dashboardPreviewImage} />
        </MainSectionWrapper>
    );
};

export default MainSection;
