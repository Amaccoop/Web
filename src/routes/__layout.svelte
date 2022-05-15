<script>
	// Core CSS
	import "../app.css";

	import { setContext, onMount } from "svelte";
	import { fade } from "svelte/transition";

	// Components
	import Notification from "../components/Notification.svelte";
	import Footer from "../components/Footer.svelte";
	//import LightSwitch from "../components/LightSwitch.svelte";

	// Stores
	import { Store } from "../stores";

	// Store Subscriptions
	$: notifications = Store.Notifications ? Store.Notifications : null;
	let page_loading = true;

	// Pass Store Context

	// Private
	const _key_theme = "theme";
	const _dark_preference = "(prefers-color-scheme: dark)";

	const _themes = {
		dark: "dark",
		light: "light",
	};

	const prefersDarkThemes = () => window.matchMedia(_dark_preference).matches;

	const applyTheme = () => {
		const preferredTheme = prefersDarkThemes() ? _themes.dark : _themes.light;

		const currentTheme = localStorage.getItem(_key_theme) ?? preferredTheme;

		if (currentTheme === _themes.dark) {
			document.documentElement.classList.remove(_themes.light);
			document.documentElement.classList.add(_themes.dark);
		} else {
			document.documentElement.classList.remove(_themes.dark);
			document.documentElement.classList.add(_themes.light);
		}
	};

	const toggleTheme = () => {
		const stored = localStorage.getItem(_key_theme);

		if (stored) {
			// clear storage
			localStorage.removeItem(_key_theme);
		} else {
			// store opposite of preference
			localStorage.setItem(
				_key_theme,
				prefersDarkThemes() ? _themes.light : _themes.dark
			);
		}

		applyTheme();
	};

	onMount(() => {
		// Theme
		// Initial Light
		localStorage.setItem(_key_theme, "light");

		applyTheme();
		window.matchMedia(_dark_preference).addEventListener("change", applyTheme);

		// Start fresh
		// localStorage.clear();

		// Error Handling
		window.addEventListener("unhandledrejection", (event) => {
			console.log("onunhandledrejection");
			//console.log("onunhandledrejection => clearing local storage:", event);
			//localStorage.clear();
		});

		page_loading = false;
	});
</script>

<!-- Notifications -->
{#if $notifications}
	<Notification
		message={$notifications.message}
		title={$notifications.title}
		type={$notifications.type}
	/>
{/if}

{#if !page_loading}
	<div in:fade={{ delay: 200, duration: 300 }} class="main">
		<div class="fixed top-5 right-5 w-18 h-18 hidden">
			<!--<LightSwitch />-->
		</div>
		<main
			class="flex flex-col w-full h-screen items-center bg-[url('/images/BgBlueFade.svg')] bg-no-repeat"
		>
			<slot />
			<Footer />
		</main>
	</div>
{/if}

<style global>
	html {
		@apply bg-white;
	}
	* {
		@apply transition-all duration-300;
	}

	.dark {
		@apply bg-black;
	}

	.dark * {
		@apply text-white border-white;
	}

	.dark .fill {
		@apply bg-white bg-opacity-0;
	}

	.dark .stroke {
		@apply stroke-white;
	}

	.light {
		@apply bg-white;
	}

	.light * {
		@apply text-black border-gray-300;
	}

	.light .fill {
		@apply bg-black bg-opacity-0;
	}

	.light .stroke {
		@apply stroke-black;
	}

	.fade {
		@apply flex top-0 w-full h-32 bg-blue-100 bg-gradient-to-b from-blue-100 to-white;
	}

	.main {
		@apply flex flex-col w-full h-screen z-0;
	}
</style>
