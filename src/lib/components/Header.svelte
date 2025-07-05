<script lang="ts">
  import { base } from '$app/paths';

  const pages: { name: string; url: string }[] = [
    { name: 'home', url: '' },
    { name: 'astronomy', url: 'astronomy' },
    { name: 'music', url: 'music' },
    { name: 'programming', url: 'programming' },
  ];
</script>

<header class="sticky top-0 z-50 border-b border-stone-700">
  <nav
    class="flex h-20 flex-row items-center justify-around bg-stone-900 text-center text-xl font-extralight sm:text-2xl md:text-3xl lg:text-4xl"
  >
    {#each pages as { name, url }}
      <a class="text-cyan-500 duration-300 hover:text-cyan-400" href="{base}/{url}">{name}</a>
    {/each}
  </nav>
</header>
