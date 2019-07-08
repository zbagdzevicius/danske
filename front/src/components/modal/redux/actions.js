import * as actionTypes from './types';

const open = (props) => {
    return {
        type: actionTypes.OPEN_MODAL,
        payload: props,
    };
};

const close = () => {
    return {
        type: actionTypes.CLOSE_MODAL,
    };
};

export default {
    open,
    close,
};
