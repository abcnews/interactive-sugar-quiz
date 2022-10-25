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
  <ul>
    {#each options as option, optionIndex}
      <li
        style={`--sugar-option-offset: ${(optionIndex / (options.length - 1)) * 100}%`}
        class:isVisible={estimate === optionIndex}
      >
        {getMeasuresSegments(option).join(' ')}
      </li>
    {/each}
  </ul>
  <input
    type="range"
    max={options.length - 1}
    bind:value={estimate}
    on:mousedown={onInteract}
    on:touchstart={onInteract}
  />
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
    top: -32px;
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

  input {
    -webkit-appearance: none;
    position: absolute;
    top: -16px;
    padding: 0;
    width: 100%;
    height: 48px;
    background-color: transparent;
    cursor: pointer;
  }

  input:focus {
    outline: none;
  }

  :is(input::-webkit-slider-runnable-track, input::-moz-range-track) {
    background: none;
    height: 100%;
  }

  input::-webkit-slider-thumb {
    -webkit-appearance: none;
    box-sizing: content-box;
    border: 2px solid var(--bg, #f9f9f9);
    width: 15px;
    height: 40px;
    background-color: transparent;
    background-image: url('./icons/handle.svg');
    background-repeat: no-repeat;
    background-position: center top;
  }

  input::-moz-range-thumb {
    appearance: none;
    box-sizing: content-box;
    border: 2px solid var(--bg, #f9f9f9);
    border-top: none;
    border-bottom: none;
    border-radius: 0;
    width: 15px;
    height: 40px;
    background-color: transparent;
    background-image: url('./icons/handle.svg');
    background-repeat: no-repeat;
    background-position: center top;
  }
</style>
