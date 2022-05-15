export default function (sequelize, Sequalize) {
	return sequelize.define("User", {
		id: {
			type: Sequalize.UUID,
			primaryKey: true,
			allowNull: false,
		},

		// Native
		email: Sequalize.STRING,

		// Activity
		online: Sequalize.DATE,

		// Timestamps
		created: Sequalize.DATE,
		updated: Sequalize.DATE
	}, {
		timestamps: false
	});
}
