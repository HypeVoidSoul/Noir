try {
  const {
    canModifyQueue,
    ʙᴏᴛꜰɪx,
    ɴᴏɪʀᴄʟᴇᴀɴᴇʀ,
  } = require("../noirtem/noir_env");
  const { MessageEmbed } = require("../ᴋʟᴀᴡᴠᴏɪᴅ");
  if (message.author.bot) {
    return;
  }
  // =============================================================================================================================
  // GNU GENERAL PUBLIC LICENSE
  // Version 3, 29 June 2007
  // Copyright (C) 2007 Free Software Foundation
  // Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies
  // of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
  // 🤍Noir
  // Discord Music YouTube player
  // has been licensed under GNU General Public License
  // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀
  // =============================================================================================================================
  module.exports = {
    name: "skip",
    cooldown: 3,
    // ==================================================================
    // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
    // ==================================================================
    execute(message) {
      if (
        message.content.startsWith(ʙᴏᴛꜰɪx + "skip") &&
        message.channel.name !== "🤍noir"
      ) {
        message.react("❌");
        message.react("🔥");
        const embedfactor = new MessageEmbed()
          .setColor("#d698bc")
          .setTitle("⚠️Warning⚠️")
          .setAuthor(`•> 🤍Noir by HypeVoidSoul`)
          .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
          .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄 𝙲𝚘𝚙𝚢𝚛𝚒𝚐𝚑𝚝(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋")
          .setDescription(
            `
**User:** ${message.author}
=========:radio_button:=========

**Channel:** \`🤍Noir\`
*Please use 👆🏻 channel for any* **ɴᴏɪʀ** *commands.*`
          );
        message.channel
          .send(embedfactor)
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
            });
          });
        return;
      }
      // ==================================================================
      // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
      // ==================================================================
      if (
        message.content.startsWith(ʙᴏᴛꜰɪx + "skip") &&
        message.channel.name === "🤍noir"
      ) {
        const queue = message.client.queue.get(message.guild.id);
        if (!queue) {
          const embedshp1 = new MessageEmbed()
            .setColor("#d698bc")
            .setTitle("⚠️Warning⚠️")
            .setAuthor(`•> 🤍Noir by HypeVoidSoul`)
            .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
            .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄 𝙲𝚘𝚙𝚢𝚛𝚒𝚐𝚑𝚝(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋")
            .setDescription(
              `
**User:** ${message.author}
=========:radio_button:=========

There is nothing playing that I could skip for you.`
            );
          message.react("❌");
          message.react("🔥");
          message.channel
            .send(embedshp1)
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
              });
            });
          return;
        }
        // ==================================================================
        // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
        // ==================================================================
        if (!canModifyQueue(message.member)) {
          const embedshp2 = new MessageEmbed()
            .setColor("#d698bc")
            .setTitle("⚠️Warning⚠️")
            .setAuthor(`•> 🤍Noir by HypeVoidSoul`)
            .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
            .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄 𝙲𝚘𝚙𝚢𝚛𝚒𝚐𝚑𝚝(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋")
            .setDescription(
              `
**User:** ${message.author}
=========:radio_button:=========

*You need to* **join** *a voice channel first!*`
            );
          message.react("❌");
          message.react("🔥");
          message.channel
            .send(embedshp2)
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
              });
            });
          return;
        }
        // ==================================================================
        // ================>  🎶Noir🍀PLΛYΣЯ by HypeVoidSoul <================
        // ==================================================================
        queue.playing = true;
        queue.connection.dispatcher.end();
        message.react("✅");
        message.react("🍧");
        queue.textChannel
          .send(
            new MessageEmbed()
              .setColor("#4b73c1")
              .setAuthor(`•> 🤍Noir by HypeVoidSoul`)
              .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
              .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄 𝙲𝚘𝚙𝚢𝚛𝚒𝚐𝚑𝚝(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋")
              .setDescription(`**User:** ${message.author}
=========:radio_button:=========

*Skipped the song*`)
          )
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
            });
          });
      }
    },
  };
} catch (ErrorNoir) {
  const ErrorInNoir = new MessageEmbed()
    .setColor("#DB4434")
    .setTitle("🔺ERROR CAUGHT🔻")
    .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: 𝙶𝙽𝚄 𝙲𝚘𝚙𝚢𝚛𝚒𝚐𝚑𝚝(𝙲)𝟸𝟶𝟸𝟷 𝙷𝚢𝚙𝚎𝚅𝚘𝚒𝚍𝙻𝚊𝚋")
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