<script lang="ts">
  let { description, img, src, title, tools, url }: ProjectOptions = $props();

  function openUrl(url: string) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
</script>

<button class="flex w-full flex-row rounded-md bg-stone-800 p-3" onclick={() => openUrl(url)}>
  <div class="flex flex-col space-y-1 text-left">
    <h3 class="text-4xl font-semibold text-cyan-500">{title}</h3>
    <p>{description}</p>
    <p>Tools: {tools}</p>
  </div>
</button>
