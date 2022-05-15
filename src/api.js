import axios from 'axios'
import { get } from "svelte/store";

// Config
import config from "./config"

// Store
import { Store } from './stores'

const api = axios.create({
	baseURL: "/api",
	timeout: 3000
})

// Apply state token
api.interceptors.request.use(
	async (config) => {
		// Optional auth
		// let token;
		//config.headers['Authorization'] = 'Bearer ' + token
		return config
	},
	error => {
		Promise.reject(error)
	});

export default api
