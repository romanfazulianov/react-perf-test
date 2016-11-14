/**
 * Created by fazdev on 08.11.16.
 */

import * as actionTypes from '../constants/actionTypes';

export function runTest(testNum) {
    console.log('action');
    return {
        type: actionTypes.RUN_TEST,
        payload: testNum
    };
}

export function endTest() {
    return {
        type: actionTypes.END_TEST
    };
}
//
// export  function cleared() {
//     return {
//         type: actionTypes.cleared
//     };
// }