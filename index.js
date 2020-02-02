
const Discord = require('discord.js');
const client = new Discord.Client();

const gameTitle = process.env.GAME_TITLE;

/**
 * ステータス情報更新イベント
 */
client.on('presenceUpdate',(before,after)=>{

    const beforeGameInfo = before.presence.game; //更新前のゲーム情報の取得
    const afterGameInfo = after.presence.game; //更新後のゲーム情報の取得
    const userName = after.displayName; //ユーザ名の取得


    //ゲーム開始時の通知
    if(beforeGameInfo === null && afterGameInfo !== null){
        startGame(userName,afterGameInfo.name);
        inviteGame(afterGameInfo.name);
    }

    //ゲーム更新時の通知
    if(beforeGameInfo !== null && afterGameInfo !== null){
        const beforeGameName = beforeGameInfo.name;
        const afterGameName = afterGameInfo.name;
        if(beforeGameName !== afterGameName){
            startGame(userName,afterGameName);
            inviteGame(afterGameName);
        }
    }    
});


//ゲーム開始の通知
const startGame = function(userName,gameName){
    client.channels.get(process.env.CHANNEL_ID).send(`報告：ユーザ名「${userName}」が${gameName}を開始。`);
}


//ゲームの招待通知
const inviteGame = function(gameName){
    const validGame = gameTitle.split(",").indexOf(gameName);
    if(validGame !== -1){
        client.channels.get(process.env.CHANNEL_ID).send(`推奨：メンバー全員による${gameName}のプレイ。`);
    }
}

client.login(process.env.BOT_TOKEN);