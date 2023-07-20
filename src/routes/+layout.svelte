<script>
	import { base } from "$app/paths";
	import "../app.css";
</script>

<div class="bg-black">
	<nav
		class="flex space-x-5 bg-slate-800 text-gray-300 font-bold text-center text-3xl justify-center items-center h-16"
	>
		<a href="{base}/">home</a>
		<a href="{base}/academics">academics</a>
		<a href="{base}/hobbies">hobbies</a>
		<a href="{base}/programming">programming</a>
		<a href="{base}/contact">contact</a>
	</nav>
</div>
<slot />
