<script lang="ts">
  import SidebarContainer from "#lib/components/sidebar/ui/SidebarContainer.svelte";
  import type { Snippet } from "svelte";

  let { children }: { children: Snippet } = $props();
</script>

<SidebarContainer>
  {@render children()}
</SidebarContainer>
