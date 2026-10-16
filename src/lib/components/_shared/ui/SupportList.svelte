<script lang="ts">
  import type { SupportItem } from "../data";

  let { items }: { items: SupportItem[] } = $props();
</script>

<div class="flex flex-wrap gap-4">
  {#each items as item (item.label)}
    <div
      class="border border-gray-300 dark:border-background rounded-full p-2 flex justify-center items-center"
    >
      <img src={item.image} alt={item.label} class="w-7 h-7" />
    </div>
  {/each}
</div>
