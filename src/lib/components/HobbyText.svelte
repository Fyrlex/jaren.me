<script lang="ts">
  import type { HobbyTextOptions } from '../typings/index.js';

  let { date, description, title }: HobbyTextOptions = $props();
</script>

<div class="relative mx-auto flex flex-col">
  <h3 class="m-2 text-2xl text-cyan-500 md:text-3xl xl:text-4xl">
    {title}
  </h3>
  {#if description}
    <p class="mx-auto mb-10 w-3/4 text-xl lg:text-xl xl:text-2xl">
      {description}
    </p>
  {/if}
  <p class="absolute inset-x-0 bottom-0 p-2 text-lg lg:text-xl">
    {date}
  </p>
</div>
