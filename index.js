const discord = require("discord.js");
const client = new discord.Client();
const config = require("./config.json");

var prefix = config.prefix;

client.on("ready", () => {
    console.log(`${client.user.username} se a conectado correctamente`);
    client.user.setActivity("Bot Oficial ST6IX");
});

client.on("guildMemberAdd", member => {
    //var canal = client.channels.find(channels => channels.id === ("432763750316113932"));
    var canal = client.channels.find(channel => channel.id === (config.idSala));
    canal.message.channel.send("Bienvenido/a <@" + member.id + "> :smiley: :smiley:");
});

client.on("message", async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

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
            const embed = new discord.RichEmbed()
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
})

client.login(process.env.token);