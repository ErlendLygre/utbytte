import { useHistory, useRouteMatch } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const useCommonHooks = () => {
    const history = useHistory();
    const { url, path } = useRouteMatch();
    return {
        history,
        url,
        path,
    };
};

export default useCommonHooks;
