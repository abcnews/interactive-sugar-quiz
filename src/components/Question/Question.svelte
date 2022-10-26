<script lang="ts">
  import { fly } from 'svelte/transition';
  import Buttons from '$components/Buttons/Buttons.svelte';
  import Feedback from '$components/Feedback/Feedback.svelte';
  import Graphic from '$components/Graphic/Graphic.svelte';
  import Illustration from '$components/Illustration/Illustration.svelte';
  import { QUESTIONS } from '$lib/data';
  import { distances } from '$lib/stores';

  export let index: number;
  export let questionKey: keyof typeof QUESTIONS;

  let { answer, comment, name, options, text } = QUESTIONS[questionKey];
  let [textPreName, textPostName]: string[] = text.split('*');
  let estimate = Math.floor((options.length - 1) / 2);
  let hasGuessed = false;

  $: distance = $distances[index];
</script>

<div>
  <h2>{textPreName}<strong>{name}</strong>{textPostName} before you reach six teaspoons of&nbsp;sugar?</h2>
  <Illustration {questionKey} frame={distance !== null ? answer : estimate} />
  <Graphic {questionKey} {index} bind:estimate bind:hasGuessed />
  {#if distance === null}
    <Buttons {questionKey} {index} bind:estimate bind:hasGuessed />
  {:else}
    <Feedback {distance} />
    <p in:fly={{ y: 32, delay: 1000, duration: 1000 }}>{comment}</p>
  {/if}
</div>

<style>
  div {
    display: flow-root;
    position: relative;
    font-family: ABCSerif, sans-serif;
  }

  h2 {
    margin: 0;
    font-size: 1.25rem;
    font-weight: normal;
    text-shadow: 0 0 1px var(--sugar-color-grayscale-1), 0 0 2px var(--sugar-color-grayscale-1),
      0 0 3px var(--sugar-color-grayscale-1);
  }

  @media (min-width: 960px) {
    h2 {
      position: absolute;
      top: 0;
      left: 0;
      width: 264px;
      font-size: 1.5rem;
    }
  }

  p {
    margin: 0 auto;
    max-width: 600px;
    font-size: 1.125rem;
    line-height: 1.5;
  }
</style>
