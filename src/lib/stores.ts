import { derived, get, writable } from 'svelte/store';
import { MAX_QUESTION_SCORE } from './constants';

export const scores = writable<(number | null)[]>([]);

export const setScoreAtIndex = (index: number, score: number): void =>
  scores.set(get(scores).map((_score, _index) => (_index === index ? score : _score)));

export const stats = derived(scores, scores => ({
  numAnswered: scores.filter(score => score !== null).length,
  numTotal: scores.length,
  pointsAvailable: scores.length * MAX_QUESTION_SCORE,
  pointsScored: scores.reduce<number>((a, b) => a + (b || 0), 0)
}));
