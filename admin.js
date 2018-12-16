const Discord = require('discord.js')

class dChannelCommand extends Discord.Command
{
    constructor(client)
    {
        super(client,{
            name: "admin",
            group: "komendy",
            memberName: "admin",
            description: "pokazuje !admin"
        });
    }

    async run(message, args)
    {
       if(message.content == "!admin")
       {
        message.reply('Administracja : \n@Sharky#1393 \n@Borek#8619 \n@Niedźwiad#4115  ')
       }
    }
}

module.exports = dChannelCommand;
