<script>
	import { getContext } from "svelte";

	const color = getContext("color");
	const strokeColor = getContext("strokeColor");
	const stopColor = getContext("stopColor");
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width="97"
	height="97"
	viewBox="0 0 97 97"
	fill="none"
>
	<circle
		cx="48.5"
		cy="48.5"
		r="46"
		fill="black"
		stroke={strokeColor}
		stroke-width="5"
	/>
	<path
		d="M65.2279 32.2753C66.0919 31.4483 67.2417 30.9911 68.4346 31.0001C69.6276 31.0092 70.7703 31.4839 71.6218 32.3239C72.4733 33.164 72.9669 34.3038 72.9984 35.5027C73.0299 36.7017 72.5969 37.8661 71.7908 38.7503L47.3178 69.5218C46.897 69.9775 46.3891 70.3432 45.8245 70.5971C45.2599 70.8509 44.6502 70.9877 44.0318 70.9992C43.4134 71.0107 42.7991 70.8967 42.2255 70.6641C41.6519 70.4314 41.1309 70.0849 40.6936 69.6452L24.4641 53.3282C24.0122 52.9048 23.6497 52.3942 23.3982 51.8269C23.1468 51.2595 23.0116 50.6471 23.0007 50.0261C22.9898 49.4051 23.1034 48.7883 23.3348 48.2124C23.5662 47.6365 23.9105 47.1133 24.3474 46.6742C24.7842 46.235 25.3045 45.8888 25.8773 45.6561C26.4501 45.4235 27.0637 45.3093 27.6813 45.3203C28.299 45.3312 28.9082 45.4671 29.4724 45.7199C30.0367 45.9727 30.5446 46.3372 30.9657 46.7916L43.8094 59.6984L65.1113 32.4109C65.1497 32.3635 65.1906 32.3182 65.234 32.2753H65.2279Z"
		fill="url(#paint0_radial_137_347)"
	/>
	<defs>
		<radialGradient
			id="paint0_radial_137_347"
			cx="0"
			cy="0"
			r="1"
			gradientUnits="userSpaceOnUse"
			gradientTransform="translate(48 31) rotate(90) scale(40 50)"
		>
			<stop stop-color={color} />
			<stop offset="1" stop-color={stopColor} />
		</radialGradient>
	</defs>
</svg>
