<script lang="ts">
  import type { Snippet } from "svelte";
  import type { ButtonMinEventProps } from "./types";

  let { children, onClick }: ButtonMinEventProps & { children: Snippet } =
    $props();
</script>

<button
  class="w-10 h-10 border border-stone-300 flex items-center justify-center"
  onclick={onClick}
  >{@render children()}
</button>
