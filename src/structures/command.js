module.exports = class command {

	constructor(client, name, options = {}) {
		this.client = client;
		this.name = options.name || name;
		this.aliases = options.aliases || [];
		this.description = options.description || 'no description provided';
		this.category = options.category || 'miscellaneous';
		this.usage = options.usage || 'no usage provided';
	}

	// eslint-disable-next-line no-unused-vars
	async run(message, args) {
		throw new Error(`command ${this.name} doesn't provide a run method`);
	}

};
