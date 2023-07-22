<script lang="ts">
	import ASTRO_MOON from "$lib/assets/ASTRO_MOON.jpg";
	import ASTRO_TRIFFID from "$lib/assets/ASTRO_TRIFFID.jpg";
	import MUSIC_1 from "$lib/assets/MUSIC_1.jpg";
	// import MUSIC_2 from "$lib/assets/MUSIC_2.jpg";
	// import MUSIC_3 from "$lib/assets/MUSIC_3.jpg";
	// import MUSIC_4 from "$lib/assets/MUSIC_4.jpg";
	// import MUSIC_5 from "$lib/assets/MUSIC_5.jpg";
	import MUSIC_6 from "$lib/assets/MUSIC_6.jpg";
	import Hobbies from "../../components/hobbies.svelte";

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

	const musicImages: {
		src: string;
		title: string;
		description: string;
		date: string;
	}[] = [
		{
			title: "Richmond Music Hall",
			description: "",
			src: MUSIC_1,
			date: "July 14, 2023",
		},
		{
			title: "Great Falls",
			description: "",
			src: MUSIC_6,
			date: "May 17, 2022",
		},
	];
</script>

<div class="h-screen bg-stone-900 text-center text-gray-300 font-extralight">
	<h1 class="text-6xl lg:text-8xl text-center p-8">my hobbies</h1>
	<div class="m-5">
		<h2 class="text-4xl lg:text-6xl text-cyan-500 m-4">astronomy</h2>
		<p class="text-2xl w-1/2 max-w-fit mx-auto">
			I am currently a member of the Northern Virginia Astronomy Club. I've only
			gone to two events but they were super cool.
		</p>
		<Hobbies data={astroImages} />
	</div>
	<div class="m-5">
		<h2 class="text-6xl text-cyan-500 m-4">music</h2>
		<p class="text-2xl w-1/2 max-w-fit mx-auto">
			Bassist for rock band <a href="https://clishae.us" class="text-cyan-500"
				>Clishae</a
			>
		</p>
		<Hobbies data={musicImages} />
	</div>
</div>
