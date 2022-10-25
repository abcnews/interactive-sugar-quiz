<script lang="ts">
  import { fly } from 'svelte/transition';
  import { breakpoint } from '$lib/stores';
  import { getFeedbackForDistance, getScoreForDistance } from '$lib/utils';

  export let distance: number;

  $: feedback = getFeedbackForDistance(distance);
  $: score = getScoreForDistance(distance);
</script>

<p in:fly={{ y: $breakpoint ? 64 : 0, duration: 1000 }}>
  {feedback}
  {#if score > 0}
    That's worth
    <span>{score}&nbsp;point{score === 1 ? '' : 's'}</span>
  {/if}
</p>

<style>
  p {
    margin: 0 0 2rem;
    font-family: ABCSerif, sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    text-align: center;
  }

  @media (min-width: 960px) {
    p {
      position: absolute;
      top: 0;
      right: 0;
      width: 160px;
      text-align: right;
    }
  }

  span {
    color: var(--sugar-positive-colour);
  }
</style>
