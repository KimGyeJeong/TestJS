import React from "react";
import './Square.css';

export default class Square extends React.Component {


    render() {
        return (
            <button className="square" onClick={() => {
                console.log('click');
                this.props.onClick();
            }}>
                {this.props.value}
            </button>
        )
    }
}