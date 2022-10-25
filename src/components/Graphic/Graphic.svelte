<script lang="ts">
  import Slider from '$components/Slider/Slider.svelte';
  import { QUESTIONS } from '$lib/data';
  import { getMarkerLabelSegments } from '$lib/utils';
  import { distances } from '$lib/stores';

  interface Marker {
    segments: [string, string, string];
    pct: number;
  }

  interface Markers {
    estimate: Marker;
    answer: Marker;
    serving: Marker;
  }

  export let index: number;
  export let questionKey: keyof typeof QUESTIONS;
  export let estimate: number;
  export let hasGuessed: boolean;

  let { answer, options, serving } = QUESTIONS[questionKey];
  let markers: Markers;

  $: hasCompleted = $distances[index] !== null;
  $: isEstimateLowerThanAnswer = estimate < answer;
  $: isEstimateEqualToAnswer = estimate === answer;
  $: isEstimateHigherThanAnswer = estimate > answer;
  $: markers = {
    estimate: {
      segments: getMarkerLabelSegments('you said', options[estimate]),
      pct: (estimate / (options.length - 1)) * 100
    },
    answer: {
      segments: getMarkerLabelSegments('limit', options[answer]),
      pct: (answer / (options.length - 1)) * 100
    },
    serving: {
      segments: getMarkerLabelSegments('serving size', serving.label),
      pct: serving.pct
    }
  };
</script>

<div
  class="base"
  class:hasCompleted
  class:isEstimateLowerThanAnswer
  class:isEstimateEqualToAnswer
  class:isEstimateHigherThanAnswer
>
  <div class="track">
    <div class="bar" data-marker="estimate" style={`width: ${markers.estimate.pct}%;`}>
      <div
        class="label"
        class:forceLeftAlignment={markers.estimate.pct < 20}
        class:forceRightAlignment={markers.estimate.pct > 80}
      >
        {#each markers.estimate.segments as segment}
          <div>{segment}</div>
        {/each}
      </div>
    </div>
    {#if hasCompleted}
      <div class="bar" data-marker="answer" style={`width: ${markers.answer.pct}%;`}>
        <div
          class="label"
          class:forceLeftAlignment={markers.answer.pct < 20}
          class:forceRightAlignment={markers.answer.pct > 80}
        >
          {#each markers.answer.segments as segment}
            <div>{segment}</div>
          {/each}
        </div>
      </div>
      <div class="bar" data-marker="serving" style={`width: ${markers.serving.pct}%;`}>
        <div class="label">
          {#each markers.serving.segments as segment}
            <div>{segment}</div>
          {/each}
        </div>
      </div>
    {/if}
    {#if !hasGuessed}
      <Slider bind:estimate {options} />
    {/if}
  </div>
</div>

<style>
  .base {
    margin: 48px 0 92px;
    font-family: ABCSans, sans-serif;
  }

  @media (min-width: 960px) {
    .base {
      margin-bottom: 128px;
      padding: 0 44px;
    }
  }

  .track {
    isolation: isolate;
    position: relative;
    width: 100%;
    height: 16px;
    background-color: var(--sugar-color-grayscale-2);
    border-radius: 3px;
  }

  .bar {
    position: absolute;
    top: 0;
    left: 0;
    height: 16px;
    border-radius: 3px 0 0 3px;
  }

  [data-marker='estimate'] {
    background-color: var(--sugar-color-bluescale-2);
  }

  .isEstimateLowerThanAnswer [data-marker='estimate'] {
    z-index: 1;
  }

  [data-marker='answer'] {
    background-color: var(--sugar-color-grayscale-5);
  }

  .isEstimateEqualToAnswer [data-marker='answer'] {
    background-color: transparent;
  }

  [data-marker='serving'] {
    z-index: 2;
  }

  .bar::before,
  .bar::after {
    content: '';
    position: absolute;
    right: -1px;
    bottom: 0;
    width: 2px;
  }

  .bar::before {
    opacity: 0;
    height: 125%;
    background-color: var(--sugar-color-grayscale-5);
    transition: opacity 0.25s;
  }

  .hasCompleted .bar::before {
    opacity: 1;
  }

  [data-marker='estimate']::before {
    background-color: var(--sugar-color-bluescale-2);
  }

  [data-marker='serving']::before {
    top: 0;
    bottom: auto;
    background-color: var(--sugar-color-grayscale-4);
  }

  .bar::after {
    height: 100%;
    background-color: var(--sugar-color-white);
  }

  .label {
    opacity: 0;
    position: absolute;
    bottom: calc(100% + 8px);
    left: 100%;
    padding: 0 2px;
    background-color: var(--sugar-color-grayscale-1);
    color: var(--sugar-color-grayscale-5);
    font-size: 0.75rem;
    font-weight: bold;
    line-height: 1.2;
    letter-spacing: 0.05ch;
    transition: opacity 0.25s;
  }

  .hasCompleted .label {
    opacity: 1;
  }

  [data-marker='estimate'] .label {
    color: var(--sugar-color-bluescale-3);
  }

  .isEstimateLowerThanAnswer [data-marker='estimate'] .label:not(.forceLeftAlignment),
  .isEstimateHigherThanAnswer [data-marker='answer'] .label:not(.forceLeftAlignment),
  .label.forceRightAlignment {
    transform: translate(-100%, 0);
    text-align: right;
  }

  .isEstimateEqualToAnswer [data-marker='estimate'] .label {
    display: none;
  }

  [data-marker='serving'] .label {
    top: calc(100% + 8px);
    bottom: auto;
    color: var(--sugar-color-grayscale-4);
  }

  .label div {
    position: relative;
    white-space: nowrap;
  }

  [data-marker='estimate'] .label.tooHigh div {
    right: 100%;
  }

  /* .isEstimateHigherThanLimit [data-marker='answer'] .label div {
    right: 100%;
  } */
</style>
