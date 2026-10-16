<script lang="ts">
  import type { InputLabelProps } from "#lib/app/javascript/_shared/data/types/atoms/input/children/label/types.ts";
  import Label from "../../../../label/ui/Label.svelte";
  import Input from "../../../ui/Input.svelte";

  let { labelProps, inputProps }: InputLabelProps = $props();
</script>

<Label {...labelProps} />
<Input {...inputProps} />
