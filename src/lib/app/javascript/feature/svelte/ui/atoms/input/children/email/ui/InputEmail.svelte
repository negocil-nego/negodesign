<script lang="ts">
  import type { InputEmailProps } from "#lib/app/javascript/_shared/data/types/atoms/input/children/email/types.ts";
  import Input from "../../../ui/Input.svelte";
  import InputLabel from "../../label/ui/InputLabel.svelte";

  let { labelProps, inputProps }: InputEmailProps = $props();

  const emailProps = $derived({ ...inputProps, type: "email" as const });
</script>

{#if labelProps}
  <InputLabel {labelProps} inputProps={emailProps} />
{:else}
  <Input {...emailProps} />
{/if}
