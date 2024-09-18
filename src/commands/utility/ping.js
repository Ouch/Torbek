const { SlashCommandBuilder, InteractionCollector, Message } = require("discord.js");

// //? WORKING CODE HERE:
// module.exports = {
//  data: new SlashCommandBuilder()
//       .setName('ping')
//       .setDescription('Replies with Pong! Latency information is currently W.I.P.'),
//       async execute(interaction) {
//         await interaction.reply('Pong!');
//       },
// }


//? v3 Works well, plus includes latency information.
module.exports = {
  category: 'utility',
  data: new SlashCommandBuilder()
  .setName('ping')
  .setDescription('Replies with your current latency information.'),
  async execute(interaction) {
      await interaction.reply(`Your ping is ${Date.now() - interaction.createdAt}ms!`)
    }
  }


//! EXTREMELY EXPERIMENTAL CODE BELOW AND DOES NOT WORK

// //? Not working
// module.exports = {
//   data: new SlashCommandBuilder()
//   .setName('ping')
//   .setDescription('Replies with Pong, plus bot latency.'),
//   async execute(interaction) {
//     const ping = interaction.createdAt - interaction.createdTimestamp;
//     await interaction.reply(`Pong with latency of ${ping}ms!`);
//   },
// }

//? // Not currently working
// module.exports = {
//   data: new SlashCommandBuilder()
//     .setName('ping')
//     .setDescription('Replies with Pong plus the bot\'s latency and Discord API Latency'),
//     async execute(interaction) {
//       const ping = Message.createdTimestamp //! ADD MORE CODE HERE TO CALCULATE THE MESSAGE CREATED TIMESTAMP FROM THE RESULT TIME STAMP 
//       await interaction.reply()
//     }
    
// }

// //? v2 Not working still
// module.exports = {
//   data: new SlashCommandBuilder{
//   name: 'ping',
//   description: 'Replies with Pong, plus the bot\'s latency.',
//   callback: async (client, interaction) => { 
//     await interaction.deferReply();

//     const reply = await interaction.fetchReply();

//     const ping = reply.createdTimestmap - interaction.createdTimestmap;
  
//     interaction.editReply(
//       `Pong! Client ${ping}ms | Websocket ${client.ws.ping}ms`
//     );
//    },
//   },
// }

// //? v3 works great
// module.exports = {
//   data: new SlashCommandBuilder()
//   .setName('ping')
//   .setDescription('Replies with Pong, plus bot latency.'),
//   async execute(interaction) {
//       await interaction.reply(`Your ping is ${Date.now() - interaction.createdAt}ms!`)
//     }
//   }





