<script lang="ts">
  let { description, img, src, title, tools, url }: ProjectOptions = $props();

  function openUrl(url: string) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
</script>

<button class="bg-stone-800 flex flex-row w-full p-3 rounded-md" onclick={() => openUrl(url)}>
  <div class="text-left flex flex-col space-y-1">
    <h3 class="font-semibold text-4xl text-cyan-500">{title}</h3>
    <p>{description}</p>
    <p>Tools: {tools}</p>
  </div>
</button>
