import Game from './Game';
import React from 'react'; 
import Enzyme, { mount } from 'enyzme'; 
import Adapter from 'enzyme-adapter-react-16'; 
Enzyme.configure({ adapter: new Adapter() })

test('adds 1 + 2 to equal 3', () => {
  expect(Game.diceRoll).toBe([1,1]);
});

describe('Game Component', () => {
  beforeEach(() => {

  })
})