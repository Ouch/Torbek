const { SlashCommandBuilder } = require("discord.js");


module.exports = {
  data: new SlashCommandBuilder()
        .setName('roadmap')
        .setDescription('Replies with a a link to the Github repository of Torbek.'),
    async execute(interaction) {
       interaction.reply(`Here\'s Torbeks repo! https://github.com/Ouch/Torbek`)
    }
  }


// ! edit and organize rather than leave incorrect messages