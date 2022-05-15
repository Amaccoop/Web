<script>
	import { setContext } from "svelte";
	export let size = 28;
	export let inActive = undefined;

	// Private
	let color = "#B900C9";
	let strokeColor = "#1C1C1C";
	let stopColor = "#580077";
	let downScale;
	if (inActive) {
		strokeColor = "#111";
		color = "#440048";
		stopColor = "#111";
		downScale = "scale-75";
	}

	setContext("color", color);
	setContext("strokeColor", strokeColor);
	setContext("stopColor", stopColor);
</script>

<div class="w-{size} h-{size} scale-90 rounded-full {downScale} ">
	<slot />
</div>
