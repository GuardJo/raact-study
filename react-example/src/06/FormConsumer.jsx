import React, { PureComponent } from "react";
import { Consumer } from "./FormContext";
import Input from './../03/Input';

export default class FormConsumer extends PureComponent {
    render() {
        const {name, ...others} = this.props;

        return (
            <Consumer>
                {({values, errors, onChange}) => (
                    <Input {...others} name={name} onChange={onChange} value={values[name]} errorMessage={errors[name]}/>
                )}
            </Consumer>
        );
    };
}