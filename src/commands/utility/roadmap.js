const { SlashCommandBuilder } = require("discord.js");


module.exports = {
  data: new SlashCommandBuilder()
        .setName('roadmap')
        .setDescription('Replies with a link or message of the To-Do list for Torbek.'),
    async execute(interaction) {
       interaction.reply(`Here\'s Torbeks project page! I\'ll have a link to his GitHub repository soon as well! https://github.com/Ouch/Torbek`)
    }
  }



  //! Currently not replying. Must be fixed in the future.