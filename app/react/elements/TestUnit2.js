/**
 * Created by fazdev on 09.11.16.
 */
import React from 'react';
import TestUnitProps from './TestUnitProps';


export default class TestUnit2 extends React.Component {
    static testName = "bad example: render + render bind";
    props;
    static defaultProps = new TestUnitProps();
    render() {
        let logger = function() {
            console.log(this.constructor.testName, this.props.time);
        };
        return <span onClick={logger.bind(this)} onBlur={logger.bind(this)} onFocus={logger.bind(this)} tabIndex="0">{this.props.time}</span>;
    }
}