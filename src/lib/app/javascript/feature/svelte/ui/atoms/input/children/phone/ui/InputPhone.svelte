<script lang="ts">
  import type { InputPhoneProps } from "#lib/app/javascript/_shared/data/types/atoms/input/children/phone/types.ts";
  import Input from "../../../ui/Input.svelte";
  import InputLabel from "../../label/ui/InputLabel.svelte";

  let { labelProps, inputProps }: InputPhoneProps = $props();

  const phoneProps = $derived({ ...inputProps, type: "tel" as const });
</script>

{#if labelProps}
  <InputLabel {labelProps} inputProps={phoneProps} />
{:else}
  <Input {...phoneProps} />
{/if}
