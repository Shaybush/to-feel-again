import NextAuth, { DefaultSession } from "next-auth"
import "next-auth/jwt"
import bcrypt from "bcrypt"
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "@/lib/db"

// Define Role enum to match Prisma schema
export enum Role {
  USER = "USER",
  ADMIN = "ADMIN"
}

export const { handlers, auth, signIn, signOut, unstable_update } = NextAuth({
  debug: !!process.env.AUTH_DEBUG,
  adapter: PrismaAdapter(db),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", required: true },
        password: { label: "Password", type: "password", required: true },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          throw new Error("Missing username or password");
        }

        const user = await db.user.findUnique({
          where: { username: credentials.username as string },
        });

        if (user && await bcrypt.compare(credentials.password as string, user.password)) {
          return user
        }

        throw new Error("Invalid username or password");
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: +process.env.NEXTAUTH_SECRET_EXPIRES_IN! || 2592000,
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user }) {
      if (!user.username) {
        user.username = user.email as string;
      }

      if (!user?.password) {
        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash('Aa123456', salt);
      }
      return true;
    },
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl
      if (pathname === "/middleware-example") return !!auth
      return true
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          ...session.user,
          id: token.id as string,
          email: token.email as string,
          role: token.role as Role,
        };
      }
      return session;
    },
  },
  trustHost: true,
})

declare module "@auth/core/adapters" {
  interface AdapterUser {
    role: Role;
    username?: string;
    password: string;
  }
}

declare module "next-auth" {
  interface User {
    role: Role;
    username?: string | null;
    password?: string | null;
  }

  interface Session {
    accessToken?: string;
    user: {
      id?: string;
      email?: string;
      username?: string;
      role: Role;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: Role;
  }
}
