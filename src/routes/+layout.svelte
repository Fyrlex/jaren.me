<script>
	import "../app.css";
	export const prerender = true;
</script>

<nav
	class="flex space-x-5 bg-slate-800 text-gray-300 font-bold text-center text-3xl justify-center items-center h-[4vw]"
>
	<a href="/">home</a>
	<a href="/academics">academics</a>
	<a href="/hobbies">hobbies</a>
	<a href="/programming">programming</a>
	<a href="/contact">contact</a>
</nav>

<slot />
