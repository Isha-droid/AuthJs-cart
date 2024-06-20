import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

const options = {
  providers: [
    GithubProvider({
      clientId: "Ov23liWVuSFbrNNV3u2z",
      clientSecret: "7a20b7fe0fdad2b9beebd0b6f5ae9e9271dae20a",
    }),
  ],
  secret: "9qIb3PDPGF8bGgAnmdR0omPf1FZuqingnUZR+Gn5UVc=", // Ensure you set the secret here
};

const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth(options);

export { GET, POST, auth, signIn, signOut };
