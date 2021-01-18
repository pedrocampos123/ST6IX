const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

var prefix = config.prefix;

client.on("ready", () => {
    try {
        console.log(`${client.user.username} conectado correctamente :V`);
        client.user.setActivity("Jugando con amigos");

    } catch (error) {
        console.log(error);
    }
});

client.on("guildMemberAdd", (member) => {
    try {
        //let canal = client.channels.cache.get('432763750316113932');
        const canal = member.channels.cache.find(canal => canal.name === "lobby");

        if (!canal) return;

        canal.send(`Hey **${member}**, welcome to ${member.guild} :tada::hugging:`);
    } catch (error) {
        console.log(error);
    }
});

/*sclient.on("message", async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    try {

        const args = message.content.slice(prefix.length).trim().split(' ');
        const command = args.shift().toLowerCase();

        let usuario = message.author;

        switch (command) {
            case "saludo":
                return message.channel.send(`Hola ${usuario.username}`);
                break;
            case "helpbot":
                return message.channel.send("!saludo\n!information");
                break;
            case "information":
                const embed = new Discord.RichEmbed()
                    .setAuthor(`ST6IX`, client.user.avatarURL)
                    .addField(`User`, `${usuario.username}`, true)
                    .addField(`Servers`, `${client.guilds.size}`, true)
                    .addField(`Users`, `${client.users.size}`, true)
                    .addField(`Discord`, `[ST6IX/discord](https://discord.gg/hKa8HrEH)`, true)
                    .addField(`Invite`, `[ST6IX/discord](https://discord.gg/hKa8HrEH)`, true)
                    .addField(`Developer`, `ARTURO_#1583`, true)
                    .addField(`YouTube`, "https://www.youtube.com/channel/UCBqpmuhsKpwh8IX-ge6kCbQ", true)
                    .addField(`Version`, `1.0`, true)
                    .setTimestamp()
                    .setColor("RANDOM");
                message.channel.send(embed);
                break;
            default:
                return message.channel.send("comando invalido, utilizar el comando !helpbot");
                break;
        }

    } catch (error) {
        console.log(error);
    }
});*/

client.login(config.token);