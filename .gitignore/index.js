const Discord = require("discord.js");

var bot = new Discord.Client();
var prefix = ("T")

bot.on('ready', () => {
    bot.user.setPresence({game: {name: '[TWEET]', type: 0}});
    console.log("Twitter est opérationnel !");
})

bot.login(process.env.TOKEN);

bot.on('message', message => {
    if(message.content === prefix + "quenos"){
       var tweet_embed = new Discord.RichEmbed()
            .setColor('21C6DF')
            .addField("Une nouveau tweet a été publié", "Youtube Set pour Axio :")
            .setImage("https://pbs.twimg.com/media/DW_hW3dWkAEgEJI.jpg")
            .setThumbnail("https://i.imgur.com/esy44yI.png")
            .setFooter("@Quenos")
        message.channel.sendEmbed(tweet_embed);
        console.log("Embed Envoyé !")
    }
})
