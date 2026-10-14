<script lang="ts">
  import type { LayoutProps } from "./$types";
  import Sidebar from "#lib/components/sidebar/ui/Sidebar.svelte";

  let { children }: LayoutProps = $props();
</script>

<Sidebar>
  {@render children()}
</Sidebar>
