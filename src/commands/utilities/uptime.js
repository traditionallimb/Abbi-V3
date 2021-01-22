const command = require('../../structures/command');
const ms = require('ms');

module.exports = class extends command {

	async run(message) {
		message.channel.send(`my uptime is \`${ms(this.client.uptime, { long: true })}\``);
	}

};
