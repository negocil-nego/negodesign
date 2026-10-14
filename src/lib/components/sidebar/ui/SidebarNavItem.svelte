<script lang="ts">
  import { page } from "$app/state";
  import { resolve } from "$app/paths";
  import type { NavItem } from "../data";
  import SidebarNavItem from "./SidebarNavItem.svelte";

  let { item }: { item: NavItem } = $props();

  const hasChildren = $derived(Boolean(item.items?.length));
  const isActive = $derived(
    item.href !== undefined && page.url.pathname === item.href,
  );
  const hasActiveDescendant = $derived(hasActive(item));

  let open = $state(true);

  $effect(() => {
    if (hasActiveDescendant) open = true;
  });

  function hasActive(node: NavItem): boolean {
    return (
      node.items?.some(
        (child) =>
          child.href === page.url.pathname || hasActive(child),
      ) ?? false
    );
  }
</script>

<li>
  {#if hasChildren}
    {#if item.href}
      <div class="flex items-center justify-between gap-1">
        <a
          href={resolve(item.href as "")}
          aria-current={isActive ? "page" : undefined}
          class="min-w-0 flex-1 rounded-md px-2 py-1.5 text-sm font-medium text-gray-800 hover:bg-gray-100 {isActive
            ? 'text-orange-600'
            : ''}"
        >
          {item.label}
        </a>
        <button
          type="button"
          aria-expanded={open}
          aria-label={open ? `Recolher ${item.label}` : `Expandir ${item.label}`}
          onclick={() => (open = !open)}
          class="rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-700"
        >
          <svg
            class="h-4 w-4 transition-transform {open ? 'rotate-90' : ''}"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m9 5 7 7-7 7"
            />
          </svg>
        </button>
      </div>
    {:else}
      <button
        type="button"
        aria-expanded={open}
        onclick={() => (open = !open)}
        class="flex w-full items-center justify-between gap-2 rounded-md px-2 py-1.5 text-left text-xs font-bold uppercase tracking-wide {hasActiveDescendant
          ? 'text-orange-600'
          : 'text-gray-500'} hover:bg-gray-100 hover:text-gray-900"
      >
        {item.label}
        <svg
          class="h-3.5 w-3.5 shrink-0 transition-transform {open
            ? 'rotate-90'
            : ''}"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m9 5 7 7-7 7"
          />
        </svg>
      </button>
    {/if}

    {#if open}
      <ul class="ml-3 space-y-0.5 border-l border-gray-200 pl-3">
        {#each item.items ?? [] as child (child.label)}
          <SidebarNavItem item={child} />
        {/each}
      </ul>
    {/if}
  {:else}
    <a
      href={resolve(item.href as "")}
      aria-current={isActive ? "page" : undefined}
      class="block rounded-md px-2 py-1.5 text-sm hover:bg-gray-100 {isActive
        ? 'bg-orange-50 font-medium text-orange-600'
        : 'text-gray-600'}"
    >
      {item.label}
    </a>
  {/if}
</li>
