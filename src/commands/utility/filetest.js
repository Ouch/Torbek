const { SlashCommandBuilder, Message, User, userMention } = require('discord.js');
const fs = require('node:fs')

module.exports = {
    category: 'utility',
    data: new SlashCommandBuilder()
    .setName('write-file')
    .setDescription('Creates a file on the origin system for testing future deployment of files.')
    .addStringOption(option =>
        option.setName('user-input')
            .setDescription('This currently just replies with whatever you put in.')
            .setRequired(true)),
    async execute(interaction) {
    const infoInput = interaction.options.getString('user-input', true);
        return interaction.reply(`Your input was: \n \`\`\`log\n${infoInput} \`\`\` \n Attempting to create file with new UUID with the following content:\n \`\`\`log\n ${infoInput} \`\`\``)

      }
    }