const {Permissions, MessageEmbed, MessageActionRow, MessageSelectMenu }=require('discord.js')
module.exports = {
    name: 'interactionCreate',
    async execute(client, interaction) {
        if (!interaction.isSelectMenu()) return;

	const row = new MessageActionRow()
                .addComponents(
                    new MessageSelectMenu()
                    .setCustomId('del')
                    .setPlaceholder('Selectionner pour supprimé le ticket !')
					.addOptions([
						{
							label: '🗑️ Supprimer le ticket',
							description: 'Supprime le salon',
							value: 'delete',
						}
					])
                );


        let catégorie = "987435825119768667"
        let roleStaff = interaction.guild.roles.cache.get('967337784367022120')

        let catégorie_boutique = "987436245565194382"
        let roleStaff_boutique = interaction.guild.roles.cache.get('967337771033301002')

        let catégorie_illégaux = "999656827300098058"
        let roleStaff_illégaux = interaction.guild.roles.cache.get('967337776871784478')

        let catégorie_légaux = "999656888801177710"
        let roleStaff_légaux = interaction.guild.roles.cache.get('967337775982587934')

        let catégorie_aide = "987435825119768667"
        let roleStaff_aide = interaction.guild.roles.cache.get('967337784367022120')


        let DejaUnChannel = interaction.guild.channels.cache.find(c => c.topic == interaction.user.id)

        if(interaction.customId === "del") {
            if (interaction.values[0] == "delete") {
                const channel = interaction.channel
                channel.delete();
            }
        }

        if (interaction.customId == "select") {
            if (DejaUnChannel) return interaction.reply({content: 'Vous avez déja un ticket d\'ouvert sur le serveur.', ephemeral: true})
            
            if (interaction.values[0] == "aide") {
                interaction.guild.channels.create(`Ticket de ${interaction.user.username}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `${catégorie}`,
                    permissionOverwrites: [
                        {
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: roleStaff,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
                    const embed = new MessageEmbed()
                    .setTitle('Ticket pour bénéficier d\'une aide')
                    .setDescription('Veuillez bien détailler votre problème, un staff viendra pour vous prendre en charge.')
                    .setFooter('herzay#0004')
                    c.send({embeds: [embed], content: `${roleStaff} | ${interaction.user}`, components: [row]})
                    interaction.reply({content: `Votre ticket à été ouvert avec succès. <#${c.id}>`, ephemeral: true})
                })


            } else if (interaction.values[0] == "boutique") {
                interaction.guild.channels.create(`Ticket de ${interaction.user.username}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `${catégorie_boutique}`,
                    permissionOverwrites: [
                        {
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: roleStaff_boutique,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
                    const embed = new MessageEmbed()
                    .setTitle('Ticket Boutique')
                    .setDescription('Veuillez bien détailler votre problème, un Fondateur viendra pour vous prendre en charge.')
                    .setFooter('herzay#0004')
                    c.send({embeds: [embed], content: `${roleStaff_boutique} | ${interaction.user}`, components: [row]})
                    interaction.reply({content: `Votre ticket à été ouvert avec succès. <#${c.id}>`, ephemeral: true})
                })

            } else if (interaction.values[0] == "légal") {
                interaction.guild.channels.create(`Ticket de ${interaction.user.username}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `${catégorie_légaux}`,
                    permissionOverwrites: [
                        {
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: roleStaff_légaux,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
                    const embed = new MessageEmbed()
                    .setTitle('Ticket Légal')
                    .setDescription('Veuillez bien détailler votre question, un Responsable Légal viendra pour vous prendre en charge.')
                    .setFooter('herzay#0004')
                    c.send({embeds: [embed], content: `${roleStaff_légaux} | ${interaction.user}`, components: [row]})
                    interaction.reply({content: `Votre ticket à été ouvert avec succès. <#${c.id}>`, ephemeral: true})
                })

            } else if (interaction.values[0] == "illégal") {
                interaction.guild.channels.create(`Ticket de ${interaction.user.username}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `${catégorie_illégaux}`,
                    permissionOverwrites: [
                        {
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: roleStaff_illégaux,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
                    const embed = new MessageEmbed()
                    .setTitle('Ticket pour un remboursement')
                    .setDescription('Veuillez bien détailler votre problème, un Reponsable Illégal viendra pour vous prendre en charge.')
                    .setFooter('herzay#0004')
                    c.send({embeds: [embed], content: `${roleStaff_illégaux} | ${interaction.user}`, components: [row]})
                    interaction.reply({content: `Votre ticket à été ouvert avec succès. <#${c.id}>`, ephemeral: true})
                })



            }
        }
    }
}
