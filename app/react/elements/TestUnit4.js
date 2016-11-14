/**
 * Created by fazdev on 09.11.16.
 */
import React from 'react';
import TestUnitProps from './TestUnitProps';


export default class TestUnit4 extends React.Component {
    static testName = "recommended example: prototype + constructor bind";
    /** @type {TestUnitProps} */
    props;
    static defaultProps = new TestUnitProps();
    constructor(props) {
        super(props);
        this.logger = this.logger.bind(this);
    }
    logger() {
        console.log(this.constructor.testName, this.props.time);
    }
    render() {
        return <span onClick={this.logger}  onBlur={this.logger} onFocus={this.logger} tabIndex="0">{this.props.time}</span>;
    }
}
