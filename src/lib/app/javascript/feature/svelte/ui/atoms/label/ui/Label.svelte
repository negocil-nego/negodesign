<script lang="ts">
  import type { LabelProps } from "#lib/app/javascript/_shared/data/types/atoms/label/types.ts";

  let { label, for: htmlFor }: LabelProps = $props();
</script>

<label for={htmlFor} data-name="label">{label}</label>
