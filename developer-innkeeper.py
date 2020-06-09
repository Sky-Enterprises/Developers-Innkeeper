import os
import discord
from dotenv import load_dotenv

load_dotenv()
TOKEN = os.getenv('DISCORD_TOKEN')


client = discord.Client()


@client.event
async def on_ready():
    print(f'{client.user} has connected to Discord!')

'''
Prompts when a new user joins the server.
'''
@client.event
async def on_member_join(member):
    await member.create_dm()
    await member.dm_channel.send(
        f'Hello {member.name}, please do enjoy your stay.'
    )


'''
Message area, the bot will wait for certain message patterns and react to them.
'''
@client.event
async def on_message(message):
    if message.author == client.user:
        return
    elif "html is a programming language" in message.content.lower():
        await message.channel.send("Yes, html is indeed a real programing language.")

'''
Current discord key, should we hide it? naw.
'''
client.run('NzE5NzA0MDM5MTYzNjkxMDQ5.Xt7hIA.A_mjGY_Dr8dYxSIQp1prx3aoDvY')
