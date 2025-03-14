import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  
  callbacks: {
    async signIn({ account, profile }) {
      return true // Do different verification for other providers that don't have `email_verified`
    },
  }
}

export default NextAuth(authOptions)