import React, { Component } from 'react';

class BooleanComponent extends Component {
    render() {
        const message = this.props.bored ? '놀러 가자' : '하던 일이나 해';
        return <div className="message-container">{message}</div>;
    }
}

export default BooleanComponent;
