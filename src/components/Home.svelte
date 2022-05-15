<script>
	// Native
	import api from "../api";

	// Vendor
	import { onMount } from "svelte";

	// Components
	import Spinner from "./common/Spinner.svelte";

	// Icons
	import CheckIcon from "./Icons/CheckIcon.svelte";

	// Private
	let email;

	// State
	let _isApplying;

	onMount(async () => {});
</script>

<!-- Container -->
<div class="container">
	<!-- Header -->
	<div class="header">
		<div class="logo">
			<img alt="Andrew Cooper" src="/images/AndrewCooper_Logo.png" />
		</div>
		<h1 class="prose font-bold text-3xl mb-4">Andrew Cooper</h1>
	</div>

	<!-- Body -->
	<div class="body-container">
		<!-- Welcome -->
		<h2>Welcome!</h2>
		<p>
			If you would like to make an appointment, click "Schedule a call" below.
			You will be presented with my avilability. Please then select a time slot
			that works for you.
		</p>
		<div class="signature">
			<img alt="Signed, Andrew Cooper" src="/images/Signature.svg" />
		</div>

		<!-- Schedule a Call -->
		<div class="action-container">
			<button class="btn-action">
				<img
					class="calendar-icon"
					alt="Google Calendar"
					src="/images/Google_Calendar_Icon.svg"
				/>
				<div class="text">Schedule a Call</div>
			</button>
			<p class="notice">* A formal name is not required to connect.</p>
		</div>

		<!-- Sign-up for Newsletter -->
		<div class="signup-container">
			<h2>Sign-up for Emails</h2>

			<div class="signup-body">
				<input placeholder="name@email.com" type="text" />
				<button>
					<div class="text">Submit</div>
				</button>
			</div>
		</div>
	</div>
</div>

<style>
	.container {
		@apply flex flex-col items-center px-10;
	}

	.header {
		@apply flex flex-col mt-8 items-center;
	}

	.logo {
		@apply flex w-28 h-28 rounded-full;
	}

	.body-container {
		@apply flex flex-col text-left;
	}

	.signature {
		@apply flex mt-8 w-24;
	}

	.action-container {
		@apply flex flex-col mt-12 items-center;
	}

	.btn-action {
		@apply flex flex-row w-72  py-4 bg-blue-700 rounded-full items-center justify-center ring-4 ring-blue-700 ring-opacity-0;
	}

	.btn-action .calendar-icon {
		@apply flex flex-col -ml-3 mr-5 w-10;
	}

	.btn-action .text {
		font-family: "Roboto";
		@apply flex flex-col text-white text-xl font-semibold;
	}

	.btn-action:hover {
		@apply ring-opacity-50;
	}

	.signup-container {
		@apply flex flex-col my-20 justify-center items-center;
	}

	.signup-body {
		@apply flex flex-row items-center;
	}

	.signup-body input {
		@apply flex flex-col flex-grow w-72 h-16 px-5 rounded-l-full text-lg border-gray-200;
	}

	.signup-body button {
		@apply flex flex-col w-32 h-16 px-8 rounded-r-full bg-gray-600;
	}

	.signup-body button .text {
		@apply flex h-14 mt-0.5 text-white font-semibold items-center;
	}

	.signup-body button:hover {
		@apply bg-gray-900;
	}

	h2 {
		@apply flex mb-5 text-2xl;
	}

	p {
		@apply flex text-lg leading-9;
	}

	p.notice {
		@apply mt-3 text-lg opacity-30;
	}
</style>
