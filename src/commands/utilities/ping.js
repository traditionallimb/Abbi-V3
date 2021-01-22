const command = require('../../structures/command');

module.exports = class extends command {

	constructor(...args) {
		super(...args, {
			aliases: ['pong']
		});
	}

	async run(message) {
		const msg = await message.channel.send('Pinging...');

		const latency = msg.createdTimestamp - message.createdTimestamp;
		const choices = ['Is this really my ping?', 'Is this okay? I can\'t look!', 'I hope it isn\'t bad!'];
		const response = choices[Math.floor(Math.random() * choices.length)];

		msg.edit(`${response} - bot latency: \`${latency}ms\`, api latency: \`${Math.round(this.client.we.ping)}ms\``);
	}

};
