import { derived, get, readable, writable } from 'svelte/store';
import { MAX_QUESTION_SCORE } from './constants';
import { getScoreForDistance } from './utils';

export const distances = writable<(number | null)[]>([]);

export const setDistanceAtIndex = (distance: number, index: number): void =>
  distances.set(
    get(distances).map((storedDistance, storedDistanceIndex) =>
      storedDistanceIndex === index ? distance : storedDistance
    )
  );

export const stats = derived(distances, distances => ({
  numAnswered: distances.filter(answer => answer !== null).length,
  numTotal: distances.length,
  pointsAvailable: distances.length * MAX_QUESTION_SCORE,
  pointsScored: distances.reduce<number>((a, b) => a + (b === null ? 0 : getScoreForDistance(b)), 0)
}));

const breakpointMQL = window.matchMedia('(min-width: 960px)');

export const breakpoint = readable(breakpointMQL.matches, set => {
  const onChange = () => set(breakpointMQL.matches);

  breakpointMQL.addEventListener('change', onChange);

  return () => {
    breakpointMQL.removeEventListener('change', onChange);
  };
});
