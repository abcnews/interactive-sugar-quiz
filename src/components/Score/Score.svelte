<script lang="ts">
  import { stats } from '$lib/stores';
</script>

<aside role="status">
  <section>
    <div>Score</div>
    <div>{$stats.pointsScored} / {$stats.pointsAvailable}</div>
    <div>{$stats.numTotal - $stats.numAnswered} questions remain</div>
  </section>
</aside>

<style>
  aside {
    position: relative;
    width: calc(100vw - var(--scrollbar-width, 0px)); /* Odyssey var */
    left: 50%;
    transform: translate(-50%, 0);
    background-color: #eee;
    color: var(--sugar-color-grayscale-3);
    font-family: ABCSans, sans-serif;
    font-weight: bold;
    font-size: 1rem;
    text-transform: uppercase;
    box-shadow: 0 0 1px 1px #bbb;
  }

  section {
    margin: 0 auto;
    padding: 8px 16px;
    max-width: 600px;
    display: flex;
    align-items: center;
  }

  div:nth-child(2) {
    margin-left: 12px;
    margin-right: auto;
    color: var(--sugar-color-primary);
    font-size: 1.375rem;
    font-family: ABCSerif, sans-serif;
    letter-spacing: 0.05ch;
  }
</style>
