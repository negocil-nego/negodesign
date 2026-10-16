<script lang="ts">
  import type { Snippet } from "svelte";

  let { text }: { text: string | Snippet } = $props();
</script>

{#if typeof text === "string"}
  <p class="text-[13px] text-justify">
    {text}
  </p>
{:else}
  <div class="text-[13px] text-justify">
    {@render text()}
  </div>
{/if}
