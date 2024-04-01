import React, { Component } from "react";
import { Provider } from "./FormContext";
import { PropTypes } from 'prop-types';

export default class FormProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: {},
            errors: {},
        };
        this.reset = this.reset.bind(this);
        this.onChange = this.onChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    onChange(name, updateValue) {
        this.setState(({values}) => ({
            values: {
                ...values,
                [name]: updateValue,
            },
        }), () => this.validate(this.state.values));
    }

    reset() {
        this.setState({values: {}, errors: {}});
    }

    submit() {
        this.props.onSubmit(this.state.values);
    }

    validate(values) {
        const {validate} = this.props;
        if (!validate) {
            return;
        }

        const errors = this.props.validate(values);
        this.setState({
            errors,
        });
    }

    render() {
        const {values, errors} = this.state;

        return (
            <Provider value={{
                errors,
                values,
                onChange: this.onChange,
                reset: this.reset,
                submit: this.submit
            }}>
                {this.props.children}
            </Provider>
        );
    }
}

FormProvider.propTypes = {
    validate: PropTypes.func,
    onSubmit: PropTypes.func.isRequired
};

FormProvider.defaultProps = {
    validate: () => {}
};