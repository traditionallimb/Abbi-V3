const command = require('./../structures/command.js');

module.exports = class extends command {

	constructor(...args) {
		super(...args, {
			aliases: ['pog', 'pogger', 'pogging']
		});
	}

	// eslint-disable-next-line no-unused-vars
	async run(message, args) {
		message.channel.send('Sending an email to Childline. Would you like me to stop?');
	}

};
