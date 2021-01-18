const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

var prefix = config.prefix;

client.on("ready", () => {
    console.log(`${client.user.username} conectado correctamente :V`);
    client.user.setActivity("Jugando con amigos");
});

client.on("guildMemberAdd", (member) => {
    try {
        let canal = client.channels.cache.get('432763750316113932');
        canal.send(`Hey ${member.user.username}, welcome to ${client.user.username} :tada::hugging:`);
    } catch (error) {}
});

client.login(config.token);