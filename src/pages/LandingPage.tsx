import React from 'react';
import useCommonHooks from '../utils/useCommonHooks';

const LandingPage = () => {
    const { history } = useCommonHooks();
    return (
        <div>
            Landingsside.
            <button onClick={() => history.push('/dine-aksjer')}>
                Se dine aksjer
            </button>
        </div>
    );
};

export default LandingPage;
