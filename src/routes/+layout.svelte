<script lang="ts">
  import "./layout.css";
  import favicon from "#lib/assets/favicon.svg";
  import type { LayoutProps } from "./$types";
  import Menu from "#lib/components/menu/Menu.svelte";
  import Footer from "#lib/components/footer/Footer.svelte";

  let { children }: LayoutProps = $props();
</script>

<svelte:head>
  <link rel="stylesheet" href="https://use.hugeicons.com/font/icons.css" />
  <link rel="icon" href={favicon} />
</svelte:head>

<Menu />
<main class="h-screen">
  {@render children()}
</main>
<Footer />
