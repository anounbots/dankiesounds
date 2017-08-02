exports.exec = (msg, args, dankie) => {
  const bot_voicechannel = msg.guild.voiceConnection.channel;
  const user_voicechannel = msg.member.voiceChannel;
  if(!bot_voicechannel) return msg.channel.send(":x: i smell no voice channel for meh");
  if(!user_voicechannel) return msg.channel.send(":x: i smell no voice channel for you");
  if(bot_voicechannel !== user_voicechannel) return msg.channel.send(":x: i don't smell that your connect to my voice channel.")

  msg.channel.send("sadly, you made give up!");
  msg.guild.voiceConnection.disconnect();
}

exports.cmd = {
  usage: null,
  disabled: false
}