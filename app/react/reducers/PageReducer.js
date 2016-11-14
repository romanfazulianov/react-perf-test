/**
 * Created by fazdev on 08.11.16.
 */

import * as actionTypes from '../constants/actionTypes';

class PageState {
    /** @type {?number} */
    testNum = null;
}

export default function (state = new PageState(), action = null) {
    /** @type {PageState} */
    let newState = /** @type {PageState} */Object.assign(new PageState(), state);

    switch (action.type) {
        case actionTypes.RUN_TEST:
            newState.testNum = action.payload;
            return newState;

        case actionTypes.END_TEST:
            newState.testNum  = 100;
            return newState;

        default:
            return state;//нет изменений в стейте
    }
}