<script lang="ts">
  import Slider from '$components/Slider/Slider.svelte';
  import { QUESTIONS } from '$lib/data';
  import { getMarkerLabelSegments } from '$lib/utils';

  interface Marker {
    segments: [string, string, string];
    pct: number;
  }

  interface Markers {
    answer: Marker;
    estimate: Marker;
    serving: Marker;
  }

  export let questionKey: keyof typeof QUESTIONS;
  export let estimate: number;
  export let hasGuessed: boolean;

  let { answer, options, serving } = QUESTIONS[questionKey];
  let markers: Markers;

  $: isEstimateEqualToLimit = estimate === answer;
  $: isEstimateHigherThanLimit = estimate > answer;
  $: markers = {
    answer: {
      segments: getMarkerLabelSegments('limit', options[answer]),
      pct: (answer / (options.length - 1)) * 100
    },
    estimate: {
      segments: getMarkerLabelSegments('you said', options[estimate]),
      pct: (estimate / (options.length - 1)) * 100
    },
    serving: {
      segments: getMarkerLabelSegments('serving size', serving.label),
      pct: serving.pct
    }
  };
</script>

<div class="base" class:isEstimateEqualToLimit class:isEstimateHigherThanLimit>
  <div class="track">
    <!-- <pre>{JSON.stringify(markers, null, 2)}</pre> -->
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
    position: relative;
    width: 100%;
    height: 16px;
    background-color: var(--sugar-primary-inactive-colour);
    border-radius: 3px;
  }
</style>
