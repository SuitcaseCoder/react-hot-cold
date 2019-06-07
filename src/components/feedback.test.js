import React from 'react';
import {shallow} from 'enzyme';

import Feedback from './feedback';

describe('<Feedback />', ()=>{

  it('should render without crashing', ()=>{
    shallow(<Feedback />);
  });

  it('render feedback', ()=>{
    const TEST_FEEDBACK = 'You are listening to a game!'
    const wrapper = shallow(<Feedback feedback={TEST_FEEDBACK} />);
    expect(wrapper.contains(TEST_FEEDBACK)).toEqual(true);
  });
});
