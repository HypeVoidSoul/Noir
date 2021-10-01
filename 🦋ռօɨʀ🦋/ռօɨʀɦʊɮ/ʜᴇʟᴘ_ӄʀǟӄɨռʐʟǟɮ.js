const { MessageEmbed } = require("../ӄʀǟӄɨռʐʟǟɮ/src");
const { ռօɨʀʄɨӼ, ռօɨʀքʊʀɢɛʀ } = require("../noirtem/noir_env");
// =============================================================================================================================
//
//
// GNU GENERAL PUBLIC LICENSE
// Version 3, 29 June 2007
// 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
//
//
// =============================================================================================================================
module.exports = {
  name: "help",
  // =============================================================================================================================
  // GNU GENERAL PUBLIC LICENSE
  // Version 3, 29 June 2007
  // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
  // =============================================================================================================================
  execute(message) {
    try {
      const NoirHelper = `
*📌•♪•♪𝐌𝐚𝐧𝐮𝐚𝐥-𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬♪•♪•*
• **${ռօɨʀʄɨӼ}filter** = Music filters when playing audio.
• **${ռօɨʀʄɨӼ}help** = Display this commands and descriptions.
• **${ռօɨʀʄɨӼ}noir** = Display the  license and a few more info.
• **${ռօɨʀʄɨӼ}np** = Show now playing music.
• **${ռօɨʀʄɨӼ}ping** = Check server ping of client.
• **${ռօɨʀʄɨӼ}play** = Plays audio from YouTube.
• **${ռօɨʀʄɨӼ}list** = Play a playlist from YouTube.
• **${ռօɨʀʄɨӼ}queue** = Show the music queue and now playing.
• **${ռօɨʀʄɨӼ}rm** = Remove music from the queue.
• **${ռօɨʀʄɨӼ}resume** = Resume currently playing music.
• **${ռօɨʀʄɨӼ}shuffle** = Shuffle music queue.
• **${ռօɨʀʄɨӼ}skipto** =Skip to the selected queue number.

*📌•♪•♪𝐏𝐥𝐚𝐲𝐞𝐫-𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬♪•♪•*
• **⏭** = Skip the currently playing music.
• **⏸** = Pause/Resume the currently playing music.
• **🔇** = Mute/Unmute the currently playing music.
• **🔁** = Toggle music loop.
• **⏺** = Stops the currently playing music queue.
• **🔊|🔉 ${ռօɨʀʄɨӼ}vol** = Change volume of currently playing music.`;
      // =============================================================================================================================
      // GNU GENERAL PUBLIC LICENSE
      // Version 3, 29 June 2007
      // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
      // =============================================================================================================================
      if (message.content.startsWith(ռօɨʀʄɨӼ + "help")) {
        message.react("✅");
        message.react("🍧");
        message.author.send(
          new MessageEmbed()
            .setColor("#6272a4")
            .setDescription(`**👍 Sent from <#${message.channel.id}>**`)
        );
        message.author
          .send(
            new MessageEmbed()
              .setDescription(`**User:** ${message.author}\n${NoirHelper}`)
              .setColor("#6272a4")
              .setAuthor(`𝐍𝐨𝐢𝐫💜by🔱KrakinzLab™️`)
              .setImage(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
              .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
              .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
          )
          .catch(console.error);
        message.channel
          .send(
            new MessageEmbed()
              .setDescription(`**User:** ${message.author}\n${NoirHelper}`)
              .setColor("#6272a4")
              .setAuthor(`𝐍𝐨𝐢𝐫💜by🔱KrakinzLab™️`)
              .setImage(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
              .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
              .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
          )
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: `${ռօɨʀքʊʀɢɛʀ}`,
            });
          });
        return;
      }
      // =============================================================================================================================
      // GNU GENERAL PUBLIC LICENSE
      // Version 3, 29 June 2007
      // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
      // =============================================================================================================================
    } catch (ErrorNoir) {
      message.channel.send(
        new MessageEmbed()
          .setColor("#DB4434")
          .setTitle("🔺ERROR CAUGHT🔻")
          .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
          .setThumbnail("https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg")
          .setDescription(`
**Noir** has encountered an error.

Please report to either 
🔰**In Discord channel** = https://discord.gg/ucPpXWFK
or
🔰**In telegram group** = https://t.me/Krakns


**🔺Error Caught🔻**
*${ErrorNoir}*`)
      );
      console.error(ErrorNoir);
    }
  },
};
