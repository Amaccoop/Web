// Vendor
import { browser } from '$app/env';
import { writable } from 'svelte/store'

const name = "rq_user";
const defaultValue = null;

const getInitialValue = () => {
	let result;
	if (browser) {
		result = window.localStorage.getItem(name)
		result = result && JSON.parse(result)
		if (!result) { result = defaultValue }
	}
	return result
}

const initialValue = getInitialValue();

const store = writable(initialValue);
store.subscribe((value) => {
	if (browser) {
		value = value ? value : defaultValue;
		if (value) {
			value = JSON.stringify(value) // Stringify
		}
		window.localStorage.setItem(name, value);
	}
});

export default store
