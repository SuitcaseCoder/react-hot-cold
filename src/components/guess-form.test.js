import React from 'react';
import {shallow} from 'enzyme';

import Guess-Form from './guess-form';

describe('<Guess-Form />', ()=>{
  it('render without crashing', ()=>{
    shallow(<Guess-Form />);
  });


  it('should make callback onMakeGuess submitted',()=>{
    const callback = jest.fn();
    const wrapper = mount(<Guess-Form onMakeGuess={callback} />);
    const value = 10;
    wrapper.find(input'[type="number"]').instance().value = value;
    wrapper.simulate('submit');
    expect(callback).toHaveBeenCalledWith(value.toString());
  })

})
