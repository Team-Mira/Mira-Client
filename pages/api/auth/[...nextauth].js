import NextAuth from "next-auth/next";
import DiscordProvider from "next-auth/providers/discord"
import fetchGuilds from "../../../externalAPI/fetchGuilds"

export default NextAuth({
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      authorization: { params: { scope: 'guilds identify email'}}
    })
  ],
  callbacks: {
    // session: async ({session}) => {
    session: async (obj) => {
      const { session } = obj
      const servers = await fetchGuilds(obj.token.sub)

      session.user.id = obj.token.sub
      session.user.servers = servers

      return session
    },
  }
})
