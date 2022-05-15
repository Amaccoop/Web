
// Vendor
import mysql2 from "mysql2"
import dotenv from "dotenv"
import Sequelize from "sequelize"

// Models
import User from "./User.js"

// Connection
var _connectionSettings = {
	host: process.env.DB_HOST,
	ssl: true,
	username: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_DATABASE,
	dialect: process.env.DB_DIALECT,
	logging: false,
	dialectOptions: {
		ssl: {
			rejectUnauthorized: true,
		}
	},
	timestamps: false,
	omitNull: true,
	pool: {
		max: parseInt(process.env.DB_POOL_MAX),
		min: parseInt(process.env.DB_POOL_MIN) || 0,
		acquire: process.env.DB_POOL_AQUIRE,
		idle: process.env.DB_POOL_IDLE
	}
}

// Logging config
if (process.env.DB_LOGGING === false) {
	_connectionSettings.logging = false;
}

// Connection
var sequelize = new Sequelize(null, null, null, _connectionSettings);
var db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default {
	sequelize,
	User: User(sequelize, Sequelize.DataTypes)
}
