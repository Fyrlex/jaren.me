<script lang="ts">
	import Meta from "../../components/meta.svelte";

	import ASTRO_MOON from "$lib/assets/ASTRO_MOON.jpg";
	import ASTRO_TRIFFID from "$lib/assets/ASTRO_TRIFFID.jpg";
	import ASTRO_TRIANGULUM from "$lib/assets/ASTRO_TRIANGULUM.jpg";
	import ASTRO_PINWHEEL from "$lib/assets/ASTRO_PINWHEEL.jpg";
	import Hobbies from "../../components/hobbies.svelte";

	const astroImages: {
		src: string;
		title: string;
		description: string;
		date: string;
	}[] = [
		{
			title: "Triangulum Galaxy",
			description:
				"Second to closest galaxy to the Milky Way, 2.8 million light years away.",
			src: ASTRO_TRIANGULUM,
			date: "Blacksburg, VA - November 12, 2023",
		},
		{
			title: "Triffid Nebula",
			description:
				"Celestron Omni 150 XLT, ZWO ASI 183MC, ~1.5 hours @ 30s sub-exposure.",
			src: ASTRO_TRIFFID,
			date: "Sky Meadows State Park - July 10, 2023",
		},
		{
			title: "Waxing Gibbous",
			description: "Earth's moon in a waxing gibbous phase.",
			src: ASTRO_MOON,
			date: "Rockville, MD - May 30, 2023",
		},
		{
			title: "Pinwheel Galaxy",
			description: "A spiral galaxy with a recent supernova SN 2023ixf.",
			src: ASTRO_PINWHEEL,
			date: "Fairfax, VA - May 25, 2023",
		},
	];
</script>

<svelte:head>
	<Meta data={{ title: "Astronomy", url: "astronomy" }} />
</svelte:head>

<div class="h-screen bg-stone-900 text-center text-gray-300 font-extralight">
	<h1 class="text-6xl lg:text-8xl text-center p-8">astronomy experience</h1>
	<div class="m-5">
		<h2 class="text-4xl lg:text-6xl text-cyan-500 m-4">Astrophotography</h2>
		<p class="text-2xl w-1/2 my-5 max-w-fit mx-auto">
			Member of the Northern Virginia Astronomy Club and Astronomy Club of
			Virginia Tech.
		</p>
		<p class="text-cyan-500 text-2xl">Personal Equipment</p>
		<p class="text-xl">Celestron Omni XLT 150</p>
		<p class="text-xl">ZWO ASI 183MC</p>
		<Hobbies data={astroImages} />
	</div>
</div>
