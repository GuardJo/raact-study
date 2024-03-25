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

    it('assigns the prop value and type', () => {
        const expectedValue = '123';
        const actual = shallow(<Input name='test' value={expectedValue}></Input>);

        expect(actual.find('input').prop('value')).toBe(expectedValue);

        const {type, value} = actual.find('input').props();
        expect(type).toBe('text');
        expect(value).toBe(expectedValue);
    });

    it('renders errorMessage', () => {
        const errorMessage = 'error message';
        const actual = shallow(<Input name='test'></Input>);

        expect(actual.find('error')).toHaveLength(0);

        actual.setProps({errorMessage: errorMessage});

        expect(actual.find('span').prop('className')).toBe('error');
        expect(actual.find('.error')).toHaveLength(1);
        expect(actual.html()).toContain(errorMessage);
    });

    it('calls back onChange on input change', () => {
        const changeStub = jest.fn();
        const expectedUpdateValue = 'update input';
        const expectedName = 'test';
        const actual = shallow(<Input name={expectedName} onChange={changeStub}></Input>);

        expect(changeStub).not.toHaveBeenCalled();

        actual.find('input').simulate('change', { target: {value: expectedUpdateValue}});

        expect(changeStub).toHaveBeenCalledTimes(1);
        expect(changeStub).toHaveBeenCalledWith(expectedName, expectedUpdateValue);
        
    });

    describe('contains <input>', () => {
        it('renders one element', () => {
            const element = shallow(<Input name='test'></Input>);

            expect(element.find('input')).toHaveLength(1);
            expect(element.find('label')).toHaveLength(1);
        });
    });
});