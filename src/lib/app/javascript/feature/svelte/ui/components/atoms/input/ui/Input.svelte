<script lang="ts">
  import type { InputProps } from "#lib/app/javascript/_shared/data/types/atoms/input/data/types.ts";

  let { type, required, disabled, placeholder, value }: InputProps = $props();
</script>

<input {type} {required} {disabled} {placeholder} {value} />
