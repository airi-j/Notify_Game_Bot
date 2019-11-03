
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('bot ready...');
});

client.on('presenceUpdate',(before,after)=>{

    const gameInfo = after.presence.game;
    const userName = after.displayName;
    if(gameInfo !== null){
        client.channels.get(process.env.CHANNEL_ID).send(userName+"さんが"+gameInfo.name+"をはじめました。");
    }
});

client.login(process.env.BOT_TOKEN);