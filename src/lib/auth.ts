import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth from "next-auth"

import authConfig from "./auth.config"
import { db } from "./db"

/**
 * Prisma doesn't work on edge, and neither does the session strategy
 * hence we have to use jwt strategy
 */

// Object destructuring and immediately exporting
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
  },
  ...authConfig,
})
