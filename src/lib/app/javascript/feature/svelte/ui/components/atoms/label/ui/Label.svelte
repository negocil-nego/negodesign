<script lang="ts">
  import type { LabelProps } from "../data/types";

  let { label, for: htmlFor }: LabelProps = $props();
</script>

<label for={htmlFor}>{label}</label>
