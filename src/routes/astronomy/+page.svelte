<script lang="ts">
  import { fade } from 'svelte/transition';
  import HobbyPage from '../../lib/components/HobbyPage.svelte';
  import Metadata from '../../lib/components/Metadata.svelte';

  import type { HobbyOptions } from '../../lib/typings/index.js';
  import ASTRO_12P from '$lib/assets/ASTRO_12P.jpg';
  import ASTRO_EAGLE from '$lib/assets/ASTRO_EAGLE.jpg';
  import ASTRO_MOON from '$lib/assets/ASTRO_MOON.jpg';
  import ASTRO_ORION from '$lib/assets/ASTRO_ORION.jpg';
  import ASTRO_TRIANGULUM from '$lib/assets/ASTRO_TRIANGULUM.jpg';
  import ASTRO_TRIFFID from '$lib/assets/ASTRO_TRIFFID.jpg';

  const astroImages: HobbyOptions[] = [
    {
      title: 'Eagle Nebula',
      img: ASTRO_EAGLE as unknown as string,
      date: 'McHenry, MD - July 29, 2024',
    },
    {
      title: '12P/Pons-Brooks',
      img: ASTRO_12P as unknown as string,
      date: 'Blacksburg, VA - March 31, 2024',
    },
    {
      title: 'Orion Nebula',
      img: ASTRO_ORION as unknown as string,
      date: 'Delaplane, VA - December 20, 2023',
    },
    {
      title: 'Triangulum Galaxy',
      img: ASTRO_TRIANGULUM as unknown as string,
      date: 'Blacksburg, VA - November 12, 2023',
    },
    {
      title: 'Triffid Nebula',
      img: ASTRO_TRIFFID as unknown as string,
      date: 'Delaplane, VA - July 10, 2023',
    },
    {
      title: 'Waxing Gibbous',
      img: ASTRO_MOON as unknown as string,
      date: 'Rockville, MD - May 30, 2023',
    },
  ];

  const title = 'astronomy experience';
  const description =
    'Member of the Northern Virginia Astronomy Club and Astronomy Club of Virginia Tech';
</script>

<svelte:head>
  <Metadata url="astronomy" />
</svelte:head>

<div in:fade={{ duration: 300 }} class="bg-stone-900 text-center font-extralight text-gray-300">
  <HobbyPage {title} {description} data={astroImages} />
</div>
