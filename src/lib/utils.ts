import { DISTANCES_SCORES, FEEDBACK } from './constants';

export const getImageURL = (questionKey: string, frame: number) =>
  `${__webpack_public_path__}images/${questionKey}-${frame + 1}.jpg`;

export const getFeedbackForDistance = (distance: number): string => {
  const absDistance = Math.abs(distance);

  const feedbackKey: keyof typeof FEEDBACK =
    absDistance === 0 ? 'correct' : absDistance === 1 ? 'close' : distance > 0 ? 'above' : 'below';

  return FEEDBACK[feedbackKey];
};

export const getScoreForDistance = (distance: number): number => {
  const absDistance = Math.abs(distance);

  return absDistance >= DISTANCES_SCORES.length ? 0 : DISTANCES_SCORES[absDistance];
};

export const getMeasuresSegments = (measuresText: string): [string, string] => {
  const [measureA, measureB] = measuresText.split(' | ');

  return [measureA, `(${measureB})`];
};

export const getMarkerLabelSegments = (kicker: string, measuresText: string): [string, string, string] => {
  return [`${kicker.toUpperCase()}:`, ...getMeasuresSegments(measuresText)];
};
