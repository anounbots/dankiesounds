const Discord   = require('discord.js');
var guilds      = new Discord.Collection();

class dankie extends Discord.Client {
    constructor(options) {
        super(options)

        this.color = getRandomColour();
        this.utils = require('./utils.js');
        this.embedFooter = "Dankie Sounds | Coded By Dank AnounFX™#3494";
        this.version = "1.0.0"
        this.codename = "dankie"
        this.config = require('./config.json')
        this.guilds = guilds;
        this.ownerid = "";
        this.guilds.forEach(g => {
            var id = g.id;
            guilds.set("" + id, {name: g.name, owner: g.owner, channels: g.channels, users: g.members, member_count: g.members.size, channel_count: g.channel.size})
        })
    }
}

module.exports = dankie;