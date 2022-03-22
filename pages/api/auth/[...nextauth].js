import { config } from "dotenv";
import NextAuth from "next-auth/next";
import DiscordProvider from "next-auth/providers/discord"

config()

export default NextAuth({
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      authorization: { params: { scope: 'guilds identify email'}}
    })
  ],
  callbacks: {
    session: async ({session}) => {
      const pointer = (session.user.image.indexOf('avatars')) + 8
      const partial = session.user.image.slice(pointer)
      const id = partial.slice(0, partial.indexOf('/'))

      session.user.id = id

      return session
    },
  }
})
