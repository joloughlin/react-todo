import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import 'jest-enzyme';
import TodoInput from './index';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('TodoInput', () => {
  let wrapper, props, buttonElement, inputElement;
  const useStateSpy = jest.spyOn(React, 'useState')
  useStateSpy.mockImplementation((term) => [term, setInput]);

  beforeEach(() => {
    props = {
      items: ["todo item"],
      setItems: jest.fn(),
    };
    wrapper =  mount(<TodoInput {...props} />);
    inputElement = wrapper.find('input');
    buttonElement = wrapper.find('button');
  })

  it.skip('has input value', () => {
    inputElement.simulate('change', { target: { value: 'todo item'}})
    expect(inputElement.value).toEqual('todo item')
  });

  // it('invokes setItems when button is clicked', () => {
  //   buttonElement.simulate('click')
  //   expect(props.setItems).toHaveBeenCalled();
  // });

  // it('invokes updateInput whenever input value is changed', () => {
  //   inputElement.simulate('change')
  //   expect().toHaveBeenCalled();
  // });
});
