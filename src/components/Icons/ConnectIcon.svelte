<script>
	import { getContext } from "svelte";

	const color = getContext("color");
	const strokeColor = getContext("strokeColor");
	const stopColor = getContext("stopColor");
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	class="flex w-full h-full"
	fill="none"
	viewBox="0 0 97 97"
>
	<circle
		cx="48.5"
		cy="48.5"
		r="46"
		fill="#000"
		stroke={strokeColor}
		stroke-width="5"
	/>
	<path
		fill="url(#a)"
		stroke="#000"
		d="M58.661 41.256v4.494h-20v-4.497a10.385 10.385 0 0 1 8.348-10.385l.402-.08V20.5h2.5v10.304l.4.081a10.437 10.437 0 0 1 8.35 10.37Z"
	/>
	<path
		fill="url(#b)"
		stroke="#000"
		d="m50.312 65.413-.4.081V75.5h-2.5V65.475l-.403-.08a10.385 10.385 0 0 1-8.348-10.385v-4.76h20v4.759a10.437 10.437 0 0 1-8.35 10.404Z"
	/>
	<defs>
		<radialGradient
			id="a"
			cx="0"
			cy="0"
			r="1"
			gradientTransform="matrix(-21.0029 0 0 -26.2498 59.162 33.125)"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color={color} />
			<stop offset="1" stop-color={stopColor} />
		</radialGradient>
		<radialGradient
			id="b"
			cx="0"
			cy="0"
			r="1"
			gradientTransform="matrix(-21.0035 0 0 -26.2498 59.163 62.875)"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color={color} />
			<stop offset="1" stop-color={stopColor} />
		</radialGradient>
	</defs>
</svg>
