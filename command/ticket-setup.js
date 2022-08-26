const {MessageActionRow, MessageSelectMenu} = require('discord.js')
module.exports = {
    name: 'ticket',
    usage: 'template',
    category: "mod",
    description: `Commande template.`,
    async execute(client, message, args) {
		message.delete()
        const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('Sélectionnez le type de ticket à créer.')
					.addOptions([
						{
							label: '💌 Aide',
							description: 'Ouvrez un ticket pour beneficier d\'un support. ',
							value: 'aide',
						},
						{
							label: '📃 Illégal',
							description: 'Ouvrir un ticket pour faire une question. ',
							value: 'illégal',
						},
						{
							label: '📃 Légal',
							description: 'Ouvrir un ticket pour faire une question. ',
							value: 'légal',
						},
						{
							label: '🚓 Boutique',
							description: 'Ouvrir un ticket pour faire une question. ',
							value: 'boutique',
						},
					]),
			);

        message.channel.send({
            embeds: [{
                title: 'Ouvrir un ticket',
                description: '**Quelle est la raison de votre ticket ?**\nVeuillez choisir le type de ticket que vous souhaitez ouvrir.',
                color: "BLUE²", 
                footer: {text: 'herzay#0004 '}
            }],
            components: [row]
        })
    }
}
