import { RESTART_GAME, MAKE_GUESS, GENERATE_AURAL_UPDATE, restartGame, makeGuess, generateAuralUpdate } from './actions';

describe('RestartGame', () =>{
it('Should restart game', () => {
  expect(restartGame('answer-arg')).toEqual({
    type: RESTART_GAME,
    correctAnswer: 'answer-arg'
  })
});
})

describe('makeGuess', () => {
  it('Should handle guesses', () => {
      const guess = 10;
      const action = makeGuess(guess);
      expect(action.type).toEqual(MAKE_GUESS);
      expect(action.guess).toEqual(guess);
  });
});

describe('generateAuralUpdate', () => {
  it('Should return the action', () => {
      const action = generateAuralUpdate();
      expect(action.type).toEqual(GENERATE_AURAL_UPDATE);
  });
});