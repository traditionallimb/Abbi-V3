const { Client } = require('discord.js');
const ENV = require('.env');

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

      if(!message.guild || message.author.bot) return;

      if(message.content.match(mentionRegex)) message.channel.send(`My prefix for ${message.guild.name} is \`${ENV.PREFIX}\`.`);

      const prefix
    })
  }
}