const {
    AքʀɨʟʄɨӼ,
    Aքʀɨʟքʊʀɢɛʀ
} = require("../Aքʀɨʟռɛʋ/ʟᴏᴀᴅᴇʀ");
const {
    MessageEmbed
} = require("../ӄʀǟӄɨռʐʟǟɮ/src");
module.exports = {
    name: "pfp",
    cooldown: 3,
    execute(message) {
        try {
            if (message.content.startsWith(AքʀɨʟʄɨӼ + "pfp") && message.channel.name !== "ᴀᴘʀɪʟ💖ᴍᴜꜱɪᴄ") {
                message.react("❌");
                const embedfactor = new MessageEmbed()
                    .setColor("#FF5F15")
                    .setTitle("April❣️Music by🔱KrakinzLab™️")
                    .setAuthor(`😲 Warning! ⚠️`)
                    .setURL("https://github.com/Krakinz?tab=repositories")
                    .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                    .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2021 ᴋʀᴀᴋɪɴᴢ & ᴋʀᴀᴋɪɴᴢʟᴀʙ")
                    .setDescription(`**Ú§êr >** ${message.author}

**Category:** \`🔱Krakinz\`
**Channel:** \`Aքʀɨʟ❣️ʍʊֆɨƈ\`
⚠️Please use 👆🏻 for any **ᴀᴘʀɪʟ** commands.`);
                message.channel
                    .send(embedfactor)
                    .catch(console.error)
                    .then((message) => {
                        message.delete({
                            timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
                        });
                    });
                return;
            }
            if (message.content.startsWith(AքʀɨʟʄɨӼ + "pfp") && message.channel.name === "ᴀᴘʀɪʟ💖ᴍᴜꜱɪᴄ") {
                message.react("✅");
                message.react("❣️");
                let AvatarEmbed = new MessageEmbed();
                const user = message.mentions.users.first();
                if (!message.mentions.users.first()) {
                    AvatarEmbed.setColor("#ff0000");
                    AvatarEmbed.setAuthor(`😲 Warning! ⚠️`);
                    AvatarEmbed.setURL("https://github.com/Krakinz?tab=repositories");
                    AvatarEmbed.setImage(message.author.displayAvatarURL());
                    AvatarEmbed.setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2021 ᴋʀᴀᴋɪɴᴢ & ᴋʀᴀᴋɪɴᴢʟᴀʙ");
                    AvatarEmbed.setDescription("🔥This is **your** Profile Picture");
                    AvatarEmbed.setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`);
                    message.channel.send(AvatarEmbed);
                    return;
                } else {
                    AvatarEmbed.setColor("#ff0000");
                    AvatarEmbed.setAuthor(`😲 Warning! ⚠️`);
                    AvatarEmbed.setURL("https://github.com/Krakinz?tab=repositories");
                    AvatarEmbed.setImage(user.displayAvatarURL());
                    AvatarEmbed.setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: ɢɴᴜ(ᴄ)2021 ᴋʀᴀᴋɪɴᴢ & ᴋʀᴀᴋɪɴᴢʟᴀʙ");
                    AvatarEmbed.setDescription(`🔥This is **${user}'s** Profile Picture`);
                    AvatarEmbed.setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`);
                    message.channel.send(AvatarEmbed);
                    return;
                }
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