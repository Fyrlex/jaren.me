<script lang="ts">
  import Metadata from '../../components/Metadata.svelte';

  import ASTRO_EAGLE from '$lib/assets/ASTRO_EAGLE.jpg';
  import ASTRO_MOON from '$lib/assets/ASTRO_MOON.jpg';
  import ASTRO_TRIFFID from '$lib/assets/ASTRO_TRIFFID.jpg';
  import ASTRO_TRIANGULUM from '$lib/assets/ASTRO_TRIANGULUM.jpg';
  import ASTRO_ORION from '$lib/assets/ASTRO_ORION.jpg';
  import ASTRO_12P from '$lib/assets/ASTRO_12P.jpg';

  import Hobbies from '../../components/HobbyPage.svelte';
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';

  const astroImages: HobbyOptions[] = [
    {
      title: 'Eagle Nebula',
      description: 'A young, open cluster of stars in the Serpens constellation.',
      img: ASTRO_EAGLE as unknown as string,
      date: 'McHenry, MD - July 29, 2024',
    },
    {
      title: '12P/Pons-Brooks',
      description: 'A bright comet that is nearly visible to the naked eye.',
      img: ASTRO_12P as unknown as string,
      date: 'Blacksburg, VA - March 31, 2024',
    },
    {
      title: 'Orion Nebula',
      description: 'One of the brightest and largest nebulae.',
      img: ASTRO_ORION as unknown as string,
      date: 'Delaplane, VA - December 20, 2023',
    },
    {
      title: 'Triangulum Galaxy',
      description: 'Second to closest galaxy to the Milky Way, 2.8 million light years away.',
      img: ASTRO_TRIANGULUM as unknown as string,
      date: 'Blacksburg, VA - November 12, 2023',
    },
    {
      title: 'Triffid Nebula',
      description: 'A diffuse, reflection and emission nebula.',
      img: ASTRO_TRIFFID as unknown as string,
      date: 'Delaplane, VA - July 10, 2023',
    },
    {
      title: 'Waxing Gibbous',
      description: "Earth's moon in a waxing gibbous phase.",
      img: ASTRO_MOON as unknown as string,
      date: 'Rockville, MD - May 30, 2023',
    },
  ];

  const title = 'astronomy experience';
  const description =
    'Member of the Northern Virginia Astronomy Club and Astronomy Club of Virginia Tech';
</script>

<svelte:head>
  <Metadata data={{ title: 'Astronomy', url: 'astronomy' }} />
</svelte:head>

<div in:fade={{ duration: 300 }} class="bg-stone-900 text-center font-extralight text-gray-300">
  <Hobbies {title} {description} data={astroImages} />
</div>
