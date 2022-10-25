<script lang="ts">
  import { onMount } from 'svelte';
  import { QUESTIONS } from '$lib/data';
  import { getImageURL } from '$lib/utils';

  export let questionKey: keyof typeof QUESTIONS;
  export let frame = 0;

  let { name, options, imageOffset } = QUESTIONS[questionKey];

  $: alt = `${options[frame]} of ${name}`;
  $: src = getImageURL(questionKey, frame);

  onMount(() => {
    setTimeout(() => {
      options.forEach((_option, index) => {
        const imgEl = new Image();

        imgEl.src = getImageURL(questionKey, index);
      });
    }, 1000);
  });
</script>

<div style={imageOffset ? `--sugar-illustration-image-offset: ${imageOffset}px` : undefined}>
  <img {alt} {src} />
</div>

<style>
  div {
    overflow-x: hidden;
    margin: var(--sugar-illustration-image-offset, 48px) 0 0;
  }

  img {
    z-index: -1;
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
    width: auto;
    height: calc(240px - var(--sugar-illustration-image-offset, 0px));
    object-fit: contain;
  }

  @media (min-width: 960px) {
    img {
      height: auto;
    }
  }
</style>
