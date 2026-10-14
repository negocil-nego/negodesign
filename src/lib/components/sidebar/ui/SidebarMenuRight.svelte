<script lang="ts">
  import type { Snippet } from "svelte";
  import type { MenuRightItem } from "../data";

  let {
    menu = [],
    children,
  }: { menu?: MenuRightItem[]; children: Snippet } = $props();

  let activeId = $state<string | undefined>(undefined);

  $effect(() => {
    if (!menu.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            activeId = entry.target.id;
          }
        }
      },
      { rootMargin: "-10% 0px -70% 0px" },
    );

    for (const item of menu) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  });
</script>

<div class="flex flex-col gap-8 lg:flex-row">
  <div class="min-w-0 flex-1">
    {@render children()}
  </div>

  {#if menu.length}
    <aside class="w-full shrink-0 lg:w-56">
      <nav aria-label="Nesta página" class="lg:sticky lg:top-6">
        <div class="text-xs font-bold uppercase tracking-wide text-gray-500">
          Nesta página
        </div>
        <ul class="mt-3 space-y-0.5 border-l border-gray-200">
          {#each menu as item (item.id)}
            <li>
              <a
                href={"#" + item.id}
                aria-current={activeId === item.id ? "true" : undefined}
                class="-ml-px block border-l-2 py-1.5 pl-3 text-sm {activeId ===
                item.id
                  ? 'border-orange-600 font-medium text-orange-600'
                  : 'border-transparent text-gray-600 hover:border-gray-300 hover:text-gray-900'}"
              >
                {item.label}
              </a>
            </li>
          {/each}
        </ul>
      </nav>
    </aside>
  {/if}
</div>
