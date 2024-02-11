import React, {Component} from 'react';
import Device from "./Device";

class Devicebase extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }

    renderDevices() {
        return <Device/>
    }

    render() {
        return (
            <div className='testStatus'>
                <div className='devices'>
                    {this.renderDevices()}
                </div>
            </div>
        );
    }
}

export default Devicebase;