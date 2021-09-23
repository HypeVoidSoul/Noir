const { MessageEmbed } = require("discord.js");
const { ʙᴏᴛꜰɪx, AUTOCLEANER } = require("../noirtem/noir_env");


module.exports = {
    name: "queue",
    cooldown: 5,

    async execute(message, args) {
        if (message.content.startsWith(ʙᴏᴛꜰɪx + "queue") && message.channel.name !== "🦋noir🎧player🦋") {
            const embedfactor = new MessageEmbed()
                .setColor(`0x1f8b4c`)
                .setAuthor(`🦋🎧𝗡𝗢𝗜𝗥🎧🦋`)               
                .setImage(`https://telegra.ph/file/3766d80c69f488d850173.jpg`)
                .setThumbnail(`https://telegra.ph/file/3766d80c69f488d850173.jpg`)
                .setDescription(`\n\n
**⚠️Warning⚠️** 
**User:** ${message.author}

**=========🦋𝗡𝗢𝗜𝗥🦋=========**
**:microphone:Noir  =** _Please use the channel **🦋noir🎧player🦋** for any ʏᴏᴜᴛᴜʙᴇ voice streaming_`);
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
        if (message.content.startsWith(ʙᴏᴛꜰɪx + "queue") && message.channel.name === "🦋noir🎧player🦋") {
            const permissions = message.channel.permissionsFor(message.client.user);
            if (!permissions.has([`MANAGE_MESSAGES`, `ADD_REACTIONS`])) {
                const embedqueue1 = new MessageEmbed()
                    .setColor(`0x1f8b4c`)
                    .setAuthor(`🦋🎧𝗡𝗢𝗜𝗥🎧🦋`)
                    .setImage(`https://telegra.ph/file/3766d80c69f488d850173.jpg`)
                    .setDescription(`\n\n
**⚠️Warning⚠️** 
**User:** ${message.author}

**=========🦋𝗡𝗢𝗜𝗥🦋=========**
**:microphone:Noir  =** Missing permission to manage messages or add reactions`);
                message.channel
                    .send(embedqueue1)
                    .catch(console.error)
                    .then((message) => {
                        message.delete({
                            timeout: `${AUTOCLEANER}`
                        });
                    });
                return;
            }
            const queue = message.client.queue.get(message.guild.id);
            if (!queue) {
                const embedqueue2 = new MessageEmbed()
                    .setColor(`0x1f8b4c`)
                    .setAuthor(`🦋🎧𝗡𝗢𝗜𝗥🎧🦋`)
                    .setImage(`https://telegra.ph/file/3766d80c69f488d850173.jpg`)
                    .setDescription(`\n\n
**⚠️Warning⚠️** 
**User:** ${message.author}

**=========🦋𝗡𝗢𝗜𝗥🦋=========**
**:microphone:Noir  =** ❌ Nothing playing in this server`);
                message.channel
                    .send(embedqueue2)
                    .catch(console.error)
                    .then((message) => {
                        message.delete({
                            timeout: `${AUTOCLEANER}`
                        });
                    });
                return;
            }
            let currentPage = 0;
            const embeds = generateQueueEmbed(message, queue.songs);
            const queueEmbed = await message.channel.send(`"**=========🦋𝗡𝗢𝗜𝗥🦋=========**\n\n**:microphone:Noir  =**  Current Page - ${currentPage + 1}/${embeds.length}`, embeds[currentPage]);
            try {
                await queueEmbed.react(`⬅️`);
                await queueEmbed.react(`❌`);
                await queueEmbed.react(`➡️`);
            } catch (error) {
                console.error(error);
                message.channel.send(error.message)
                    .catch(console.error);
            }
            const filter = (reaction, user) =>
                [`⬅️`, `❌`, `➡️`].includes(reaction.emoji.name) && message.author.id === user.id;
            const collector = queueEmbed.createReactionCollector(filter, { time: 60000 });
            collector.on(`collect`, async (reaction, user) => {
                try {
                    if (reaction.emoji.name === `➡️`) {
                        if (currentPage < embeds.length - 1) {
                            currentPage++;
                            queueEmbed.edit("**=========🦋𝗡𝗢𝗜𝗥🦋=========**\n\n**:microphone:Noir  =**  Current Page - ",
                                { page: currentPage + 1, length: embeds.length }),
                                embeds[currentPage]
                        };
                    } else if (reaction.emoji.name === `⬅️`) {
                        if (currentPage !== 0) {
                            --currentPage;
                            queueEmbed.edit("**=========🦋𝗡𝗢𝗜𝗥🦋=========**\n\n**:microphone:Noir  =**  Current Page - ", { page: currentPage + 1, length: embeds.length }), embeds[currentPage]
                        };
                    } else {
                        collector.stop();
                        reaction.message.reactions.removeAll();
                    }
                    await reaction.users.remove(message.author.id);
                } catch (error) {
                    console.error(error);
                    return message.channel.send(error.message)
                        .catch(console.error);
                }
            });
        }
    }
};

function generateQueueEmbed(message, queue) {
    let embeds = [];
    let k = 10;
    for (let i = 0; i < queue.length; i += 10) {
        const current = queue.slice(i, k);
        let j = i;
        k += 10;
        const info = current.map((track) => `${++j} - [${track.title}](${track.url})`).join(`\n`);
        const embed = new MessageEmbed()
            .setThumbnail("https://telegra.ph/file/3766d80c69f488d850173.jpg")
            .setColor(`0x1f8b4c`)
            .setDescription(`****=========🦋𝗡𝗢𝗜𝗥🦋=========****\n\n⚜️**Current Song** -_[${queue[0].title}]_\n\n⚜️${info}`)
        embeds.push(embed);
    }
    return embeds;
}
