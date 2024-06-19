import NextAuth from "next-auth";
import Github from "next-auth/providers/github";

const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    Github({
      clientId: "Ov23liWVuSFbrNNV3u2z",
      clientSecret: "7a20b7fe0fdad2b9beebd0b6f5ae9e9271dae20a",
    }),
  ],
  secret:"9qIb3PDPGF8bGgAnmdR0omPf1FZuqingnUZR+Gn5UVc="
});

export { GET, POST, auth, signIn, signOut };
