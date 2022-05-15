<script>
	import { fade } from "svelte/transition";
</script>

<div
	in:fade={{ delay: 200, duration: 300 }}
	class="flex flex-col prose m-0 p-0 mt-10 justify-center"
>
	<h1 class="ml-3 font-sans text-3xl text-opacity-50 m-0 p-0">404 🥺</h1>
	<div class="mt-4">
		<a
			class="font-sans prose text-opacity-90 no-underline border-2 border-gray-900 rounded-full py-2 px-5"
			href="/">Go back home.</a
		>
	</div>
</div>
