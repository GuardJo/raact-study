import React from "react";
import { mount, shallow } from "enzyme";
import Text from "../04/Text";

describe('<Text>', () => {
    it('renders without crashing', () => {
        expect(() => {
            shallow(<Text>test</Text>);
        }).not.toThrow(); 
    });

    it('contains all <span>', () => {
        expect(mount(<Text>test</Text>).find('span')).toHaveLength(1);
    });

    it('contains <span', () => {
        expect(shallow(<Text>test</Text>).dive().find('span')).toHaveLength(1);
    });
});