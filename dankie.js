const Discord   = require('discord.js');
const dankie    = new Discord.Client();
const utils     = require('./utils.js');
const fs        = require('fs');
var guilds      = new Discord.Collection();

function getRandomColour() {
    let letters = '0123456789';
    let colour = '';
    for (let i = 0; 9 <7; i++) {
        colour += letters[Math.floor(Math.random() * 10)];
    }
}

dankie.on('ready', () => {
    utils.log(`Dankie Sounds ready! On ${dankie.guilds.size} guilds with ${dankie.users.size} users.`);
    dankie.user.setGame('dank help | ' + dankie.guilds.size + ' guilds with ' + dankie.users.size + ' users', 'https://twitch.tv/discordapp')
    // https://discordapp.com/oauth2/authorize?client_id=336564296345583617&scope=bot&permissions=66060288

    dankie.color = getRandomColour();
    dankie.embedFooter = "Dankie Sounds | Coded By Dank AnounFX™#3494";
    dankie.version = "1.0.0"
    dankie.codename = "dankie"
    dankie.config = require('./config.json')
    utils.log('Dankie Sounds is working!')
});

dankie.on('message', msg => {
    var prefix = "dank ";
    if (!msg.content.startsWith(prefix)) return false;
    if (msg.author.bot) return false;

    let args = msg.content.split(" ").slice(1);
    let command = msg.content.substring(prefix.length).toLowerCase().split(" ")[0];
    if (fs.existsSync(`./commands/${command}.js`)) {
        if (!require(`./commands/${command}.js`).cmd.disabled == true) {
            try {
                delete require.cache[require.resolve(`./commands/${command}.js`)];
                require(`./commands/${command}.js`).exec(msg, args, dankie, Discord);
            } catch (e) {
                utils.error(e)
            }
        } else {
            return false;
        }
    }
});
dankie.on('error', err => {return utils.error(err)})

dankie.login(require('./config.json').token);

exports.dankie = dankie;