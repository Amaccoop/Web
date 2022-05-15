/* eslint-disable no-unreachable */

// Vendor
import axios from "axios";
import dotenv from "dotenv";
import express from "express";
import compression from "compression";
import bodyparser from "body-parser";
import postmark from "postmark";

// Models
import User from "./_models/index.js"

// get config vars
dotenv.config();

// Server & Middleware
const app = express()
app.use(compression())
app.use(bodyparser.json())
app.use(express.urlencoded({ extended: true }))

/*****************************
 * Public
 ****************************/

// Subscribe
app.post('/api/subscribe', async (req, res) => {
	res.setHeader('Content-Type', 'application/json');
	let result

	try {
		result = await User.User.create({
			email: req.body.email,
			online: new Date()
		}, { updateOnDuplicate: ["email", "online"] })

		// Handle Captcha

		// Send user welcome email
		client = new postmark.ServerClient(process.env.POSTMARK_TOKEN);
		await client.sendEmailWithTemplate({
			"From": "Andrew Cooper<andrew@andrewcooper.app>",
			"To": req.body.email,
			"TemplateId": 0000000,
			"TemplateModel": {
				"name": "",
				"product_name": "",
				"product_url": "https://andrewcooper.app",
				"action_url": "https://andrewcooper.app",
				"company_name": "",
				"company_address": ""
			}
		});


	} catch (error) {
		console.error(error)
		return res.status(500).send(error.message)
	}

	return res.status(200).send(result)
})

/*****************************
 * Core
 ****************************/

// e.g. Track appointments booked

export default app

