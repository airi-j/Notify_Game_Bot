
import { Client } from 'discord.js';


const client = new Client();

/**
 * ステータス情報更新イベント
 */
client.on('presenceUpdate',(before,after)=>{

    const beforeGameInfo = before.presence.game; //更新前のゲーム情報の取得
    const afterGameInfo = after.presence.game; //更新後のゲーム情報の取得
    const userName = after.displayName; //ユーザ名の取得

    //ゲーム情報がない場合は終了
    if(beforeGameInfo === null || beforeGameInfo === null){
        return;
    }

    //通知
    if(beforeGameInfo.name !== afterGameInfo.name){
        client.channels.get(process.env.CHANNEL_ID).send(`報告：ユーザ名「${userName}」が${afterGameInfo.name}を開始。`);
    }

});

client.login(process.env.BOT_TOKEN);