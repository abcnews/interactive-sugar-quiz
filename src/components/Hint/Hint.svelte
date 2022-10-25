<script lang="ts">
  import { fade } from 'svelte/transition';
</script>

<div role="none" out:fade={{ duration: 125 }}>
  <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8 15L0.999999 8L8 1"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <span>Slide</span>
  <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8 15L0.999999 8L8 1"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</div>

<style>
  div {
    transform: translate(-50%, 0);
    position: absolute;
    top: 24px;
    left: 50%;
    color: var(--sugar-color-primary);
    font-size: 0.75rem;
    font-weight: bold;
    text-transform: uppercase;
    pointer-events: none;
  }

  div > * {
    margin: 0 0.0625rem;
    vertical-align: middle;
  }

  div > svg:last-child {
    transform: rotate(180deg);
  }
</style>
