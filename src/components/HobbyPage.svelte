<script lang="ts">
  import HobbyText from './HobbyText.svelte';

  let { title, subtitle, description, data }: HobbyPageOptions = $props();
</script>

<div class="flex flex-col items-center text-center mx-10">
  <h1 class="text-5xl lg:text-8xl text-center lg:p-8">{title}</h1>
  <h2 class="text-3xl lg:text-5xl text-cyan-500 m-2">{subtitle}</h2>
  <p class="text-xl lg:text-2xl w-[70vw] mb-4">{description}</p>

  <div class="flex flex-col space-y-10">
    {#each data as { date, description, img, title }, i}
      <div class="lg:flex lg:w-[50vw] mx-auto bg-stone-800 rounded-md border border-stone-600 shadow-lg duration-700">
        {#if i % 2 === 0}
          <img
            src={img}
            alt={title}
            class="rounded-t-md border-b lg:border-b-0 lg:rounded-none lg:rounded-l-md lg:border-r border-stone-600 lg:w-2/3"
          />
          <HobbyText {title} {description} {date} />
        {:else}
          <img
            src={img}
            alt={title}
            class="lg:hidden rounded-t-md border-b lg:border-b-0 lg:rounded-none lg:rounded-r-md lg:border-l border-stone-600 lg:w-2/3"
          />
          <HobbyText {title} {description} {date} />
          <img
            src={img}
            alt={title}
            class="hidden lg:flex rounded-t-md border-b lg:border-b-0 lg:rounded-none lg:rounded-r-md lg:border-l border-stone-600 lg:w-2/3"
          />
        {/if}
      </div>
    {/each}
  </div>
</div>
