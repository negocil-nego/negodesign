<script lang="ts">
  import type { Snippet } from "svelte";

  let { text }: { text: string | Snippet } = $props();
</script>

{#if typeof text === "string"}
  <p class="text-[14px]">
    {text}
  </p>
{:else}
  <div class="text-[14px]">
    {@render text()}
  </div>
{/if}
