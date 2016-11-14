/**
 * Created by fazdev on 09.11.16.
 */
import React from 'react';
import TestUnitProps from './TestUnitProps';


export default class TestUnit3 extends React.Component {
    static testName = "bad example: arrow  in render";
    props;
    static defaultProps = new TestUnitProps();
    render() {
        return <span onClick={() => {
            console.log(this.constructor.testName, this.props.time);
        }} onBlur={() => {
            console.log(this.constructor.testName, this.props.time);
        }} onFocus={() => {
            console.log(this.constructor.testName, this.props.time);
        }} tabIndex="0">{this.props.time}</span>;
    }
}