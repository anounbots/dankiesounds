exports.exec = (msg, args, dankie, Discord) => {
    const yt = require('ytdl-core');
        const voiceChannel = msg.member.voiceChannel;
        if (!voiceChannel) return msg.reply('bruv, join a voice channel init');

        voiceChannel.join()
            .then(connection => {
                let stream = yt("https://youtu.be/3XYWoDn3JvM", {audioonly: true});
                const dispatcher = connection.playStream(stream);
                dispatcher.on('end', () => {
                    voiceChannel.leave();
                });
            });
}

exports.cmd = {
    usage: "",
    disabled: false
}