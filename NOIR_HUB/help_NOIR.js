const { MessageEmbed } = require("discord.js");

const NOIRHelpQ = `
**• /help**
Display all commands and descriptions.
**• /NOIR**
Display license and some documentation.
**• /loop**  
== Toggle music loop.
**• /lyrics**
== Get lyrics for the currently playing song.
**• /nowplaying**
== Show now playing song.
**• /pause**
== Pause the currently playing music.
**• /ping**
== Check server ping of client.
**• /play**
== Plays audio from YouTube.
**• /list**
== Play a playlist from YouTube.
**• /queue**
== Show the music queue and now playing.
**• /remove**
== Remove song from the queue.
**• /resume**
== Resume currently playing music.
**• /shuffle**
== Shuffle music queue.
**• /next**
== Skip the currently playing song.
**• /skipto**
== Skip-to the selected queue number.
**• /stop**
== Stops the music.
**• /vol**
== Change volume of currently playing music.`;


module.exports = {
  name: "help",

  execute(message, args) {
    try { message.delete(); }
    catch (error) {
      console.error(error);
      pass;
    }

    let helpEmbed = new MessageEmbed()
      .setTitle("—••÷[🦋NOIR Discord Music Player🦋]÷•—")
      .setDescription(NOIRHelpQ)
      .setAuthor("Author•— HypeVoidSoul")
      .setFooter("—••÷=======[ 🦋NOIR🦋 ]=======÷•—")
      .setThumbnail("https://telegra.ph/file/3766d80c69f488d850173.jpg")
      .setImage("https://telegra.ph/file/3766d80c69f488d850173.jpg")
      .setColor("0x1f8b4c");
    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
};