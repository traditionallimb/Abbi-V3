const { Client } = require('discord.js');
const config = require('../config.json');

module.exports = class traditionalclient extends Client {

	constructor(options = {}) {
		super({
			disableMentions: 'everyone'
		});
		this.validate(options);

		this.once('ready', () => {
			console.log(`Logged in as ${this.user.username}`);
		});

		this.on('message', async (message) => {
			const mentionRegex = RegExp(`^<@!${this.user.id}>$`);
			const mentionRegexPrefix = RegExp(`^<@!${this.user.id}> `);

			if (!message.guild || message.author.bot) return;

			if (message.content.match(mentionRegex)) message.channel.send(`My prefix for ${message.guild.name} is \`${config.token}\`.`);

			const prefix = message.content.match(mentionRegexPrefix) ?
				message.content.match(mentionRegexPrefix)[0] : this.prefix;

			// eslint-disable-next-line no-unused-vars
			const [cmd, ...args] = message.content.slice(prefix.length).trim().split(/ +/g);

			if (cmd.toLowerCase() === 'hello') {
				message.channel.send('Hai!');
			}

			if (cmd === 'POGCHAMP') {
				message.channel.send(':pog:');
			}
		});
	}

	validate(options) {
		if (typeof options !== 'object') throw new TypeError('Options should be a type of Object');

		if (!options.token) throw new Error('You must pass the token for the client.');
		this.token = options.token;

		if (!options.prefix) throw new Error('You must pass a prefix for the client');
		if (typeof options.prefix !== 'string') throw new TypeError('Prefix should be a type of string');
		this.prefix = options.prefix;
	}

	async start(token = this.token) {
		super.login(token);
	}

};
