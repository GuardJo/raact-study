import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './FormContext';
import CustomBotton from '../04/CustomBotton';

class FormSubmitButton extends PureComponent {
    render() {
        const {children} = this.props;

        return (
            <Consumer>
                {({submit}) => (
                    <CustomBotton primary onPress={submit}>
                        {children}
                    </CustomBotton>
                )}
            </Consumer>
        );
    }
}

FormSubmitButton.propTypes = {
    children: PropTypes.node.isRequired
};

export default FormSubmitButton;