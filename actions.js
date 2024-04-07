export const ROLL_NUMBER = 'ROLL_NUMBER';

export const rollNumber = () => ({
  type: ROLL_NUMBER,
  payload: Math.floor(Math.random() * 100) + 1, // Generate a random number between 1 and 100
});