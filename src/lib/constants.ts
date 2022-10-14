export const DISTANCE_POINTS = [10, 5, 2, 1];

export const MAX_QUESTION_SCORE = Math.max(...DISTANCE_POINTS);

export const DEFAULT_FEEDBACK = {
  correct: 'Correct!',
  close: 'Almost right!',
  above: "It's lower!",
  below: "It's higher!"
};
