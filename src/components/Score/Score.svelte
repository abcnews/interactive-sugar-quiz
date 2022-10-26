<script lang="ts">
  import { stats } from '$lib/stores';

  $: numRemaining = $stats.numTotal - $stats.numAnswered;
  $: statusText =
    numRemaining > 0
      ? `${numRemaining} question${numRemaining === 1 ? '' : 's'} remain${numRemaining !== 1 ? '' : 's'}`
      : 'Quiz complete';
</script>

<aside role="status">
  <section>
    <div>Score</div>
    <div>{$stats.pointsScored} / {$stats.pointsAvailable}</div>
    <div>{statusText}</div>
  </section>
</aside>

<style>
  aside {
    position: relative;
    width: calc(100vw - var(--scrollbar-width, 0px)); /* Odyssey var */
    left: 50%;
    transform: translate(-50%, 0);
    background-color: var(--sugar-color-grayscale-2);
    color: var(--sugar-color-grayscale-4);
    font-family: ABCSans, sans-serif;
    font-weight: bold;
    font-size: 1rem;
    text-transform: uppercase;
    box-shadow: 0 0 1px 1px var(--sugar-color-grayscale-3);
  }

  section {
    margin: 0 auto;
    padding: 8px 16px;
    max-width: 384px;
    display: flex;
    align-items: center;
  }

  div:nth-child(2) {
    margin-left: 12px;
    margin-right: auto;
    color: var(--sugar-color-bluescale-3);
    font-size: 1.375rem;
    font-family: ABCSerif, sans-serif;
    letter-spacing: 0.05ch;
  }
</style>
