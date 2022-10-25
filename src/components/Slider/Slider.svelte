<script lang="ts">
  import { fade } from 'svelte/transition';
  import Hint from '$components/Hint/Hint.svelte';
  import { getMeasuresSegments } from '$lib/utils';

  export let options: string[];
  export let estimate: number;

  let hasInteracted = false;

  const onInteract = () => (hasInteracted = true);
</script>

<div out:fade>
  <datalist>
    {#each options as option, optionIndex}
      <option
        style={`--sugar-option-offset: ${(optionIndex / (options.length - 1)) * 100}%`}
        class:isVisible={estimate === optionIndex}
        class:nearStart={optionIndex / (options.length - 1) < 0.15}
        class:nearEnd={optionIndex / (options.length - 1) > 0.85}
        value={optionIndex}
        label={getMeasuresSegments(option).join(' ')}
      />
    {/each}
  </datalist>
  <input
    type="range"
    class="slider"
    min={0}
    max={options.length - 1}
    step={1}
    bind:value={estimate}
    on:mousedown={onInteract}
    on:touchstart={onInteract}
  />
  {#if !hasInteracted}
    <Hint />
  {/if}
</div>

<style>
  datalist {
    pointer-events: none;
    display: block;
    width: 100%;
    position: relative;
  }

  option {
    opacity: 0;
    transform: translate(-50%, 0);
    position: absolute;
    bottom: 20px;
    left: var(--sugar-option-offset);
    color: var(--sugar-primary-colour);
    font-size: 0.875rem;
    font-weight: bold;
  }

  option.isVisible {
    opacity: 1;
  }

  @media (max-width: 959px) {
    option {
      transform: translate(calc(-1 * var(--sugar-option-offset)), 0);
      font-size: 0.75rem;
    }

    option.nearStart {
      transform: translate(-10%, 0);
    }

    option.nearEnd {
      transform: translate(-90%, 0);
    }
  }

  input {
    -webkit-appearance: none;
    margin: -16px -8px 0;
    padding: 0;
    width: calc(100% + 16px);
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
    border: 2px solid var(--sugar-text-inverted);
    width: 15px;
    height: 40px;
    background-color: transparent;
    background-image: url('./icons/handle.svg');
    background-repeat: no-repeat;
    background-position: center top;
  }

  input::-moz-range-thumb {
    -webkit-appearance: none;
    box-sizing: content-box;
    border: 2px solid var(--sugar-text-inverted);
    width: 15px;
    height: 40px;
    background-color: transparent;
    background-image: url('./icons/handle.svg');
    background-repeat: no-repeat;
    background-position: center top;
  }
</style>
