<script lang="ts">
  import { fade } from 'svelte/transition';
  import Metadata from '../../lib/components/Metadata.svelte';
  import Project from '../../lib/components/Project.svelte';
  import type { ProjectOptions } from '../../lib/typings/index.js';
  import CountBot from '$lib/assets/countbot.png';
  import LuyxLLC from '$lib/assets/luyx-llc.png';
  import VinnyAnthony from '$lib/assets/vinny-anthony-icon.png';

  const projects: ProjectOptions[] = [
    {
      title: 'PassionDev',
      description: 'A platform for (student) developers to grow and connect',
      img: CountBot as unknown as string,
      src: 'https://github.com/LuyxLLC/',
      url: 'https://passion.dev',
      tools: 'typescript, fastify, nextjs, postgres, drizzle',
    },
    {
      title: 'Vinny Anthony Website',
      description: 'A website and merch shop for a local musician',
      img: VinnyAnthony as unknown as string,
      src: 'https://github.com/Fyrlex/vinny-anthony.com',
      url: 'https://vinny-anthony.com/',
      tools: 'nodejs, svelte, tailwind, stripe',
    },
    {
      title: 'CountBot',
      description: 'A Discord bot that is used by 300K+ users in over 16,000 servers',
      img: CountBot as unknown as string,
      src: 'https://github.com/Count-Bot/',
      url: 'https://count.bot',
      tools: 'svelte, mongodb, typescript, linux, cloudflare',
    },
    {
      title: 'Luyx LLC',
      description:
        'A Software Solutions company that I founded that values learning, growth, and best practices',
      img: LuyxLLC as unknown as string,
      src: 'https://github.com/LuyxLLC',
      url: 'https://luyx.dev',
      tools: 'svelte, mongodb, nodejs, rust, linux, cloudflare, github',
    },
  ];
</script>

<svelte:head>
  <Metadata url="programming" />
</svelte:head>

<div
  in:fade={{ duration: 300 }}
  class="flex flex-col items-center bg-stone-900 text-center font-extralight text-gray-300"
>
  <h1 class="p-4 text-center text-5xl lg:p-8 lg:text-8xl">programming experience</h1>
  <p class="my-4 w-[70vw] text-xl lg:text-2xl">
    Active passion project developer with some freelance experience - before AI. Full stack, from
    frontend to server infrastructure - no AWS, Azure, or GCP, just straight Linux command for all
    network and deployment configuration.
  </p>
  <div class="flex flex-col items-center justify-center space-y-10 p-4">
    <img
      class="my-3 w-[70vw] select-none lg:w-[40vw]"
      alt="Skill Icons"
      width="500"
      src={'/skills.svg'}
    />
    <h2 class="text-3xl lg:p-8 lg:text-6xl">projects</h2>
    <div class="flex flex-col space-y-10">
      {#each projects as project}
        <Project {...project} />
      {/each}
    </div>
  </div>
</div>
