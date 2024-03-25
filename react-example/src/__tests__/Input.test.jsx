import React from 'react';
import { shallow } from 'enzyme';
import Input from '../03/Input';

describe('<Input>', () => {
    it('renders without crashing', () => {
        expect(() => {
            shallow(<Input name='test'></Input>);
        }).not.toThrow();
    });
    it('has one element', () => {
        const actual = shallow(<Input name='test'></Input>);
        expect(actual.length).toEqual(1);
        expect(actual).toHaveLength(1);
    });
});