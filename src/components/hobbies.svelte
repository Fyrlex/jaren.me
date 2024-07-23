<script lang="ts">
  export let data: {
    src: string;
    title: string;
    description: string;
    date: string;
  }[];
</script>

{#each data as { date, description, src, title }, i}
  <div
    class="lg:flex lg:w-[50vw] mx-auto bg-stone-800 rounded-md border border-stone-600 shadow-lg scale-[0.95] hover:scale-[1] duration-700"
  >
    {#if i % 2 === 0}
      <img
        {src}
        alt={title}
        class="rounded-t-md border-b lg:border-b-0 lg:rounded-none lg:rounded-l-md lg:border-r border-stone-600 lg:w-2/3"
      />
      <div class="relative flex flex-col mx-auto">
        <p class="text-2xl md:text-3xl xl:text-4xl m-2 text-cyan-500">
          {title}
        </p>
        <p class="text-xl lg:text-xl xl:text-3xl w-3/4 mx-auto mb-10">
          {description}
        </p>
        <p class="text-lg lg:text-xl absolute inset-x-0 bottom-0 p-2">{date}</p>
      </div>
    {:else}
      <img
        {src}
        alt={title}
        class="lg:hidden rounded-t-md border-b lg:border-b-0 lg:rounded-none lg:rounded-r-md lg:border-l border-stone-600 lg:w-2/3"
      />
      <div class="relative flex flex-col mx-auto">
        <p class="text-2xl md:text-3xl xl:text-4xl p-2 text-cyan-500">
          {title}
        </p>
        <p class="text-xl lg:text-xl xl:text-3xl w-3/4 mx-auto mb-10">
          {description}
        </p>
        <p class="text-lg lg:text-xl absolute inset-x-0 bottom-0 p-2">
          {date}
        </p>
      </div>
      <img
        {src}
        alt={title}
        class="hidden lg:flex rounded-t-md border-b lg:border-b-0 lg:rounded-none lg:rounded-r-md lg:border-l border-stone-600 lg:w-2/3"
      />
    {/if}
  </div>
{/each}
