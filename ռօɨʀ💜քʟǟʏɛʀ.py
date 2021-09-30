import discord
from discord.ext import commands
from dislash import InteractionClient

ռօɨʀʄɨӼ = "!"
test_guilds = [889786523426373632]
bot = commands.Bot(command_prefix="!")
inter_client = InteractionClient(bot, test_guilds=test_guilds)


@inter_client.slash_command(
    name="help", description="𝐍𝐨𝐢𝐫💜𝐛𝐲🔱𝐊𝐫𝐚𝐤𝐢𝐧𝐳", guild_ids=test_guilds
)
async def hello(inter):
    if inter.channel.name == "💜noir":
        embed = discord.Embed(
            title="𝐍𝐨𝐢𝐫💜𝐛𝐲🔱𝐊𝐫𝐚𝐤𝐢𝐧𝐳",
            description=f"""=========⚜️=========

📌•♪•♪𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀•♪•♪
• **${ռօɨʀʄɨӼ}filter** = Music filters when playing audio.
• **${ռօɨʀʄɨӼ}help** = Display all commands and descriptions.
• **${ռօɨʀʄɨӼ}noir** = Display the  license and a few more info.
• **${ռօɨʀʄɨӼ}loop** = Toggle music loop.
• **${ռօɨʀʄɨӼ}np** = Show now playing song.
• **${ռօɨʀʄɨӼ}pause** = Pause the currently playing music.
• **${ռօɨʀʄɨӼ}ping** = Check server ping of client.
• **${ռօɨʀʄɨӼ}play** = Plays audio from YouTube.
• **${ռօɨʀʄɨӼ}list** = Play a playlist from YouTube.
• **${ռօɨʀʄɨӼ}queue** = Show the music queue and now playing.
• **${ռօɨʀʄɨӼ}remove** = Remove song from the queue.
• **${ռօɨʀʄɨӼ}resume** = Resume currently playing music.
• **${ռօɨʀʄɨӼ}shuffle** = Shuffle music queue.
• **${ռօɨʀʄɨӼ}next** = Skip the currently playing song.
• **${ռօɨʀʄɨӼ}skip** = Skip to the selected queue number.
• **${ռօɨʀʄɨӼ}stop** = Stops the music.
• **${ռօɨʀʄɨӼ}vol** = Change volume of currently playing music.   
        """,
            color=discord.Color.blurple(),
        )
        embed.set_thumbnail(url="https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg")
        embed.set_image(url="https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg")
        embed.set_footer(text="🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
        await inter.reply(embed=embed)
    else:
        await inter.reply("Nah!")


@inter_client.slash_command(
    name="noir", description="𝐍𝐨𝐢𝐫💜𝐛𝐲🔱𝐊𝐫𝐚𝐤𝐢𝐧𝐳", guild_ids=test_guilds
)
async def hello(inter):
    if inter.channel.name == "💜noir":
        embed = discord.Embed(
            title="𝐍𝐨𝐢𝐫💜𝐛𝐲🔱𝐊𝐫𝐚𝐤𝐢𝐧𝐳",
            description=f"""=========⚜️=========

•> **Noir** is a Discord Music player Bot with YouTube Support and is available on both Discord and Telegram.

•> **Noir** has been licensed under GNU General Public License 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁

•> use **${ռօɨʀʄɨӼ}help** to learn how to use **Noir**""",
            color=discord.Color.blurple(),
        )
        embed.set_thumbnail(url="https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg")
        embed.set_image(url="https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg")
        embed.set_footer(text="🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
        await inter.reply(embed=embed)
    else:
        await inter.author.send("Nah!")
        await inter.reply("Nah!")


@bot.command(name="ping")
async def ping(ctx: commands.Context):
    await ctx.send(f"Pong! {round(bot.latency * 1000)}ms")


bot.run("ODkyMzk0MjU2MTM4ODk5NDk2.YVMQ6g.BuWXxcpHiTDZoWdlDEYKGr1dE_U")
