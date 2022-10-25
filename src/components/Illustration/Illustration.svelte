<script lang="ts">
  import { QUESTIONS } from '$lib/data';

  export let questionKey: keyof typeof QUESTIONS;
  export let frame = 0;

  let { name, options, imageOffset } = QUESTIONS[questionKey];

  $: alt = `${options[frame]} of ${name}`;
  $: src = `${__webpack_public_path__}images/${questionKey}-${frame + 1}.jpg`;
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
