<script lang="ts">
  import Metadata from '../../lib/components/Metadata.svelte';

  import MUSIC_1 from '$lib/assets/MUSIC_1.jpg';
  import MUSIC_6 from '$lib/assets/MUSIC_6.jpg';
  import HobbyPage from '../../lib/components/HobbyPage.svelte';
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';

  const musicImages: HobbyOptions[] = [
    {
      title: 'Richmond Music Hall',
      description: '',
      img: MUSIC_1 as unknown as string,
      date: 'July 14, 2023',
    },
    {
      title: 'Great Falls',
      description: '',
      img: MUSIC_6 as unknown as string,
      date: 'May 17, 2022',
    },
  ];

  const title = 'music experience';
  const description = "Member of rock band Clishae and Vinny Anthony's backing band.";
</script>

<svelte:head>
  <Metadata data={{ title: 'Music', url: 'music' }} />
</svelte:head>

<div in:fade={{ duration: 300 }} class="bg-stone-900 text-center font-extralight text-gray-300">
  <HobbyPage {title} {description} data={musicImages} />
</div>
