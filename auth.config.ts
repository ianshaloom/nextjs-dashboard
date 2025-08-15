import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 60 * 60, // 1 hour
    updateAge: 60 * 15, // 15 minutes
  },
  callbacks: {
   async jwt({ token, user }) {
      // Add user info to token when user signs in
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }

      return token;
    },
    async session({ session, token }) {
      // Only create session if token is valid (user exists in database)
      if (!token) {
        // Force sign out by throwing error
        throw new Error("Invalid session - user no longer exists");
      }

      // Add user info from token to session
      session.user.id = token.id as string;
      session.user.email = token.email as string;
      session.user.name = token.name as string;

      return session;
    },
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/dashboard", nextUrl));
      }
      return true;
    },
  },
  providers: [], // Providers are configured in auth.ts
} satisfies NextAuthConfig;
