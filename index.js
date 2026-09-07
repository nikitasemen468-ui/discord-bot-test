const {
Client,
GatewayIntentBits,
Events
} = require("discord.js");

const client = new Client({
intents: [GatewayIntentBits.Guilds]
});

client.once(Events.ClientReady, async () => {
console.log(`Bot is online as ${client.user.tag}`);

```
for (const guild of client.guilds.cache.values()) {
    await guild.commands.set([
        {
            name: "hi",
            description: "Replies with HI"
        }
    ]);

    console.log(`/hi added to ${guild.name}`);
}
```

});

client.on(Events.InteractionCreate, async interaction => {
if (!interaction.isChatInputCommand()) return;

```
if (interaction.commandName === "hi") {
    await interaction.reply("HI");
}
```

});

client.login(process.env.BOT_TOKEN);
