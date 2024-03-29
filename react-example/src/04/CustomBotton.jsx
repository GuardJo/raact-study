import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { css, withStyles } from 'react-with-styles';

class CustomBotton extends PureComponent {
    render() {
        const {
            children,
            disabled,
            onPress,
            styles,
            large,
            xlarge,
            small,
            xsmall,
            secondary,
            primary,
        } = this.props;

        return (
            <button
                {...css(
                    styles.default,
                    xsmall && styles.xsmall,
                    small && styles.small,
                    xlarge && styles.xlarge,
                    large && styles.large,
                    secondary && styles.secondary,
                    primary && styles.primary,
                )}
                onClick={onPress}
            >
                {children}
            </button>
        );
    }
}

CustomBotton.propTypes = {
    children: PropTypes.node.isRequired,
    onPress: PropTypes.func,
    xsmall: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    xlarge: PropTypes.bool,
    secondary: PropTypes.bool,
    primary: PropTypes.bool,
};

CustomBotton.defaultProps = {
    onPress: () => {},
    xsmall: false,
    small: false,
    large: false,
    xlarge: false,
    secondary: false,
    primary: false,
};

export default withStyles(({ color, size, unit, responsive }) => ({
    default: {
        border: 1,
        borderStyle: 'solid',
        borderColor: color.default,
        borderRadius: 2,
        color: color.default,
        fontSize: size.md,
        padding: unit * 2,
        cursor: 'pointer',
        [responsive.small]: {
            width: '50%',
        },
    },
    xlarge: {
        fontSize: size.xg,
    },
    large: {
        fontSize: size.lg,
    },
    small: {
        fontSize: size.sm,
        padding: unit,
    },
    xsmall: {
        fontSize: size.xs,
        padding: unit,
    },
    primary: {
        borderColor: color.primary,
        color: color.white,
        backgroundColor: color.primary,
    },
    secondary: {
        borderColor: color.secondary,
        color: color.secondary,
    },
}))(CustomBotton);
