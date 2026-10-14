<script lang="ts">
  import type { SupportItem } from "../data";

  let { items }: { items: SupportItem[] } = $props();
</script>

<div class="flex flex-wrap gap-4 md:gap-10">
  {#each items as item (item.label)}
    <div class="border rounded-full p-2 flex justify-center items-center">
      <img src={item.image} alt={item.label} class="w-8 h-8" />
    </div>
  {/each}
</div>
