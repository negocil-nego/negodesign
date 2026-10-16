<script lang="ts">
  import type { Snippet } from "svelte";
  import ParagraphText from "./ParagraphText.svelte";

  let { text }: { text: string | Snippet } = $props();
</script>

<div
  class="border border-dashed bg-blue-100 border-blue-400 p-2 rounded-sm dark:bg-background"
>
  <ParagraphText {text} />
</div>
