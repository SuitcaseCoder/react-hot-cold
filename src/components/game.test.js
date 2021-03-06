import React from 'react';
import{ shallow, mount } from 'enzyme';

import Game from './game';

describe('<Game />', () => {
  it('Renders without crashing', () => {
    shallow(<Game />);
  });

  it('can make guesses', () => {
    const wrapper = shallow(<Game />);
    wrapper.setState({
      correctAnswer: 100
    });

    wrapper.instance().makeGuess(18);
    expect(wrapper.state('guesses')).toEqual([18]);
    expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...');

    wrapper.instance().makeGuess(90);
    expect(wrapper.state('guesses')).toEqual([90]);
    expect(wrapper.state('feedback')).toEqual('You\'re Hot!');
  });

  it('can start new game', () => {
    const wrapper = shallow(<Game />);

    wrapper.setState({
      guesses: [1,2,3,4],
      feedback: 'Awesome',
      correctAnswer: -1
    });

    wrapper.instance().restartGame();
    expect(wrapper.state('guesses')).toEqual([]);
    expect(wrapper.state('feedback')).toEqual('Make your guess!');
    expect(wrapper.state('correctAnswer')).toBeGreaterThanOrEqual(0);
    expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100);
  });
});
