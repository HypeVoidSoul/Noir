try {
  const { MessageEmbed } = require("../ᴋʟᴀᴡᴠᴏɪᴅ/src");
  const { ʙᴏᴛꜰɪx, ɴᴏɪʀᴄʟᴇᴀɴᴇʀ } = require("../noirtem/noir_env");
  // =============================================================================================================================
  // GNU GENERAL PUBLIC LICENSE
  // Version 3, 29 June 2007
  // Copyright (C) 2007 Free Software Foundation
  // Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies
  // of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
  // 💜Noir
  // Discord Music YouTube player
  // has been licensed under GNU General Public License
  // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
  // =============================================================================================================================
  module.exports = {
    name: "help",
    // =============================================================================================================================
    // GNU GENERAL PUBLIC LICENSE
    // Version 3, 29 June 2007
    // Copyright (C) 2007 Free Software Foundation
    // Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies
    // of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
    // 💜Noir
    // Discord Music YouTube player
    // has been licensed under GNU General Public License
    // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
    // =============================================================================================================================
    execute(message) {
      if (
        message.content.startsWith(ʙᴏᴛꜰɪx + "help") &&
        message.channel.name !== "💜noir"
      ) {
        let HELPEMBED = new MessageEmbed()
          .setDescription(
            `**User:** ${message.author}
=========:radio_button:=========

📌•♪•♪𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀•♪•♪
• **${ʙᴏᴛꜰɪx}filter** = Music filters when playing audio.
• **${ʙᴏᴛꜰɪx}help** = Display all commands and descriptions.
• **${ʙᴏᴛꜰɪx}noir** = Display the  license and a few more info.
• **${ʙᴏᴛꜰɪx}loop** = Toggle music loop.
• **${ʙᴏᴛꜰɪx}np** = Show now playing song.
• **${ʙᴏᴛꜰɪx}pause** = Pause the currently playing music.
• **${ʙᴏᴛꜰɪx}ping** = Check server ping of client.
• **${ʙᴏᴛꜰɪx}play** = Plays audio from YouTube.
• **${ʙᴏᴛꜰɪx}list** = Play a playlist from YouTube.
• **${ʙᴏᴛꜰɪx}queue** = Show the music queue and now playing.
• **${ʙᴏᴛꜰɪx}remove** = Remove song from the queue.
• **${ʙᴏᴛꜰɪx}resume** = Resume currently playing music.
• **${ʙᴏᴛꜰɪx}shuffle** = Shuffle music queue.
• **${ʙᴏᴛꜰɪx}next** = Skip the currently playing song.
• **${ʙᴏᴛꜰɪx}skip** = Skip to the selected queue number.
• **${ʙᴏᴛꜰɪx}stop** = Stops the music.
• **${ʙᴏᴛꜰɪx}vol** = Change volume of currently playing music.
`
          )
          .setColor("#6272a4")
          .setAuthor(`💜Nօɨʀ-ɮʏ-ӄʀǟӄɨռʐ💜`)
          .setImage(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
          .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
          .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 ӄʀǟӄɨռʐ & ӄʀǟӄɨռʐʟǟɮ");

        message.react("✅");
        message.react("🍧");

        message.channel.send(HELPEMBED).catch(console.error);
        return;
      }
      if (
        message.content.startsWith(ʙᴏᴛꜰɪx + "help") &&
        message.channel.name === "💜noir"
      ) {
        let HELPEMBED = new MessageEmbed()
          .setDescription(
            `**User:** ${message.author}
=========:radio_button:=========

📌•♪•♪𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀•♪•♪
• **${ʙᴏᴛꜰɪx}filter** = Music filters when playing audio.
• **${ʙᴏᴛꜰɪx}help** = Display all commands and descriptions.
• **${ʙᴏᴛꜰɪx}noir** = Display the  license and a few more info.
• **${ʙᴏᴛꜰɪx}loop** = Toggle music loop.
• **${ʙᴏᴛꜰɪx}np** = Show now playing song.
• **${ʙᴏᴛꜰɪx}pause** = Pause the currently playing music.
• **${ʙᴏᴛꜰɪx}ping** = Check server ping of client.
• **${ʙᴏᴛꜰɪx}play** = Plays audio from YouTube.
• **${ʙᴏᴛꜰɪx}list** = Play a playlist from YouTube.
• **${ʙᴏᴛꜰɪx}queue** = Show the music Queue and now playing.
• **${ʙᴏᴛꜰɪx}remove** = Remove song from the queue.
• **${ʙᴏᴛꜰɪx}resume** = Resume currently playing music.
• **${ʙᴏᴛꜰɪx}shuffle** = Shuffle music queue.
• **${ʙᴏᴛꜰɪx}next** = Skip the currently playing song.
• **${ʙᴏᴛꜰɪx}skip** = Skip to the selected queue number.
• **${ʙᴏᴛꜰɪx}stop** = Stops the music.
• **${ʙᴏᴛꜰɪx}vol** = Change volume of currently playing music.
`
          )
          .setColor("#6272a4")
          .setAuthor(`💜Nօɨʀ-ɮʏ-ӄʀǟӄɨռʐ💜`)
          .setImage(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
          .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
          .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 ӄʀǟӄɨռʐ & ӄʀǟӄɨռʐʟǟɮ");

        message.react("✅");
        message.react("🍧");
        message.author.send(
          new MessageEmbed()
            .setColor("#6272a4")
            .setDescription(`**👍 Sent from <#${message.channel.id}>**`)
        );

        message.author.send(HELPEMBED).catch(console.error);
        message.channel
          .send(
            new MessageEmbed()
              .setColor("#6272a4")
              .setAuthor(`💜Nօɨʀ-ɮʏ-ӄʀǟӄɨռʐ💜`)
              .setImage(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
              .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
              .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 ӄʀǟӄɨռʐ & ӄʀǟӄɨռʐʟǟɮ")
              .setDescription(`**👍 ${message.author} 
=========:radio_button:=========

Check your \`direct messages\` 
for a list of *Noir's* Commands!**
`)
          )
          .then((message) => {
            message.delete({
              timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
            });
          });
        return;
      }
    },
  };
} catch (ErrorNoir) {
  const ErrorInNoir = new MessageEmbed()
    .setColor("#DB4434")
    .setTitle("🔺ERROR CAUGHT🔻")
    .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 ӄʀǟӄɨռʐ & ӄʀǟӄɨռʐʟǟɮ")
    .setThumbnail("https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg")
    .setDescription(`
**Noir** has encountered an error.

Please either report to **https://discord.gg/ucPpXWFK**  in discord channel
or
Report to **@hypevoids** in telegram group


**🔺Error Caught🔻**
*${ErrorNoir}*`);
  message.channel.send(ErrorInNoir);
  console.error(ErrorNoir);
}
