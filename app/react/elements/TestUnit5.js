/**
 * Created by fazdev on 09.11.16.
 */
import React from 'react';
import TestUnitProps from './TestUnitProps';

export default class TestUnit5 extends React.Component {
    static testName = "best example: arrow prototype bind";
    /** @type {TestUnitProps} */
    props;
    static defaultProps = new TestUnitProps();
    logger = () => {
        console.log(this.constructor.testName, this.props.time);
    };
    render() {
        return <span onClick={this.logger} onBlur={this.logger} onFocus={this.logger} tabIndex="0">{this.props.time}</span>;
    }
}