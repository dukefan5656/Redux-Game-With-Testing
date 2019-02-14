import {shallow} from 'enzyme';
import React from 'react';
import {GuessList} from './guess-list'

describe.only('Renders an array of integers', () =>{
it('renders and array of integers', () => {
  const guesses = [1, 2, 3, 4];
  const wrapper = shallow(<GuessList guesses={guesses}/>)
  expect(wrapper.find('#guessList').children().length).toEqual(4);
  expect(wrapper.find('#guessList').children().map(node => parseInt(node.text()))).toEqual(guesses);
})

it('Renders without crashing', () => {
  shallow(<GuessList guesses={[]} />);
});
});
