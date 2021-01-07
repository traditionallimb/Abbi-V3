const { Client } = require('discord.js');

module.exports = class traditionalclient extends Client {

  constructor(options = {}) {
    super({
      disableMentions: 'everyone'
    });
    this.validate(options);

    this.once('ready', () => {
      console.log(`Logged in as ${this.user.username}`);
    });

    this.on('message', async (message))
  }
}