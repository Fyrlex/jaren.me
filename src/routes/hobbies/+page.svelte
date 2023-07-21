<script lang="ts">
	import ASTRO_MOON from "$lib/assets/ASTRO_MOON.jpg";
	import ASTRO_TRIFFID from "$lib/assets/ASTRO_TRIFFID.jpg";

	const astroImages: {
		src: string;
		title: string;
		description: string;
		date: string;
	}[] = [
		{
			title: "Waxing Gibbous",
			description:
				"Celestron Omni 150 XLT, ZWO ASI 183MC, ~10 seconds 70 frames. Shot in Rockville, MD.",
			src: ASTRO_MOON,
			date: "May 30, 2023",
		},
		{
			title: "Triffid Nebula",
			description:
				"Celestron Omni 150 XLT, ZWO ASI 183MC, ~1.5 hours @ 30s sub-exposure. Shot at Sky Meadows State Park.",
			src: ASTRO_TRIFFID,
			date: "July 10, 2023",
		},
	];
</script>

<div class="h-screen bg-stone-900 text-center text-gray-300">
	<h1 class="text-8xl font-semibold p-8">my hobbies</h1>
	<h2 class="text-6xl text-cyan-500 m-4">astronomy</h2>
	<p class="text-2xl w-1/2 max-w-fit mx-auto">
		I am currently a member of the Northern Virginia Astronomy Club. I've only
		gone to two events
	</p>
	{#each astroImages as { date, description, src, title }, i}
		<div
			class="flex w-2/5 mx-auto bg-stone-800 rounded-md m-5 border-2 border-stone-700 shadow-md hover:scale-[1.10] duration-700"
		>
			{#if i % 2 === 0}
				<img {src} alt={title} class="rounded-l-md w-2/3" />
				<div class="relative flex flex-col mx-auto">
					<p class="text-2xl p-2 text-cyan-500">{title}</p>
					<p class="w-3/4 mx-auto">{description}</p>
					<p class="text-2xl absolute inset-x-0 bottom-0 p-2">{date}</p>
				</div>
			{:else}
				<div class="relative flex flex-col mx-auto">
					<p class="text-2xl p-2 text-cyan-500">{title}</p>
					<p class="w-3/4 mx-auto">{description}</p>
					<p class="text-2xl absolute inset-x-0 bottom-0 p-2">{date}</p>
				</div>
				<img {src} alt={title} class="rounded-l-md w-2/3" />
			{/if}
		</div>
	{/each}

	<h2 class="text-6xl p-8">A summary</h2>
	<p class="text-2xl w-1/2 max-w-fit mx-auto">
		Performing exciting shows with my band, lifting heavy weights in the gym,
		photographing the night sky, doing the daily chess.com puzzle (and keeping
		up with hygiene!) are all activities I enjoy.
	</p>
</div>
