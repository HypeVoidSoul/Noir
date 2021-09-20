const noir_loader = require("../NOIR_SYSTEM/noir_loader");
const { canModifyQueue } = require("../NOIR_SYSTEM/noir_env");


module.exports = {
  name: "skip",


  execute(message, args) {
    // try { message.delete(); }
    // catch (error) {
    //   console.error(error);
    //   pass;
    // }


    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply(noir_loader.__("skip.ПOIЯD_ᴇʀʀᴏʀ_ɴᴏᴛ_Qᴜᴇᴜᴇ"))
      .then(message => {
        message.delete({ timeout: 6000 });
      })
      .catch(console.error);
    if (!canModifyQueue(message.member)) return noir_loader.__("common.ПOIЯD_ᴇʀʀᴏʀ_ɴᴏᴛ_ᴄʜᴀɴɴᴇʟ");

    queue.playing = true;
    queue.connection.dispatcher.end();
    queue.textChannel.send(noir_loader.__mf("skip.ПOIЯD_ʀᴇꜱᴜʟᴛ", { author: message.author }))
      .then(message => {
        message.delete({ timeout: 6000 });
      })
      .catch(console.error);
  }
};
