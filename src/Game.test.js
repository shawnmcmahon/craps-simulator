
const Enzyme, { mount } = require('enyzme'); 
import Adapter from 'enzyme-adapter-react-16'; 
Enzyme.configure({ adapter: new Adapter() })

import Game from './Game';


describe('Game Component', () => {
  let wrapper; 
  beforeEach(() => {
    wrapper = mount(<Game />)
  });

    it('works', () => {
      expect(2 + 2).toEqual(4);
    })
})