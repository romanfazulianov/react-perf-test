/**
 * Created by fazdev on 07.11.16.
 */

import React from 'react';
import TestUnit from './TestUnit';

class TestProps {
    /** @type {number} */
    count = 10;
    /** @type {number} */
    amount = 100;
    /** @type {TestUnit.<testName>} */
    TestUnit = TestUnit;
    /** @type {?number} */
    testNumInRun = null;
    /** @type {?number} */
    testNum = null;
    /** @type {function} */
    testStarted = () => {};
    /** @type {function} */
    testFinished = () => {};
    /** @type {function} */
    runTest = () => {};
}

class TestState {
    /** @type {TestUnit[]} */
    testUnits = [];
    /** @type {number} */
    count = 0;
}

export default class Test extends React.Component {
    /** @type {TestProps} */
    props;
    static defaultProps = new TestProps();
    state;
    constructor(props) {
        super(props);
        this.state = new TestState();
    }
    
    componentDidUpdate() {
        let props = this.props;
        let state = this.state;
        if(props.testNumInRun === props.testNum) {
            if (state.testUnits.length === 0) {//начало
                /** @type {TestState} */
                props.testStarted(props.TestUnit.testName);
                this.startNewRun(state);
            } else {
                //Продолжение
                if (state.count !== props.count) {
                    return this.startNewRun(state);
                }
                props.testFinished(props.TestUnit.testName);//конец
            }
        } else if (state.testUnits.length > 0) {
            this.setState(new TestState());
        }
    }
    
    render() {
        return <div>
            {/* Flat button with ripple */}
            <button onClick={this.runTest} className="mdl-button mdl-js-button mdl-js-ripple-effect">
                Начать {this.props.TestUnit.testName}
            </button>
            {this.state.testUnits}
        </div>;
    }
    runTest = () => {
        this.props.runTest(this.props.testNum);
    }

    /** @param {TestState} oldState*/
    startNewRun = (oldState) => {
        let props = this.props;
        let amount = props.amount;
        let TestUnit = props.TestUnit;
        let testUnits = [];
        let count = oldState.count + 1;
        for (let i = 0; i < amount; i++) {
            testUnits.push(<TestUnit key={i} time={Date.now()}/>);
        }
        /** @type {TestState} */
        let state = /** @type {TestState} */{};
        state.count = count;
        state.testUnits = testUnits;
        setTimeout(() => {
            this.setState(state);//дадим браузеру отрисовывать изменения
        }, 0);
    }
}