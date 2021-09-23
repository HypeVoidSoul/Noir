const { canModifyQueue } = require("../NOIR_SYSTEM/noir_env");
const { ʙᴏᴛꜰɪx, AUTOCLEANER } = require("../NOIR_SYSTEM/noir_env");
const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "skip",


  execute(message, args) {
    if (message.content.startsWith(ʙᴏᴛꜰɪx + "skip") && message.channel.name !== "🦋noir🎧player🦋") {
      const embedfactor = new MessageEmbed()
        .setColor(`0x1f8b4c`)
        .setAuthor(`Author•— HypeVoidSoul`)
        .setFooter(`**🦋=======  𝗡𝗢𝗜𝗥  ======= 🦋**`)
        .setTitle(`:sparkles: :butterfly:  **  𝗡𝗢𝗜𝗥  **  :butterfly: :sparkles:`)
        .setImage(`https://telegra.ph/file/3766d80c69f488d850173.jpg`)
        .setThumbnail(`https://telegra.ph/file/3766d80c69f488d850173.jpg`)
        .setDescription(`\n\n
**⚠️WARNING⚠️** 
**User:** ${message.author}
**🦋=======  𝗡𝗢𝗜𝗥  ======= 🦋**

•|  _Please use the channel **🦋noir🎧player🦋** for any ʏᴏᴜᴛᴜʙᴇ voice streaming_`);
      message.channel
        .send(embedfactor)
        .catch(console.error)
        .then((message) => {
          message.delete({
            timeout: `${AUTOCLEANER}`
          });
        });
      return;
    }
    if (message.content.startsWith(ʙᴏᴛꜰɪx + "skip") && message.channel.name === "🦋noir🎧player🦋") {
      const queue = message.client.queue.get(message.guild.id);
      if (!queue) {
        message.channel
          .send("**🦋=======  𝗡𝗢𝗜𝗥  ======= 🦋**\n\n⚜️Noir > There is nothing playing that I could skip for you.")
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: `${AUTOCLEANER}`
            });
          })
        return;
      }
      if (!canModifyQueue(message.member)) {
        message.channel.send("**🦋=======  𝗡𝗢𝗜𝗥  ======= 🦋**\n\n⚜️Noir > You need to join a voice channel first!")
        return;
      }
      queue.playing = true;
      queue.connection.dispatcher.end();
      queue.textChannel.send(`${message.author}\n\n**🦋=======  𝗡𝗢𝗜𝗥  ======= 🦋**\n\n⚜️Noir > Skipped the song`,)
        .catch(console.error)
        .then((message) => {
          message.delete({
            timeout: `${AUTOCLEANER}`
          });
        });
    }
  }
};