const { SlashCommandBuilder, Message, User, userMention } = require('discord.js');


// //? Working code
module.exports = {
	category: 'utility',
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Provides information about the user.'),
	async execute(interaction) {
		// interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild
		await interaction.reply(`This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`);
	},
};

// //! Experimental code below
// module.exports = {
// 	category: 'utility',
// 	data: new SlashCommandBuilder()
// 		.setName('user')
// 		.setDescription('Provides information about the user.')
// 		.addStringOption(option =>
// 			option.setName('target')
// 				.setDescription('The user you\'d like information about.')
// 				.setRequired(true)),
// 	async execute(interaction) {
// 		// interaction.user is the object representing the User who ran the command
// 		// interaction.member is the GuildMember object, which represents the user in the specific guild
// 		await interaction.reply(`${Message.mentions}, who joined on ${interaction.member.joinedAt}  ${Message.userMention}.`);
// 	},
// };