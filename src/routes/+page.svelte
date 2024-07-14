<script>
  import Meta from "../components/meta.svelte";
</script>

<svelte:head>
  <Meta data={{ title: "Home", url: "" }} />
</svelte:head>

<div class="bg-stone-900 text-center text-gray-300">
  <h1
    class="text-6xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-8xl 2xl:text-8xl font-semibold p-10"
  >
    Hey!
  </h1>
  <p class="text-2xl w-[90vw] sm:w-1/2 max-w-fit mx-auto">
    Hi! I'm a rising sophomore at Virginia Tech studying Computer Science. I
    love to code, play music, and learn about the universe through astronomy.
    Check out my GitHub to see what I'm working on!
  </p>
  <div class="flex flex-row items-center justify-center">
    <div class="m-5">
      <a
        href="https://github.com/Fyrlex"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img
          alt="followers"
          title="GitHub"
          width="50"
          src="/src/lib/assets/github.png"
        />
      </a>
    </div>
    <div class="m-5">
      <a
        href="https://www.linkedin.com/in/jarengoldberg/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img
          alt="followers"
          title="LinkedIn Profile"
          width="50"
          src="/src/lib/assets/linkedin.png"
        />
      </a>
    </div>
  </div>
</div>
