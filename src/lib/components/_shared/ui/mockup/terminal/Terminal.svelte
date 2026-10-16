<script lang="ts">
  type TerminalProps = {
    selected?: "copy" | "cli" | "app";
  };

  let { selected }: TerminalProps = $props();
</script>

<div class="bg-slate-900 rounded-lg w-full">
  <div class="flex gap-2 p-3">
    {@render bill("bg-amber-400")}
    {@render bill("bg-blue-400")}
    {@render bill("bg-red-400")}
  </div>

  <div class="h-10 w-full"></div>

  <div class="flex gap-2 p-3 text-white text-[11px]">
    {@render optional(
      "Copiar",
      "hgi hgi-stroke hgi-rounded hgi-copy-01",
      selected == "copy",
    )}
    {@render optional(
      "Terminal",
      "hgi hgi-stroke hgi-rounded hgi-computer-terminal-01",
      selected == "cli",
    )}
    {@render optional(
      "Aplicativo",
      "hgi hgi-stroke hgi-rounded hgi-computer",
      selected == "app",
    )}
  </div>
</div>

{#snippet bill(color: string)}
  <div class="w-3 h-3 {color} rounded-full"></div>
{/snippet}

{#snippet optional(label: string, icon: string, active?: boolean)}
  <div
    class="rounded-sm p-1 flex gap-1 items-center cursor-pointer
    {active ? 'bg-amber-700' : 'border'}"
  >
    <i class={icon}></i>
    {label}
  </div>
{/snippet}
