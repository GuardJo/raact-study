import React from "react";
import { shallow } from "enzyme";
import CustomCheckBox from "../04/CustomCheckBox";

describe('<CustomCheckBox>', () => {
    it('renders without crashing', () => {
        expect(() => {
            shallow(<CustomCheckBox name='test'>test</CustomCheckBox>);
        }).not.toThrow();
    });

    it('contains <label> and <div>', () => {
        const actual = shallow(<CustomCheckBox name="test">test</CustomCheckBox>);

        expect(actual.dive().find('label')).toHaveLength(1);
        expect(actual.dive().find('div')).toHaveLength(1);
    });

    it('calls back onChange on Clicked', () => {
        const mockOnclick = jest.fn();
        const name = 'test';
        expect(mockOnclick).toHaveBeenCalledTimes(0);

        const actual = shallow(<CustomCheckBox name={name} onChange={mockOnclick}>test</CustomCheckBox>)
        .dive()
        .find('input');

        actual.simulate('click', { target : {checked : true}});
        expect(mockOnclick).toHaveBeenCalledTimes(1);
        expect(mockOnclick).toHaveBeenCalledWith(name, true);

        actual.simulate('click', { target : {checked : false}});
        expect(mockOnclick).toHaveBeenCalledWith(name, false);
    });
});