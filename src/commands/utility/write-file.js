const { SlashCommandBuilder, Message, User, userMention } = require('discord.js');
const { v4: uuidv4 } = require('uuid');
const fs = require('node:fs')

module.exports = {
    category: 'utility',
    data: new SlashCommandBuilder()
    .setName('write-file')
    .setDescription('Creates a file on the origin system for testing future deployment of files.')
    .addStringOption(option =>
        option.setName('user-input')
            .setDescription('Enter info to write to file')
            .setRequired(true)),
    async execute(interaction) {
    const infoInput = interaction.options.getString('user-input', true);
    const content = infoInput
    const UUID4 = uuidv4();
    const uv4Name = UUID4
        
     await interaction.reply(`Your input was: \n \`\`\`log\n${infoInput} \`\`\` \n Attempting to create file with the following content:\n \`\`\`log\n ${infoInput} \`\`\` \n\n *UUID: ${uv4Name}*`);
        fs.writeFile(`./commands/write-file-db/${uv4Name}.txt`, content, err => {
            if (err) {
                console.error(err) 
                } else {
                }
            }
        )
      }
    }


    // const fs = require('node:fs');

    // const content = 'Some content!';
    
    // fs.writeFile('/Users/joe/test.txt', content, err => {
    //   if (err) {
    //     console.error(err);
    //   } else {
    //     // file written successfully
    //   }
    // });