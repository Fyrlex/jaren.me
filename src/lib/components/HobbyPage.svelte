<script lang="ts">
  import HobbyText from './HobbyText.svelte';
  import type { HobbyPageOptions } from '../typings/index.js';

  let { title, description, data }: HobbyPageOptions = $props();
</script>

<div class="container mx-auto flex flex-col items-center p-5 text-center">
  <h1 class="text-center text-5xl lg:p-8 lg:text-8xl">{title}</h1>
  <p class="my-4 w-[70vw] text-xl lg:text-2xl">{description}</p>

  <div class="flex flex-col space-y-10">
    {#each data as { date, description, img, title }, i}
      <div
        class="mx-auto rounded-md border border-stone-600 bg-stone-800 shadow-lg duration-700 lg:flex lg:w-[50vw]"
      >
        {#if i % 2 === 0}
          <img
            src={img}
            alt={title}
            class="rounded-t-md border-b border-stone-600 lg:w-2/3 lg:rounded-none lg:rounded-l-md lg:border-r lg:border-b-0"
          />
          <HobbyText {title} {description} {date} />
        {:else}
          <img
            src={img}
            alt={title}
            class="rounded-t-md border-b border-stone-600 lg:hidden lg:w-2/3 lg:rounded-none lg:rounded-r-md lg:border-b-0 lg:border-l"
          />
          <HobbyText {title} {description} {date} />
          <img
            src={img}
            alt={title}
            class="hidden rounded-t-md border-b border-stone-600 lg:flex lg:w-2/3 lg:rounded-none lg:rounded-r-md lg:border-b-0 lg:border-l"
          />
        {/if}
      </div>
    {/each}
  </div>
</div>
