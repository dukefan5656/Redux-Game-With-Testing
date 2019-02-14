import {restartGame, makeGUess, generateAuralUpdate, RESTART_GAME, MAKE_GUESS, GENERATE_AURAL_UPDATE} from './actions';
import reducer from './reducer';



describe('Restart Game', () => {
  it('Resets the game, state', () => {
    let state = reducer({
      guesses: ['guess'],
      feedback: 'feedback',
      auralStatus: 'status',
      correctAnswer: 12345
    }, {});
    state = reducer(state, restartGame('answer'))
    expect(state).toEqual({
      auralStatus: "",
      correctAnswer: 'answer',
      feedback: "Make your guess!",
      guesses: []
    });
  })
});

describe('makeGuess', () => {
  it('Should make a guess', () => {
      let state = {
          guesses: [],
          feedback: '',
          correctAnswer: 100
      };

      state = reducer(state, makeGuess(25));
      expect(state.guesses).toEqual([25]);
      expect(state.feedback).toEqual("You're Ice Cold...");

      state = reducer(state, makeGuess(60));
      expect(state.guesses).toEqual([25, 60]);
      expect(state.feedback).toEqual("You're Cold...");

      state = reducer(state, makeGuess(80));
      expect(state.guesses).toEqual([25, 60, 80]);
      expect(state.feedback).toEqual("You're Warm.");

      state = reducer(state, makeGuess(95));
      expect(state.guesses).toEqual([25, 60, 80, 95]);
      expect(state.feedback).toEqual("You're Hot!");

      state = reducer(state, makeGuess(100));
      expect(state.guesses).toEqual([25, 60, 80, 95, 100]);
      expect(state.feedback).toEqual('You got it!');
  });
});