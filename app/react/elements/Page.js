/**
 * Created by fazdev on 08.09.16.
 */

import React from "react";
import {connect} from "react-redux";
import './Page.scss';

import TestingWithPerf from './TestingWithPerf';


class PageProps {
    /** @type {?number} */
    testNum = null;
    /** @type {object[]} */
    results = [];
    /** @type {function} */
    dispatch = () => {};
}

/**
 * @param {RootState} state
 * @returns {PageProps}
 */
const mapStateToProps = (state) => {
    let props = Object.assign({}, new PageProps());
    props.testNum = state.page.testNum;
    // props.results = state.page.results;
    // props.cleared = state.page.cleared;
    return props;
};

@connect(mapStateToProps)
export default class Page extends React.Component {
    /** @type {PageProps} */
    props;
    static defaultProps = new PageProps();
    static propTypes = {
        dispatch: React.PropTypes.func,
        testNum: React.PropTypes.number
    };

    render () {
        console.log('parent render');
        return <TestingWithPerf {...this.props} testTimes={100} testUnitAmount={1000}/>;
    }
}