import { combineReducers } from 'redux';

import { modalReducer, initialModalState } from 'components/modal/redux/reducer';
import { reducer as formReducer } from 'redux-form';

import * as actionTypes from './types';

export const initialPageState = {
    values: null,
    error: null,
    isFetching: false,
    isLoaded: false,
};

const pageReducer = (state = initialPageState, action) => {
    switch(action.type) {
        case(actionTypes.BEFORE_GET_VALUES):
            return {
                ...state,
                values: null,
                isFetching: true,
            };
        case(actionTypes.AFTER_GET_VALUES):
            return {
                ...state,
                isFetching: false,
                isLoaded: true,
            };
        case(actionTypes.AFTER_GET_VALUES_ERROR):
            return {
                ...state,
                error: action.payload,
                values: null,
                isFetching: false,
                isLoaded: false,
            };
        case(actionTypes.SET_VALUES):
            return {
                ...state,
                values: {
                    ...state.values,
                    ...action.payload,
                },
            };
    }
    return state;
};

export const initialRootState = {
    page: initialPageState,
    modal: initialModalState
};

export const rootReducer = combineReducers({
    page: pageReducer,
    modal: modalReducer,
    form: formReducer,
});
