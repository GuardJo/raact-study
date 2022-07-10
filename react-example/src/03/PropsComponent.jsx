import React, { Component } from 'react';
import PropTypes from 'prop-types';
class PropsComponent extends Component {
    render() {
        return <div className="message-component">{this.props.name}</div>;
    }
}

PropsComponent.propsTypes = {
    name: PropTypes.string,
};

export default PropsComponent;
