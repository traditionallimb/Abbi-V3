const command = require('./../structures/command.js');

module.exports = class extends command {

	constructor(...args) {
		super(...args, {
			aliases: ['hallo', 'hai', 'hi']
		});
	}

	// eslint-disable-next-line no-unused-vars
	async run(message, args) {
		message.channel.send('Hai!');
	}

};
