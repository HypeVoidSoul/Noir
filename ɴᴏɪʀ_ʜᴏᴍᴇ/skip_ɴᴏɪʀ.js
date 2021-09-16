`=================================================================—••÷[🦋NOIR🦋]÷••—==========================================================================
                                                       GNU GENERAL PUBLIC LICENSE 
                                                         Version 3, 29 June 2007
                                                Copyright (C) 2007 Free Software Foundation
                                            Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies
                                                of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
                                                        —••÷[🦋NOIR🦋]÷••— 
                                                      Discord Music player Bot 
                                            has been licensed under GNU General Public License
                                        𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀
=================================================================—••÷[🦋NOIR🦋]÷••—==========================================================================`
const pnoir = require("../ɴᴏɪʀ_ᴏꜱ/pnoir");
const { canModifyQueue } = require("../ɴᴏɪʀ_ᴏꜱ/noirsys");
/**
 * 
 * 
 * —••÷[🦋NOIR🦋]÷••—  ===================================================================================

 * —••÷[🦋NOIR🦋]÷••—  ===================================================================================
 * —••÷[🦋NOIR🦋]÷••—  ===================================================================================

 * —••÷[🦋NOIR🦋]÷••—  ===================================================================================
 * —••÷[🦋NOIR🦋]÷••—  ===================================================================================

 * —••÷[🦋NOIR🦋]÷••—  ===================================================================================
 * 
 * 
 */
module.exports = {
  name: "skip",
  // description: pnoir.__("skip.ɴᴏɪʀ_description"),
/**
 * 
 * 
 * —••÷[🦋NOIR🦋]÷••—  ===================================================================================

 * —••÷[🦋NOIR🦋]÷••—  ===================================================================================
 * —••÷[🦋NOIR🦋]÷••—  ===================================================================================

 * —••÷[🦋NOIR🦋]÷••—  ===================================================================================
 * —••÷[🦋NOIR🦋]÷••—  ===================================================================================

 * —••÷[🦋NOIR🦋]÷••—  ===================================================================================
 * 
 * 
 */
  execute(message, args) {
    try { message.delete(); }
    catch (error) { console.error(error); }

    if (!args.length || isNaN(args[0]))
      return message
        .reply(pnoir.__mf("skip.ɴᴏɪʀ_usage_Reply", { prefix: message.client.prefix, name: module.exports.name }))
        .catch(console.error);

    const queue = message.client.queue.get(message.guild.id);


    if (!queue)
      return message.channel.send(pnoir.__("skip.ɴᴏɪʀ_error_Not_Queue")).catch(console.error);
    if (!canModifyQueue(message.member))
      return pnoir.__("common.ɴᴏɪʀ_error_NotChannel");
    if (args[0] > queue.songs.length)
      return message
        .reply(pnoir.__mf("skip.ɴᴏɪʀ_error_Not_Valid", { length: queue.songs.length }))
        .catch(console.error);

    queue.playing = true;

    if (queue.loop) {
      for (let i = 0; i < args[0] - 2; i++) {
        queue.songs.push(queue.songs.shift());
      }
    } else {
      queue.songs = queue.songs.slice(args[0] - 2);
    }

    queue.connection.dispatcher.end();
    queue.textChannel
      .send(pnoir.__mf("skip.ɴᴏɪʀ_player_result", { author: message.author, arg: args[0] - 1 }))
      .catch(console.error);
  }
};
