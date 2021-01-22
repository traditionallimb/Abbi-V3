const command = require('./../../structures/command.js');

module.exports = class extends command {

	constructor(...args) {
		super(...args, {
			aliases: ['pog', 'pogger', 'pogging']
		});
	}

	// eslint-disable-next-line no-unused-vars
	async run(message, args) {
		message.channel.send('<:hype:802138536701853726>');
	}

};
