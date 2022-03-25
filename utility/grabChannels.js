export default function grabChannels(servers){
  const channels = []

  servers.map(server => server.channels.map(
    channel => {
      if(channel.type === 'GUILD_TEXT'){
        channel.server = server.name
        channels.push(channel)
      }
    }
  ))

  return channels
}
