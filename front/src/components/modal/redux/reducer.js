import * as actionTypes from './types';

export const initialModalState = {
    modalOpen: false,
    modalProps: null,
};

export const modalReducer = (state = initialModalState, action) => {
    switch(action.type) {
        case(actionTypes.OPEN_MODAL):
            return {
                modalOpen: true,
                modalProps: action.payload,
            };
        case(actionTypes.CLOSE_MODAL):
            return {
                modalOpen: false,
                modalProps: null,
            };
    }
    return state;
};
