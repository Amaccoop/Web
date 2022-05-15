<script>
	import { fade } from "svelte/transition";

	export let type = undefined; // success, info, error
	export let title = undefined;
	export let message;
</script>

<!-- Container -->
<div class="notification-container">
	<div
		class:error={type === "error"}
		class:success={type === "success"}
		class="notification fill"
	>
		<div class="flex mr-1">
			<!-- Checkmark -->
			{#if type === "success"}
				<svg
					class="flex w-6 h-6"
					fill="none"
					stroke="lightgreen"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
					/></svg
				>
			{/if}

			<!-- Warn -->
			{#if type === "warn" || type === "error"}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="yellow"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
					/>
				</svg>
			{/if}

			<!-- Info -->
			{#if type === "info"}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="white"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			{/if}
		</div>
		{#if title && title !== ""}
			<div class="flex prose text-md font-semibold mr-2">
				{title}
			</div>
		{/if}
		<div class="flex prose text-md font-semibold text-opacity-90">
			{message}
		</div>
	</div>
</div>

<style>
	.notification-container {
		opacity: 1;
		animation: 0.3s in ease 1 forwards;
		@apply fixed flex mx-auto inset-x-0 place-items-center justify-center;
	}
	.notification {
		@apply flex pt-2.5 pb-2 pl-4 pr-5 bg-opacity-10 rounded-md shadow-sm drop-shadow-xl cursor-default;
	}

	.notification svg {
		@apply mr-2;
	}
	.error {
		@apply border-b-red-400;
	}

	.success {
		@apply border-b-blue-500;
	}

	@keyframes in {
		0% {
			bottom: -5rem;
			opacity: 0;
		}
		100% {
			bottom: 1.2rem;
			opacity: 1;
		}
	}
</style>
