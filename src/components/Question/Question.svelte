<script lang="ts">
  import { DEFAULT_FEEDBACK, DISTANCE_POINTS } from '../../lib/constants';
  import QUESTIONS from '../../lib/questions';
  import { scores, setScoreAtIndex } from '../../lib/stores';
  import Score from '../Score/Score.svelte';

  export let index: number;
  export let questionKey: keyof typeof QUESTIONS;

  let { answer, comment, name, options, text } = QUESTIONS[questionKey];
  let [textPreName, textPostName]: string[] = text.split('*');
  let estimate = Math.floor(options.length / 2);
  let feedback: string;

  $: score = $scores[index];
  $: isAnswered = score !== null;
  $: alt = `${options[isAnswered ? answer : estimate]} of ${name}`;
  $: src = `${__webpack_public_path__}images/${questionKey}-${(isAnswered ? answer : estimate) + 1}.jpg`;

  const guess = () => {
    const distance = estimate - answer;
    const absDistance = Math.abs(distance);
    const score = absDistance >= DISTANCE_POINTS.length ? 0 : DISTANCE_POINTS[absDistance];
    const feedbackKey: keyof typeof DEFAULT_FEEDBACK =
      absDistance === 0 ? 'correct' : absDistance === 1 ? 'close' : distance > 0 ? 'above' : 'below';

    feedback = DEFAULT_FEEDBACK[feedbackKey];
    setScoreAtIndex(index, score);
  };
</script>

<div>
  <h2>{textPreName}<strong>{name}</strong>{textPostName} before you reach six teaspoons of sugar?</h2>
  <img {alt} {src} />
  {#if !isAnswered}
    <select bind:value={estimate}>
      {#each options as option, index}
        <option value={index}>{option}</option>
      {/each}
    </select>
    <button on:click={() => guess()}>Guess</button>
  {:else}
    <p>Answer: {options[answer]}</p>
    <p>Your estimate: {options[estimate]}</p>
    <p>Feedback: {feedback}</p>
    <p>{comment}</p>
  {/if}
  <Score />
</div>

<style>
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
</style>
