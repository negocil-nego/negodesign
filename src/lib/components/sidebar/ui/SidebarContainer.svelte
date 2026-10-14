<script lang="ts">
  import type { Snippet } from "svelte";

  let { children }: { children: Snippet } = $props();
</script>

<div class="w-full flex justify-center">
  <div class="w-full md:max-w-5xl">
    {@render children()}
  </div>
</div>
