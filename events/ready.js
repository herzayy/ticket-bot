module.exports = {
    name: 'ready',
    once: true,

    async execute(client) {
        console.log(`Je suis connecter à ${client.user.username}`)

        var compteurStatus = 1
        setInterval(async () => {
            status =  [`herzay#0004`]
            compteurStatus = (compteurStatus + 1) % (status.length);
            client.user.setPresence({
                activities: [{
                    name: `${status[compteurStatus]}`,
                    type: "STREAMING",
                    url: "Regarde EventyRP "
                  }],
                  status: "streaming"})
        }, 5000);
    }
}
