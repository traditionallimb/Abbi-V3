const { Client, Collection } = require('discord.js');
const config = require('../../config.json');
const util = require('./util.js');

module.exports = class traditionalclient extends Client {

	constructor(options = {}) {
		super({
			disableMentions: 'everyone'
		});
		this.validate(options);

		this.commands = new Collection();

		this.aliases = new Collection();

		// eslint-disable-next-line new-cap
		this.utils = new util(this);


		this.once('ready', () => {
			console.log(`logged in as ${this.user.username}`);
		});

		this.on('message', async (message) => {
			const mentionRegex = RegExp(`^<@!${this.user.id}>$`);
			const mentionRegexPrefix = RegExp(`^<@!${this.user.id}> `);

			if (!message.guild || message.author.bot) return;

			if (message.content.match(mentionRegex)) message.channel.send(`my prefix for ${message.guild.name} is \`${config.token}\`.`);

			const prefix = message.content.match(mentionRegexPrefix) ?
				message.content.match(mentionRegexPrefix)[0] : this.prefix;

			// eslint-disable-next-line no-unused-vars
			const [cmd, ...args] = message.content.slice(prefix.length).trim().split(/ +/g);

			const command = this.commands.get(cmd.toLowerCase()) || this.commands.get(this.aliases.get(cmd.toLowerCase()));
			if (command) {
				command.run(message, args);
			}
			const prompt = process.openStdin();
			prompt.addListener('data', (res) => {
				const xx = res.toString().trim().split(/ +/g);
				this.channels.get('783356184119607308').send(xx.join(' '));
			});
		});
	}

	validate(options) {
		if (typeof options !== 'object') throw new TypeError('options should be a type of object');

		if (!options.token) throw new Error('you must pass the token for the client.');
		this.token = options.token;

		if (!options.prefix) throw new Error('you must pass a prefix for the client');
		if (typeof options.prefix !== 'string') throw new TypeError('prefix should be a type of string');
		this.prefix = options.prefix;
	}

	async start(token = this.token) {
		this.utils.loadCommands();
		super.login(token);
	}

};
