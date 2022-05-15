<script>
	// Core
	import api from "../api";

	// Vendor
	import { onMount } from "svelte";

	// Components
	import Home from "../components/Home.svelte";

	// Private

	onMount(async () => {});
</script>

<div class="home-container">
	<Home />
</div>

<style>
	.home-container {
		@apply flex flex-col w-full max-w-xl px-10 justify-center items-center align-middle text-center overflow-x-hidden;
	}
</style>
