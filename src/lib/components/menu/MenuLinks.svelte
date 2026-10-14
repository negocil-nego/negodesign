<script lang="ts">
  import { resolve } from "$app/paths";

  const items = [
    { url: "/", label: "Página inicial" },
    { url: "/docs", label: "Documentação" },
  ];
</script>

<ul class="flex gap-4 space-x-5">
  {#each items as { url, label } (url)}
    <li>
      <a href={resolve(url as "")}>{label}</a>
    </li>
  {/each}
</ul>
