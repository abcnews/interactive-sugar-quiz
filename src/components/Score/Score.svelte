<script lang="ts">
  import { stats } from '../../lib/stores';
</script>

<div>
  <h3>Score</h3>
  <div>{$stats.pointsScored} / {$stats.pointsAvailable}</div>
  <div>{$stats.numTotal - $stats.numAnswered} questions remain</div>
</div>

<style>
</style>
