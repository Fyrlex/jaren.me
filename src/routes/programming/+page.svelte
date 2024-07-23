<script>
  import { goto } from '$app/navigation';
  import Meta from '../../components/meta.svelte';

  function openGitHub() {
    goto('https://github.com/Fyrlex/');
  }
</script>

<svelte:head>
  <Meta data={{ title: 'Programming', url: 'programming' }} />
</svelte:head>

<div class=" bg-stone-900 text-gray-300 font-extralight">
  <h1 class="text-5xl lg:text-8xl text-center lg:p-8">programming experience</h1>
  <div class="flex flex-col mx-auto items-center justify-center p-4">
    <img
      class="my-3 w-[70vw] lg:w-[40vw]"
      alt="Skill Icons"
      width="500"
      src="https://skillicons.dev/icons?i=nodejs,ts,svelte,html,react,git,github,discord,mongodb,mysql,nginx,cloudflare&theme=dark&perline=6"
    />
    <p class="text-lg">
      My largest and most professional project is <a
        target="_blank"
        rel="noreferrer noopener"
        href="https://count.bot"
        class="text-orange-500 hover:text-orange-400 duration-300">CountBot</a
      >, a Discord bot that is used by 100K+ users in over 10,000 communities.
    </p>
    <div class="hidden md:flex sm:w-fit">
      <figure class="bg-[#242938] rounded-md my-4 p-2 shadow-lg ring-1">
        <embed
          on:click={openGitHub}
          src="https://wakatime.com/share/@Fyrlex/49dd0cdd-b18a-48ec-937a-b93cdb607e7f.svg"
        />
      </figure>
    </div>
  </div>
</div>
