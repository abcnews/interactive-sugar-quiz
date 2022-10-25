<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import { QUESTIONS } from '$lib/data';
  import { breakpoint, setDistanceAtIndex } from '$lib/stores';

  export let index: number;
  export let questionKey: keyof typeof QUESTIONS;
  export let estimate: number;
  export let hasGuessed: boolean;

  let { answer, options } = QUESTIONS[questionKey];

  const complete = () => {
    setDistanceAtIndex(estimate - answer, index);
  };

  const guess = () => {
    hasGuessed = true;
    setTimeout(complete, 750);
  };

  const decrement = () => {
    if (estimate > 0) {
      --estimate;
    }
  };

  const increment = () => {
    if (estimate + 1 < options.length) {
      ++estimate;
    }
  };
</script>

<div>
  {#if !hasGuessed}
    <button class="stepper decrementer" disabled={estimate === 0 || hasGuessed} on:click={() => decrement()} out:fade>
      <svg viewBox="0 0 28 4" xmlns="http://www.w3.org/2000/svg">
        <g stroke-linecap="round" stroke-width="4">
          <path d="M2,2 L26,2" />
        </g>
      </svg>
    </button>
    <button
      class="stepper incrementer"
      disabled={estimate + 1 === options.length || hasGuessed}
      on:click={() => increment()}
      out:fade
    >
      <svg viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
        <g stroke-linecap="round" stroke-width="4">
          <path d="M2,14 L26,14" />
          <path d="M14,2 L14,26" />
        </g>
      </svg>
    </button>
    <button
      class="guesser"
      disabled={hasGuessed}
      on:click={() => guess()}
      out:fly={{ y: $breakpoint ? -64 : 0, duration: 1000 }}
    >
      {hasGuessed ? 'Checking…' : 'Check answer'}
    </button>
  {/if}
</div>

<style>
  div {
    position: relative;
    margin: 0 -8px;
  }

  button {
    position: absolute;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    bottom: 16px;
    transition: opacity 0.25s;
  }

  button[disabled] {
    pointer-events: none;
    opacity: 0.5;
  }

  .stepper {
    bottom: 40px;
    padding: 8px;
    width: 44px;
    height: 44px;
    background-color: transparent;
  }

  @media (min-width: 980px) {
    .stepper {
      bottom: 114px;
    }
  }

  .decrementer {
    left: 0;
  }

  .incrementer {
    right: 0;
  }

  .stepper svg {
    width: 28px;
    height: auto;
    vertical-align: middle;
    stroke: var(--sugar-color-primary);
  }

  .guesser {
    transform: translate(50%, 0);
    right: 50%;
    width: 160px;
    height: 34px;
    background-color: var(--sugar-color-tertiary);
    letter-spacing: 0.05ch;
  }

  @media (min-width: 980px) {
    .guesser {
      transform: none;
      right: 8px;
      bottom: 192px;
    }
  }
</style>
