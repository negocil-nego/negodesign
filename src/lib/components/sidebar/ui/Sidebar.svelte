<script lang="ts">
  import type { Snippet } from "svelte";
  import { links } from "../data";
  import SidebarNavItem from "./SidebarNavItem.svelte";

  let { children }: { children: Snippet } = $props();
</script>

<div class="flex min-h-screen">
  <aside
    class="w-64 shrink-0 border-r border-gray-200 bg-white p-4 md:sticky md:top-0 md:h-screen md:overflow-y-auto"
  >
    <nav aria-label="Documentação">
      <ul class="space-y-4">
        {#each links as item (item.label)}
          <SidebarNavItem {item} />
        {/each}
      </ul>
    </nav>
  </aside>
  <main class="min-w-0 flex-1 p-6">
    {@render children()}
  </main>
</div>
