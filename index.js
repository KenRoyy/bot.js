const { Client, MessageEmbed } = require('discord.js');
const client = new Client({ partials: ['MESSAGE'] });


client.on('ready', () => {
    // console.log(`bot is ready as: ${client.user.tag}`);
    console.log("I`m online!");
});

client.on(`message`, message => {
    // Receiving the message
    console.log(message.content);
    if(message.content === '!ping'){
        message.channel.send('pong');
    }
    if(message.content === 'hola'){
        message.channel.send(`hola como estas ${message.author}!`);
    }
    if(message.content === '!buclex'){
        message.channel.send('https://www.buclex.com');
    }
    if(message.content === '!josejuan'){
        message.channel.send('https://www.youtube.com/channel/UCzDI_VuYb14FLu9f8uXOeSA');
    }
    if(message.content === '!help'){
        message.channel.send('!ping;');
        message.channel.send('hola;');
        message.channel.send('!buclex;');
        message.channel.send('!josejuan;');
        message.channel.send('!help')
    }

    if(message.content === '!pretty'){
        const embed = new MessageEmbed()
        .setAuthor('Ken', 'https://vignette.wikia.nocookie.net/quake-series/images/5/5a/DOOM_Slayer.png/revision/latest/scale-to-width-down/340?cb=20180820052049&path-prefix=es')
            // .addField('Something One', 'Lorem Impsun')
            // .addField('Something One', 'Lorem Impsun')
            // .addField('Something One', 'Lorem Impsun')
            // .setColor(0f)
            // .addField('Something One', 'Lorem Impsun')
            .setTitle('A pretty message')
            .setColor('BLUE')
        message.channel.send(embed);
    }

    if(!message.partial){
        const channel = client.channels.cache.get('9000000000000000000');
        if(channel){
            const embed = new MessageEmbed()
                .setTitle('Deleted Message')
                .setDescription(message.content)
                .setTimestamp();
            channel.send(embed);
        }
    }
});

client.login('NzAyNzAxNTgyNDMyNjAwMTM2.XqHV2w.EIFKORksrUb9x2dGjKewClI1ji8');