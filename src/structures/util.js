const path = require('path');
const { promisify } = require('util');
const glob = promisify(require('glob'));
const command = require('./command.js');

module.exports = class util {

	constructor(client) {
		this.client = client;
	}

	isClass(input) {
		return typeof input === 'function' &&
    typeof input.prototype === 'object' &&
    input.toString().substring(0, 5) === 'class';
	}

	get directory() {
		return `${path.dirname(require.main.filename)}${path.sep}`;
	}

	async loadCommands() {
		return glob(`${this.directory}commands/**/*.js`).then(commands => {
			for (const commandFile of commands) {
				delete require.cache[commandFile];
				const { name } = path.parse(commandFile);
				const File = require(commandFile);
				if (!this.isClass(File)) throw new TypeError(`command ${name} doesn't export a class.`);
				const Command = new File(this.client, name.toLowerCase());
				if (!(Command instanceof command)) throw new TypeError(`command ${name} doesn't belong in commands.`);
				this.client.commands.set(Command.name, Command);
				if (!Command.aliases.length) {
					for (const alias of Command.aliases) {
						this.client.aliases.set(alias, Command.name);
					}
				}
			}
		});
	}

};
