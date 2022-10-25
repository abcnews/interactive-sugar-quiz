<script lang="ts">
  import { stats } from '$lib/stores';

  $: hasAnsweredAll = $stats.numAnswered === $stats.numTotal;
</script>

<div>
  {#if hasAnsweredAll}
    <pre>{JSON.stringify($stats, null, 2)}</pre>
  {/if}
</div>

<style>
</style>
