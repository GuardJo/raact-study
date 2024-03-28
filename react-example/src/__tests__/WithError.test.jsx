import React from "react";
import withError from "../05/withError";
import InputWithStyle from "../04/InputWithStyle";
import { shallow } from "enzyme";

const defaultErrorMessage = 'Thsi is error';
const InputWithErrorComponent = withError(defaultErrorMessage)(InputWithStyle);

describe('WithError Compoent Test', () => {
    it('Renders without crashing', () => {
        expect(() => {
            shallow(<InputWithErrorComponent name='test' label='test'></InputWithErrorComponent>);
        }).not.toThrow();
    });

    it('Contains hasError', () => {
        const actual = shallow(<InputWithErrorComponent name='test' label='test' hasError></InputWithErrorComponent>);

        expect(actual.prop('errorMessage')).toBe(defaultErrorMessage);
        expect(actual.dive().find('div')).toHaveLength(1);
    });
});