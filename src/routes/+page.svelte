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

<div class="container mx-auto flex flex-col items-center space-y-10 p-5 text-center text-gray-300">
  <img
    in:fade={{ duration: 300 }}
    src={JarenCircle}
    width="200"
    height="200"
    alt="Jaren Goldberg"
  />
  <h1 class="text-6xl font-semibold sm:text-7xl">Hey, I&apos;m Jaren</h1>
  <p class="text-xl sm:text-2xl">
    Computer Science is my thing, but I also enjoy playing music and photographing the night sky.
  </p>
  <hr class="w-2/3 border-slate-50" />
  <p class="max-w-3xl text-xl">
    I am a Sophomore in Computer Science at <a
      class="font-semibold text-cyan-500 duration-300 hover:text-cyan-400"
      href="https://www.vt.edu/"
      target="_blank">Virginia Tech</a
    >
    with interests in software engineering, cloud architecture, and server administration. During my
    time as a student, I have proven my ability to learn and apply myself by achieving Dean's List with
    Distinction. Additionally, I have gained valuable work experience by working as a Network Aide Intern
    at
    <a
      class="font-semibold text-cyan-500 duration-300 hover:text-cyan-400"
      href="https://www.fairfaxwater.org/"
      target="_blank">Fairfax Water</a
    >
    and as a founder of a Software Solutions company,
    <a
      class="font-semibold text-cyan-500 duration-300 hover:text-cyan-400"
      href="http://luyx.dev/"
      target="_blank">Luyx LLC</a
    >.
  </p>
  <a href="https://wakatime.com/@1f71c946-d1fb-450a-8092-e338a8012234"
    ><img
      src="https://wakatime.com/badge/user/1f71c946-d1fb-450a-8092-e338a8012234.svg?color=00b8db"
      alt="Total time coded since Jun 16 2022"
    /></a
  >
  <a
    class="min-w-xs cursor-pointer rounded-md bg-stone-800 p-3"
    href="/resume.pdf"
    target="_blank"
    rel="noreferrer noopener"
    title="Click to view my resume"
  >
    <div class="flex flex-col space-y-1 text-left">
      <h3 class="text-3xl font-semibold text-cyan-500">Resume</h3>
      <p>Last Updated: 7/5/2025</p>
    </div>
  </a>
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
