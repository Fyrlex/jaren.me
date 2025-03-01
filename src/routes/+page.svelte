<script>
  import { fade } from 'svelte/transition';
  import Metadata from '../lib/components/Metadata.svelte';
  import GitHubIcon from '$lib/assets/github.png';
  import JarenCircle from '$lib/assets/jaren-circle.png';
  import LinkedinIcon from '$lib/assets/linkedin.png';

  const GitHub = GitHubIcon;
  const LinkedIn = LinkedinIcon;
</script>

<svelte:head>
  <Metadata url="/" />
</svelte:head>

<div class="mx-5 flex flex-col items-center bg-stone-900 text-center text-gray-300">
  <img
    in:fade={{ duration: 300 }}
    src={JarenCircle}
    width="200"
    height="200"
    alt="Jaren Goldberg"
  />
  <h1 class="p-10 text-6xl font-semibold sm:text-7xl">Hey, I&apos;m Jaren</h1>
  <p class="text-2xl">
    Computer Science is my thing, but I also enjoy playing music and photographing the night sky.
  </p>
  <br />
  <p>I am an active learner at school and on my own as new technologies and pratices excite me.</p>
  <div class="my-10 flex flex-row items-center justify-center space-x-5">
    <a
      href="https://github.com/Fyrlex"
      target="_blank"
      rel="noreferrer noopener"
      aria-label="GitHub Profile"
    >
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
