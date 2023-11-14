<script lang="ts">
	import { base } from "$app/paths";
	import "../app.css";
	import Transition from "../components/transition.svelte";

	const pages: { name: string; url: string }[] = [
		{ name: "home", url: "" },
		{ name: "astronomy", url: "astronomy" },
		{ name: "music", url: "music" },
		{ name: "programming", url: "programming" },
	];

	export let data;
</script>

<nav
	class="flex space-x-6 bg-stone-900 font-extralight text-center text-2xl justify-center items-center h-20"
>
	{#each pages as { name, url }, i}
		<a
			class="text-cyan-500 hover:text-cyan-400 duration-300"
			href="{base}/{url}">{name}</a
		>{/each}
</nav>
<Transition {data}>
	<slot />
</Transition>

<!-- <footer class="flex h-1/6 bg-black">test</footer> -->
