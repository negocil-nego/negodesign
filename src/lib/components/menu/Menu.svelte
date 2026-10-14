<script lang="ts">
  import MenuLinks from "./MenuLinks.svelte";
  import MenuLogo from "./MenuLogo.svelte";
</script>

<nav class="flex w-full border-b p-2 md:p-5">
  <div class="flex justify-between items-center w-full mx-auto">
    <MenuLogo />
    <MenuLinks />
  </div>
</nav>
