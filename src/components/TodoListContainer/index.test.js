import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import 'jest-enzyme';
import { TodoInput, TodoList, TodoItem, TodoContainer } from './index'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('TodoItem', () => {
  let wrapper, props;

  beforeEach(() => {
    props = {
      item: "todo item"
    };
    wrapper = shallow(<TodoItem {...props} />);
  })

  it('renders the item that is passed as prop', () => {
    const listItem = <li><input type="checkbox" />todo item</li>;
    expect(wrapper).toContainReact(listItem);
  });
});

describe('TodoList', () => { 
  let wrapper, props;

  beforeEach(() => {
    props = {
      todoItems: [
        "todo item",
        "todo item 2"
      ]
    };
    wrapper = shallow(<TodoList {...props} />);
  })

  it('returns a list of TodoItem', () => {
    expect(wrapper).toContainReact(<TodoItem item={'todo item'} />)
    expect(wrapper).toContainReact(<TodoItem item={'todo item 2'} />)
    expect(wrapper.find(TodoItem).length).toBe(2)
  });
})

describe('TodoInput', () => {
  let wrapper, props; 

  beforeEach(() => {
    props = { 
      items: ['learn react'],
      setInput: jest.fn(),
      setItems: jest.fn(),
      input: "learn hooks!"
    }
    wrapper = shallow(<TodoInput {...props} />)
  })

  it("should render the 'learn hooks!' as the input value", () => {
    expect(wrapper.find('input').get(0).props.value).toBe('learn hooks!')
  })

  it("invokes setInput when the user changes the input", () => {
    const inputElement = wrapper.find('input')
    inputElement.simulate('change', {target: 'learn apollo hooks!'})
    expect(props.setInput).toHaveBeenCalled()
  })

  it('invokes setItems and setInput when a user adds an item', () => {
    const buttonElement = wrapper.find('button')
    buttonElement.simulate('click')
    expect(props.setItems).toHaveBeenCalled()
    expect(props.setInput).toHaveBeenCalledWith('')
  })
})

describe('TodoContainer', ()=> {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<TodoContainer/>)
  })

  it('renders TodoInput', () => {
    expect(wrapper.find(TodoInput).length).toBe(1)
  })

  it('renders TodoList', () => {
    expect(wrapper.find(TodoList).length).toBe(1)
  })
})