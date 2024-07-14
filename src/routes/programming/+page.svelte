<script>
  import Meta from "../../components/meta.svelte";
</script>

<svelte:head>
  <Meta data={{ title: "Programming", url: "programming" }} />
</svelte:head>

<div class="h-screen bg-stone-900 text-gray-300 font-extralight">
  <div class="flex flex-col items-center justify-center">
    <h1 class="text-8xl p-8 text-center">programming experience</h1>
    <img
      class="m-5"
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
  </div>
</div>
