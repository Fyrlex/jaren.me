<script>
	import Meta from "../components/meta.svelte";
</script>

<svelte:head>
	<Meta data={{ title: "Home", url: "" }} />
</svelte:head>

<div class="bg-stone-900 text-center text-gray-300">
	<h1
		class="text-6xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-8xl 2xl:text-8xl font-semibold p-10"
	>
		Hey!
	</h1>
	<p class="text-2xl w-[90vw] sm:w-1/2 max-w-fit mx-auto">
		My name is Jaren Goldberg. Currently I am a freshman at Virginia Tech and
		plan to major in Computer Science. I enjoy many activies including sports
		and the gym, astronomy, playing music with my band, and being outside in
		nature.
	</p>
	<div class="max-w-fit mx-auto m-5">
		<a
			href="https://github.com/Fyrlex"
			target="_blank"
			rel="noreferrer noopener"
		>
			<img
				alt="followers"
				title="Follow me on Github"
				src="https://img.shields.io/github/followers/Fyrlex?color=236ad3&style=for-the-badge&logo=github&label=Follow"
			/>
		</a>
	</div>
</div>
