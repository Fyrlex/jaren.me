<script lang="ts">
  let { date, description, title }: HobbyTextOptions = $props();
</script>

<div class="relative flex flex-col mx-auto">
  <h3 class="text-2xl md:text-3xl xl:text-4xl m-2 text-cyan-500">
    {title}
  </h3>
  <p class="text-xl lg:text-xl xl:text-2xl w-3/4 mx-auto mb-10">
    {description}
  </p>
  <p class="text-lg lg:text-xl absolute inset-x-0 bottom-0 p-2">
    {date}
  </p>
</div>
