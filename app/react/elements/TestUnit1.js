/**
 * Created by fazdev on 09.11.16.
 */
import React from 'react';
import TestUnitProps from './TestUnitProps';

export default class TestUnit1 extends React.Component {
    static testName = "bad example: prototype + render bind";
    /** @type {TestUnitProps} */
    props;
    static defaultProps = new TestUnitProps();

    logger() {
        console.log(this.constructor.testName, this.props.time);
    }
    render() {
        return <span onClick={() => this.logger.bind(this)()} onBlur={() => this.logger.bind(this)()} onFocus={() => this.logger.bind(this)()} tabIndex="0">{this.props.time}</span>;
    }
}