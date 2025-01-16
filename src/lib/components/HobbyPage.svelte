<script lang="ts">
  import HobbyText from './HobbyText.svelte';

  let { title, subtitle, description, data }: HobbyPageOptions = $props();
</script>

<div class="mx-10 flex flex-col items-center text-center">
  <h1 class="text-center text-5xl lg:p-8 lg:text-8xl">{title}</h1>
  <h2 class="m-2 text-3xl text-cyan-500 lg:text-5xl">{subtitle}</h2>
  <p class="mb-4 w-[70vw] text-xl lg:text-2xl">{description}</p>

  <div class="flex flex-col space-y-10">
    {#each data as { date, description, img, title }, i}
      <div
        class="mx-auto rounded-md border border-stone-600 bg-stone-800 shadow-lg duration-700 lg:flex lg:w-[50vw]"
      >
        {#if i % 2 === 0}
          <img
            src={img}
            alt={title}
            class="rounded-t-md border-b border-stone-600 lg:w-2/3 lg:rounded-none lg:rounded-l-md lg:border-b-0 lg:border-r"
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
