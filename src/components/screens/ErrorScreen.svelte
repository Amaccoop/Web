<script>
		import { onMount } from "svelte";

		export let message;

		onMount( () => {
			console.error(message)
		});
</script>

<div>
    <h1>500 Error</h1>
</div>
