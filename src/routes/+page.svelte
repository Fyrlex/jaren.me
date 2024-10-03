<script>
  import Meta from '../components/meta.svelte';
  import GitHubIcon from '$lib/assets/github.png';
  import LinkedinIcon from '$lib/assets/linkedin.png';

  const GitHub = GitHubIcon;
  const LinkedIn = LinkedinIcon;
</script>

<svelte:head>
  <Meta data={{ title: 'Home', url: '' }} />
</svelte:head>

<div class="bg-stone-900 text-center text-gray-300">
  <h1 class="text-6xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-8xl 2xl:text-8xl font-semibold p-10">
    👋Hey, I&apos;m Jaren
  </h1>
  <p class="text-2xl w-[90vw] sm:w-1/2 max-w-fit mx-auto">
    I&apos;m a sophomore at Virginia Tech majoring in Computer Science. I love to code, play music with my band,
    and learn about the universe through astronomy. Check out my GitHub to see what I'm working on!
  </p>
  <div class="flex flex-row items-center justify-center">
    <div class="m-5">
      <a href="https://github.com/Fyrlex" target="_blank" rel="noreferrer noopener">
        <img alt="followers" title="GitHub" width="50" src={GitHub} />
      </a>
    </div>
    <div class="m-5">
      <a href="https://www.linkedin.com/in/jarengoldberg/" target="_blank" rel="noreferrer noopener">
        <img alt="followers" title="LinkedIn Profile" width="50" src={LinkedIn} />
      </a>
    </div>
  </div>
</div>
