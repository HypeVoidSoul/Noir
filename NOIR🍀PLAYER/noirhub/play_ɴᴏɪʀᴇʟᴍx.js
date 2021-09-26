const {
  ɴᴏɪʀʏᴛ,
  notneeded,
  ɴᴏɪʀᴠᴏʟ,
  ʙᴏᴛꜰɪx,
  ɴᴏɪʀᴄʟᴇᴀɴᴇʀ,
} = require("../noirtem/noir_env");
const https = require("https");
const ytdl = require("ytdl-core");
const { play } = require("./noir🎶player");
const YouTubeAPI = require("simple-youtube-api");
const youtube = new YouTubeAPI(ɴᴏɪʀʏᴛ);
const ɢᴏᴛʏᴏᴜᴛᴜʙᴇʟɪꜱᴛ = /^.*(list=)([^#\&\?]*).*/gi;
const scdl = require(`soundcloud-downloader`).default;
const scRegex = /^https?:\/\/(soundcloud\.com)\/(.*)$/;
const not_needed_scl = /^https?:\/\/(soundcloud\.app\.goo\.gl)\/(.*)$/;
const ɢᴏᴛʏᴏᴜᴛᴜʙᴇꜱɪɴɢʟᴇ =
  /^(https?:\/\/)?(www\.)?(m\.)?(youtube\.com|youtu\.?be)\/.+$/gi;
const { MessageEmbed } = require("../ᴋʟᴀᴡᴠᴏɪᴅ");

module.exports = {
  name: "play",
  cooldown: 3,
  // ==================================================================
  // ================>  🎶NOIR🍀PLΛYΣЯ by HypeVoidSoul <================
  // ==================================================================
  async execute(message, args) {
    if (
      message.content.startsWith(ʙᴏᴛꜰɪx + "play") &&
      message.channel.name !== "noir🎶player"
    ) {
      message.react("❌");
      const embedfactor = new MessageEmbed()
        .setColor("#20ab40")
        .setTitle("⚠️Warning⚠️")
        .setAuthor(`•> Noir🎶Player by HypeVoidSoul`)
        .setThumbnail(`https://i.postimg.cc/159gtVVq/image.jpg`)
        .setFooter(
          "🔰Lic: 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀"
        )
        .setDescription(
          `
**User:** ${message.author}
=========:radio_button:=========

**Channel:** \`noir🎶player\`
Please use 👆🏻 channel for any **ɴᴏɪʀ** commands.`
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

    //     if (!ɢᴏᴛʏᴏᴜᴛᴜʙᴇʟɪꜱᴛ.test(args[0]) && !ɢᴏᴛʏᴏᴜᴛᴜʙᴇꜱɪɴɢʟᴇ.test(args[0])) {
    //       const embednotplay = new MessageEmbed()
    //         .setColor("#20ab40")
    //         .setAuthor(`•> Noir🎶Player by HypeVoidSoul`)
    //         .setThumbnail(`https://i.postimg.cc/159gtVVq/image.jpg`)
    //              .setFooter("🔰Lic: 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀")
    // .setDescription(
    //  `
    // **User:** ${message.author}
    // =========:radio_button:=========

    // Please use only **YouTube** links..`);
    //       message.channel
    //         .send(embednotplay)
    //         .catch(console.error)
    //         .then((message) => {
    //           message.delete({
    //             timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
    //           });
    //         });
    //       return;
    //     }

    if (ɢᴏᴛʏᴏᴜᴛᴜʙᴇʟɪꜱᴛ.test(args[0])) {
      const embedplay1 = new MessageEmbed()
        .setColor("#20ab40")
        .setTitle("⚠️Warning⚠️")
        .setAuthor(`•> Noir🎶Player by HypeVoidSoul`)
        .setThumbnail(`https://i.postimg.cc/159gtVVq/image.jpg`)
        .setFooter(
          "🔰Lic: 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀"
        )
        .setDescription(
          `
**User:** ${message.author}
=========:radio_button:=========

This link seems to be a playlist link.
Please use **${ʙᴏᴛꜰɪx}list** command for any YouTube playlists..`
        );
      message.react("❌");
      message.channel
        .send(embedplay1)
        .catch(console.error)
        .then((message) => {
          message.delete({
            timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
          });
        });
      return;
    }

    if (
      message.content.startsWith(ʙᴏᴛꜰɪx + "play") &&
      message.channel.name === "noir🎶player"
    ) {
      message.react("✅");
      const { channel } = message.member.voice;
      const serverQueue = message.client.queue.get(message.guild.id);
      if (!channel) {
        const embedplay1 = new MessageEmbed()
          .setColor("#20ab40")
          .setTitle("⚠️Warning⚠️")
          .setAuthor(`•> Noir🎶Player by HypeVoidSoul`)
          .setThumbnail(`https://i.postimg.cc/159gtVVq/image.jpg`)
          .setFooter(
            "🔰Lic: 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀"
          )
          .setDescription(
            `
**User:** ${message.author}
=========:radio_button:=========

You need to join a voice channel first!`
          );
        message.react("❌");
        message
          .lineReplyNoMention(embedplay1)
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
            });
          });
        return;
      }

      if (serverQueue && channel !== message.guild.me.voice.channel) {
        const embedplay2 = new MessageEmbed()
          .setColor("#20ab40")
          .setTitle("⚠️Warning⚠️")
          .setAuthor(`•> Noir🎶Player by HypeVoidSoul`)
          .setThumbnail(`https://i.postimg.cc/159gtVVq/image.jpg`)
          .setFooter(
            "🔰Lic: 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀"
          )
          .setDescription(
            `
**User:** ${message.author}
=========:radio_button:=========

You must be in the same Voice Channel as **ME**.
ID= ${message.client.user}`
          );
        message.react("❌");
        message
          .lineReplyNoMention(embedplay2)
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
            });
          });
        return;
      }

      if (!args.length) {
        const embedplay3 = new MessageEmbed()
          .setColor("#20ab40")
          .setTitle("⚠️Warning⚠️")
          .setAuthor(`•> Noir🎶Player by HypeVoidSoul`)
          .setThumbnail(`https://i.postimg.cc/159gtVVq/image.jpg`)
          .setFooter(
            "🔰Lic: 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀"
          )
          .setDescription(
            `
**User:** ${message.author}
=========:radio_button:=========

**usage:**
${ʙᴏᴛꜰɪx}play **YouTube URL** or **Video Name**`
          );
        message.react("❌");
        message
          .lineReplyNoMention(embedplay3)
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
            });
          });
        return;
      }

      const permissions = channel.permissionsFor(message.client.user);
      if (!permissions.has(`CONNECT`)) {
        const embedplay3 = new MessageEmbed()
          .setColor("#20ab40")
          .setTitle("⚠️Warning⚠️")
          .setAuthor(`•> Noir🎶Player by HypeVoidSoul`)
          .setThumbnail(`https://i.postimg.cc/159gtVVq/image.jpg`)
          .setFooter(
            "🔰Lic: 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀"
          )
          .setDescription(
            `
**User:** ${message.author}
=========:radio_button:=========

Cannot connect to voice channel, missing permissions`
          );
        message.react("❌");
        message
          .lineReplyNoMention(embedplay3)
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
            });
          });
        return;
      }

      if (!permissions.has(`SPEAK`)) {
        const embedplay3 = new MessageEmbed()
          .setColor("#20ab40")
          .setTitle("⚠️Warning⚠️")
          .setAuthor(`•> Noir🎶Player by HypeVoidSoul`)
          .setThumbnail(`https://i.postimg.cc/159gtVVq/image.jpg`)
          .setFooter(
            "🔰Lic: 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀"
          )
          .setDescription(
            `
**User:** ${message.author}
=========:radio_button:=========

I cannot speak in this voice channel, make sure I have the proper permissions!`
          );
        message.react("❌");
        message
          .lineReplyNoMention(embedplay3)
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
            });
          });
        return;
      }

      const url = args[0];
      const search = args.join(` `);
      const urlValid = ɢᴏᴛʏᴏᴜᴛᴜʙᴇꜱɪɴɢʟᴇ.test(args[0]);

      if (!ɢᴏᴛʏᴏᴜᴛᴜʙᴇꜱɪɴɢʟᴇ.test(args[0]) && ɢᴏᴛʏᴏᴜᴛᴜʙᴇʟɪꜱᴛ.test(args[0])) {
        message.client.commands.get(`list`).execute(message, args);
        return;
      } else if (scdl.isValidUrl(url) && url.includes(`/sets/`)) {
        return;
      }

      if (not_needed_scl.test(url)) {
        try {
          https.get(url, function (res) {
            if (res.statusCode == `302`) {
              message.client.commands
                .get(`play`)
                .execute(message, [res.headers.location]);
              return;
            } else {
              const embedplay4 = new MessageEmbed()
                .setColor("#20ab40")
                .setTitle("⚠️Warning⚠️")
                .setAuthor(`•> Noir🎶Player by HypeVoidSoul`)
                .setThumbnail(`https://i.postimg.cc/159gtVVq/image.jpg`)
                .setFooter(
                  "𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹-𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯-𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀"
                )
                .setDescription(
                  `
**User:** ${message.author}
=========:radio_button:=========

Audio Not Found`
                );
              message.react("❌");
              message.channel
                .send(embedplay4)
                .catch(console.error)
                .then((message) => {
                  message.delete({
                    timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
                  });
                });
              return;
            }
          });
        } catch (error) {
          console.error(error);
          message.channel
            .send(error.message)
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
              });
            });
          return;
        }

        const embedplay5 = new MessageEmbed()
          .setColor("#20ab40")
          .setTitle("⚠️Warning⚠️")
          .setAuthor(`•> Noir🎶Player by HypeVoidSoul`)
          .setThumbnail(`https://i.postimg.cc/159gtVVq/image.jpg`)
          .setFooter(
            "🔰Lic: 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀"
          )
          .setDescription(
            `
**User:** ${message.author}
=========:radio_button:=========

Following url redirection...`
          );
        message.react("❌");
        message
          .lineReplyNoMention(embedplay5)
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
            });
          });
        return;
      }

      const queueConstruct = {
        textChannel: message.channel,
        channel,
        connection: null,
        songs: [],
        loop: false,
        volume: ɴᴏɪʀᴠᴏʟ,
        muted: false,
        playing: true,
      };
      let songInfo = null;
      let song = null;
      if (urlValid) {
        try {
          songInfo = await ytdl.getInfo(url);
          song = {
            title: songInfo.videoDetails.title,
            url: songInfo.videoDetails.video_url,
            duration: songInfo.videoDetails.lengthSeconds,
          };
        } catch (error) {
          console.error(error);
          return message.channel
            .send(error.message)
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
              });
            });
        }
      } else if (scRegex.test(url)) {
        try {
          const trackInfo = await scdl.getInfo(url, notneeded);
          song = {
            title: trackInfo.title,
            url: trackInfo.permalink_url,
            duration: Math.ceil(trackInfo.duration / 1000),
          };
        } catch (error) {
          console.error(error);
          return message.channel
            .send(error.message)
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
              });
            });
        }
      } else {
        try {
          const results = await youtube.searchVideos(search, 1, {
            part: `snippet`,
          });

          if (!results.length) {
            const embedplay6 = new MessageEmbed()
              .setColor("#20ab40")
              .setTitle("⚠️Warning⚠️")
              .setAuthor(`•> Noir🎶Player by HypeVoidSoul`)
              .setThumbnail(`https://i.postimg.cc/159gtVVq/image.jpg`)
              .setFooter(
                "🔰Lic: 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀"
              )
              .setDescription(
                `
**User:** ${message.author}
=========:radio_button:=========

Audio Not Found`
              );
            message.react("❌");
            message.channel
              .send(embedplay6)
              .catch(console.error)
              .then((message) => {
                message.delete({
                  timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
                });
              });
            return;
          }

          songInfo = await ytdl.getInfo(results[0].url);
          song = {
            title: songInfo.videoDetails.title,
            url: songInfo.videoDetails.video_url,
            duration: songInfo.videoDetails.lengthSeconds,
          };
        } catch (error) {
          console.error(error);
          message.channel
            .send(error.message)
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
              });
            });
          return;
        }
      }

      if (serverQueue) {
        serverQueue.songs.push(song);
        serverQueue.textChannel
          .send(
            `**ɴᴏɪʀ🍀ᴘʟᴀʏᴇʀ**\n${song.title}\n_has been added to the queue by_ ${message.author}\n\n`
          )
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
            });
          });
        return;
      }

      queueConstruct.songs.push(song);
      message.client.queue.set(message.guild.id, queueConstruct);
      try {
        try {
          queueConstruct.connection = await channel.join();
          const embedplay7 = new MessageEmbed()
            .setColor("#20ab40")
            .setAuthor(`•> Noir🎶Player by HypeVoidSoul`)
            .setThumbnail(`https://i.postimg.cc/159gtVVq/image.jpg`)
            .setFooter(
              "🔰Lic: 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀"
            )
            .setDescription(
              `
**User:** ${message.author}
=========:radio_button:=========

**👍 Joined \`${channel.name}\` and is 📄 bound to \`#${message.channel.name}\`**`
            );
          message.channel
            .send(embedplay7)
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
              });
            });
        } catch (e) {
          console.log(e.message);
        }
        await queueConstruct.connection.voice.setSelfDeaf(true);
        play(queueConstruct.songs[0], message);
      } catch (error) {
        console.error(error);
        message.client.queue.delete(message.guild.id);
        await channel.leave();
        const embedplay8 = new MessageEmbed()
          .setColor("#20ab40")
          .setTitle("⚠️Warning⚠️")
          .setAuthor(`•> Noir🎶Player by HypeVoidSoul`)
          .setThumbnail(`https://i.postimg.cc/159gtVVq/image.jpg`)
          .setFooter(
            "🔰Lic: 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀"
          )
          .setDescription(
            `
**User:** ${message.author}
=========:radio_button:=========

Could not join the channel: *${error}*`
          );
        message.react("❌");
        message
          .lineReplyNoMention(embedplay8)
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
            });
          });
        return;
      }
    }
  },
};
