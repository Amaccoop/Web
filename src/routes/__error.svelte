<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				message: error.message,
				status, // same as status: status
			},
		};
	}
</script>

<script>
	import ErrorScreen from "../components/screens/ErrorScreen.svelte"; // your own Error screen component
	import NotFoundScreen from "../components/screens/NotFoundScreen.svelte"; // your own 404 screen component

	export let message;
	export let status;
</script>

<div class="flex flex-col justify-center items-center mt-15">
	{#if status == 404}
		<!-- Used '==' instead of '===' to match string/number status code (just to be sure) -->
		<NotFoundScreen />
	{:else}
		<ErrorScreen {message} />
	{/if}
</div>
