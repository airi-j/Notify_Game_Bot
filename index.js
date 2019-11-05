
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('bot ready...');
});

client.on('presenceUpdate',(before,after)=>{

    const beforeGameInfo = before.presence.game;
    const afterGameInfo = after.presence.game;
    const userName = after.displayName;
    if(afterGameInfo !== null && beforeGameInfo === null){
        client.channels.get(process.env.CHANNEL_ID).send(userName+"さんが"+afterGameInfo.name+"をはじめました。");
    }
});

client.login(process.env.BOT_TOKEN);