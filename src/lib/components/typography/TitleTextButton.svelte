<script lang="ts">
  import { goto } from "$app/navigation";
  import { resolve } from "$app/paths";
  import ButtonBack from "../_shared/ui/button/ButtonBack.svelte";
  import ButtonNext from "../_shared/ui/button/ButtonNext.svelte";
  import TitleText from "./TitleText.svelte";
  let {
    text,
    urlBack,
    urlNext,
  }: { text: string; urlBack?: string; urlNext?: string } = $props();
</script>

{#if urlBack || urlNext}
  <div class="flex justify-between">
    <TitleText {text} />
    <div class="flex gap-2">
      {#if urlBack}
        <ButtonBack onClick={() => goto(resolve(urlBack as ""))} />
      {/if}
      {#if urlNext}
        <ButtonNext onClick={() => goto(resolve(urlNext as ""))} />
      {/if}
    </div>
  </div>
{:else}
  <TitleText {text} />
{/if}
