const {
  MessageEmbed
} = require("../ӄʀǟӄɨռʐʟǟɮ/src");
const {
  AքʀɨʟʄɨӼ,
  Aքʀɨʟքʊʀɢɛʀ
} = require("../Aքʀɨʟռɛʋ/ʟᴏᴀᴅᴇʀ");
module.exports = {
  name: "queue",
  cooldown: 3,
  async execute(message) {
    try {
      if (message.content.startsWith(AքʀɨʟʄɨӼ + "queue") && message.channel.name !== "ᴀᴘʀɪʟ💖ᴍᴜꜱɪᴄ") {
        message.react("❌");
        message.react("🔥");
        message.channel
          .send(
            new MessageEmbed()
            .setColor("#FF5F15")
            .setTitle("April❣️Music by🔱KrakinzLab™️")
            .setAuthor(`😲 Warning! ⚠️`)
            .setURL("https://github.com/Krakinz?tab=repositories")
            .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
            .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2021 ᴋʀᴀᴋɪɴᴢ & ᴋʀᴀᴋɪɴᴢʟᴀʙ")
            .setDescription(`**Ú§êr >** ${message.author}

**Category:** \`🔱Krakinz\`
**Channel:** \`Aքʀɨʟ❣️ʍʊֆɨƈ\`
⚠️Please use 👆🏻 for any **ᴀᴘʀɪʟ** commands.`)
          )
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
            });
          });
        return;
      }
      if (message.content.startsWith(AքʀɨʟʄɨӼ + "queue") && message.channel.name === "ᴀᴘʀɪʟ💖ᴍᴜꜱɪᴄ") {
        const permissions = message.channel.permissionsFor(message.client.user);
        if (!permissions.has([`MANAGE_MESSAGES`, `ADD_REACTIONS`])) {
          message.react("❌");
          message.react("🔥");
          message.channel
            .send(
              new MessageEmbed()
              .setColor("#FF5F15")
              .setTitle("April❣️Music by🔱KrakinzLab™️")
              .setAuthor(`😲 Warning! ⚠️`)
              .setURL("https://github.com/Krakinz?tab=repositories")
              .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
              .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2021 ᴋʀᴀᴋɪɴᴢ & ᴋʀᴀᴋɪɴᴢʟᴀʙ")
              .setDescription(`**Ú§êr >** ${message.author}

Missing permission to manage messages or add reactions`)
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
              });
            });
          return;
        }
        const queue = message.client.queue.get(message.guild.id);
        if (!queue) {
          message.react("❌");
          message.react("🔥");
          message.channel
            .send(
              new MessageEmbed()
              .setColor("#FF5F15")
              .setTitle("April❣️Music by🔱KrakinzLab™️")
              .setAuthor(`😲 Warning! ⚠️`)
              .setURL("https://github.com/Krakinz?tab=repositories")
              .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
              .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2021 ᴋʀᴀᴋɪɴᴢ & ᴋʀᴀᴋɪɴᴢʟᴀʙ")
              .setDescription(`**Ú§êr >** ${message.author}

⏺ Nothing playing in this server`)
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
              });
            });
          return;
        }
        let currentPage = 0;
        message.react("✅");
        message.react("❣️");
        const embeds = generateQueueEmbed(message, queue.songs);
        const queueEmbed = await message.channel.send(
          `**🏷Page Num:** - ${currentPage + 1}/${embeds.length}`,
          embeds[currentPage]
        );
        try {
          await queueEmbed.react(`⬅️`);
          await queueEmbed.react(`⏺`);
          await queueEmbed.react(`➡️`);
        } catch (error) {
          console.error(error);
          message.channel.send(error.message).catch(console.error);
        }
        const filter = (reaction, user) => [`⬅️`, `⏺`, `➡️`].includes(reaction.emoji.name) &&
          message.author.id === user.id;
        const collector = queueEmbed.createReactionCollector(filter, {
          time: 60000,
        });
        collector.on(`collect`, async (reaction, user) => {
          try {
            if (reaction.emoji.name === `➡️`) {
              if (currentPage < embeds.length - 1) {
                currentPage++;
                queueEmbed.edit("**🏷Page Num:** - ", {
                    page: currentPage + 1,
                    length: embeds.length,
                  }),
                  embeds[currentPage];
              }
            } else if (reaction.emoji.name === `⬅️`) {
              if (currentPage !== 0) {
                --currentPage;
                queueEmbed.edit("**🏷Page Num:** - ", {
                    page: currentPage + 1,
                    length: embeds.length,
                  }),
                  embeds[currentPage];
              }
            } else {
              collector.stop();
              reaction.message.reactions.removeAll();
            }
            await reaction.users.remove(message.author.id);
          } catch (error) {
            console.error(error);
            return message.channel.send(error.message).catch(console.error);
          }
        });
      }

      function generateQueueEmbed(message, queue) {
        let embeds = [];
        let k = 10;
        for (let i = 0; i < queue.length; i += 10) {
          const current = queue.slice(i, k);
          let j = i;
          k += 10;
          const info = current
            .map((track) => `${++j} - [${track.title}](${track.url})`)
            .join(`\n`);
          const embed = new MessageEmbed()
            .setTitle("April❣️Music by🔱KrakinzLab™️")
            .setThumbnail("https://i.postimg.cc/5tgjvj1y/A.png")
            .setColor("#ff0000")
            .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2021 ᴋʀᴀᴋɪɴᴢ & ᴋʀᴀᴋɪɴᴢʟᴀʙ")
            .setDescription(
              `**Aքʀɨʟ❣️ʍʊֆɨƈ**\n\n♥️**Current Song** -_[${queue[0].title}]_\n\n${info}`
            );
          embeds.push(embed);
        }
        return embeds;
      }
    } catch (ErrorApril) {
      message.channel.send(
        new MessageEmbed()
        .setColor("#DB4434")
        .setAuthor("Error🔺Caught")
        .setTitle("April❣️Music by🔱KrakinzLab™️")
        .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2021 ᴋʀᴀᴋɪɴᴢ & ᴋʀᴀᴋɪɴᴢʟᴀʙ")
        .setThumbnail("https://i.postimg.cc/5tgjvj1y/A.png")
        .setDescription(`**Aքʀɨʟ❣️ʍʊֆɨƈ** has encountered an error.

Please report to either 
🔰**In Discord channel** = https://discord.gg/ucPpXWFK
or
🔰**In telegram group** = https://t.me/Krakns

**Error🔻Caught**
*${ErrorApril}*`)
      );
      console.error(ErrorApril);
    }
  },
};