<script lang="ts">
	import Meta from "../../components/meta.svelte";

	import ASTRO_MOON from "$lib/assets/ASTRO_MOON.jpg";
	import ASTRO_TRIFFID from "$lib/assets/ASTRO_TRIFFID.jpg";
	import MUSIC_1 from "$lib/assets/MUSIC_1.jpg";
	// import MUSIC_2 from "$lib/assets/MUSIC_2.jpg";
	// import MUSIC_3 from "$lib/assets/MUSIC_3.jpg";
	// import MUSIC_4 from "$lib/assets/MUSIC_4.jpg";
	// import MUSIC_5 from "$lib/assets/MUSIC_5.jpg";
	import MUSIC_6 from "$lib/assets/MUSIC_6.jpg";
	import Hobbies from "../../components/hobbies.svelte";

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

<svelte:head>
	<Meta data={{ title: "Music", url: "music" }} />
</svelte:head>

<div class="h-screen bg-stone-900 text-center text-gray-300 font-extralight">
	<h1 class="text-5xl lg:text-8xl text-center lg:p-8">music experience</h1>
	<div class="m-10">
		<div class="m-5">
			<h2 class="text-3xl lg:text-6xl text-cyan-500 m-2 mx-auto">
				Electric Bassist
			</h2>
			<p class="text-xl lg:text-2xl w-[70vw] max-w-fit mb-4 mx-auto">
				Member of rock band <a href="https://clishae.us" class="text-cyan-500"
					>Clishae</a
				>
			</p>
		</div>
		<Hobbies data={musicImages} />
	</div>
</div>
