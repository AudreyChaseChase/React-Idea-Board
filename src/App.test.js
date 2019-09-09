import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('Shallow rendered App', () => {
    const enzymeWrapper = shallow(<App />);
    it("renders", () => {
        expect(enzymeWrapper.exists()).toBe(true);
    })
    it('components', () => {
        // enzymeWrapper.find(selector) : Find every node in the render tree that matches the provided selector.
        expect(enzymeWrapper.find('header').hasClass('header')).toBe(true);
        expect(enzymeWrapper.find('header').text()).toBe(' ' + 'Idea Board')
    });
});

