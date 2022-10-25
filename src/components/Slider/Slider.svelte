<script lang="ts">
  import { fade } from 'svelte/transition';
  import Hint from '$components/Hint/Hint.svelte';
  import { hints } from '$lib/stores';
  import { getMeasuresSegments } from '$lib/utils';

  export let options: string[];
  export let estimate: number;

  const onInteract = () => hints.set(false);
</script>

<div out:fade>
  <input
    type="range"
    max={options.length - 1}
    bind:value={estimate}
    aria-valuetext={getMeasuresSegments(options[estimate]).join(' ')}
    on:mousedown={onInteract}
    on:touchstart={onInteract}
  />
  <ul role="none">
    {#each options as option, index}
      <li
        style={`--sugar-option-offset: ${(index / (options.length - 1)) * 100}%`}
        class:isVisible={estimate === index}
      >
        {getMeasuresSegments(option).join(' ')}
      </li>
    {/each}
  </ul>
  {#if $hints}
    <Hint />
  {/if}
</div>

<style>
  div {
    position: relative;
    margin: 0 -8px;
    width: calc(100% + 16px);
  }

  input {
    -webkit-appearance: none;
    position: absolute;
    top: -16px;
    padding: 0;
    width: 100%;
    height: 44px;
    background-color: transparent;
    cursor: pointer;
  }

  input:focus {
    outline: none;
  }

  input:focus-visible {
    outline: auto;
  }

  input::-webkit-slider-runnable-track {
    background: none;
    height: 100%;
  }

  input::-moz-range-track {
    background: none;
    height: 100%;
  }

  input::-webkit-slider-thumb {
    -webkit-appearance: none;

    padding: 2px;
    width: 19px;
    height: 44px;
    background-color: var(--bg, #f9f9f9);
    background-image: url('./icons/handle.svg');
    background-repeat: no-repeat;
    background-position: 2px 2px;
  }

  input::-moz-range-thumb {
    box-sizing: border-box;
    border: none;
    border-radius: 0;

    padding: 2px;
    width: 19px;
    height: 44px;
    background-color: var(--bg, #f9f9f9);
    background-image: url('./icons/handle.svg');
    background-repeat: no-repeat;
    background-position: 2px 2px;
  }

  ul {
    pointer-events: none;
    display: block;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 0;
    list-style: none;
  }

  li {
    opacity: 0;
    transform: translate(calc(-1 * var(--sugar-option-offset)), 0);
    position: absolute;
    top: -36px;
    left: var(--sugar-option-offset);
    margin: 0;
    padding: 0;
    color: var(--sugar-primary-colour);
    font-size: 0.75rem;
    font-weight: bold;
    white-space: nowrap;
  }

  @media (min-width: 960px) {
    li {
      transform: translate(-50%, 0);
      font-size: 0.875rem;
    }
  }

  li.isVisible {
    opacity: 1;
  }
</style>
