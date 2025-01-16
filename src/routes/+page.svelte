<script>
  import Metadata from '../components/Metadata.svelte';
  import GitHubIcon from '$lib/assets/github.png';
  import LinkedinIcon from '$lib/assets/linkedin.png';
  import JarenCircle from '$lib/assets/jaren-circle.png';
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';

  const GitHub = GitHubIcon;
  const LinkedIn = LinkedinIcon;

  let loaded = $state(false);

  onMount(() => {
    loaded = true;
  });
</script>

<svelte:head>
  <Metadata data={{ title: 'Home', url: '' }} />
</svelte:head>

<div class="bg-stone-900 text-center flex flex-col items-center text-gray-300 mx-5 ">
  <img in:fade={{ duration: 300 }} src={JarenCircle} width="200" height="200" alt="Jaren Goldberg" />
  <h1 class="text-6xl sm:text-7xl font-semibold p-10">👋Hey, I&apos;m Jaren</h1>
  <p class="text-2xl">Computer Science is my thing, but I also enjoy playing music and photographing the night sky.</p>
  <br />
  <p>I am an active learner at school and on my own as new technologies and pratices excite me.</p>
  <div class="flex flex-row items-center justify-center space-x-5 my-10">
    <a href="https://github.com/Fyrlex" target="_blank" rel="noreferrer noopener" aria-label="GitHub Profile">
      <img alt="GitHub" width="50" src={GitHub} />
    </a>
    <a
      href="https://www.linkedin.com/in/jarengoldberg/"
      target="_blank"
      rel="noreferrer noopener"
      aria-label="LinkedIn Profile"
    >
      <img alt="LinkedIn" width="50" src={LinkedIn} />
    </a>
  </div>
</div>
