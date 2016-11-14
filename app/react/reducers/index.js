/**
 * Created by fazdev on 08.09.16.
 */
import { combineReducers } from 'redux';

import PageReducer from './PageReducer';

class RootState {
    /** @type {PageState} */
    page = /** @type {PageState} */PageReducer;
}

const rootReducer = combineReducers(new RootState());

export default rootReducer;