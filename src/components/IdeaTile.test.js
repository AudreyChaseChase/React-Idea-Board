import React from 'react'
import { shallow, mount, render } from 'enzyme'
import IdeaTile from './IdeaTile'
import { JSDOM } from 'jsdom'
const { window } = new JSDOM('<!doctype html><html><body></body></html>');
global.document = window.document;
global.window = window;

function setup() {
    const props = {
        idea: {
            title: "Component Test Idea",
            body: "Run component tests succeefully",
            createdDate: '2019-09-01T12:00:00.992Z'
        },
        onBlur: jest.fn(),
        onDelete: jest.fn()
    }

    const enzymeWrapper = mount(<IdeaTile {...props} />)

    return {
        props,
        enzymeWrapper
    }
}

describe('Shallow rendered Idea Tiles', () => {
    it('should render a tile with the details of the Idea', () => {
        // Setup wrapper and assign props.
        const { enzymeWrapper, props } = setup();
        // enzymeWrapper.find(selector) : Find every node in the render tree that matches the provided selector.
        expect(enzymeWrapper.find('button').hasClass('idea-tile__delete-btn')).toBe(true);
        expect(enzymeWrapper.containsMatchingElement(<i className="fa fa-times" aria-hidden="true"></i>)).toBe(true);

        const IdeaDescriptionAreaProps = enzymeWrapper.find('IdeaDescriptionArea').props().textAreaProps
        expect(IdeaDescriptionAreaProps.className).toEqual('idea-tile__description')
        expect(IdeaDescriptionAreaProps.defaultValue).toEqual(props.idea.body)
        expect(IdeaDescriptionAreaProps.placeholder).toEqual('Add description...')
        expect(IdeaDescriptionAreaProps.rows).toEqual(4)
    });
});

