<script lang="ts">
  import { base } from '$app/paths';
  import '../app.css';

  const pages: { name: string; url: string }[] = [
    { name: 'home', url: '' },
    { name: 'astronomy', url: 'astronomy' },
    { name: 'music', url: 'music' },
    { name: 'programming', url: 'programming' },
  ];

  let { children } = $props();
</script>

<nav
  class="mx-5 my-5 flex flex-row items-center justify-around bg-stone-900 text-center text-xl font-extralight sm:text-2xl md:text-3xl lg:text-4xl"
>
  {#each pages as { name, url }}
    <a class="text-cyan-500 duration-300 hover:text-cyan-400" href="{base}/{url}">{name}</a>
  {/each}
</nav>

<main>
  {@render children()}
</main>

<footer class="bg-stone-900 p-5 text-center text-gray-300">
  <p>© 2025 Jaren Goldberg</p>
</footer>
