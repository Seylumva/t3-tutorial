import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Todo } from "@prisma/client";
import { api } from "~/utils/api";
import { SignIn, SignInButton, SignOutButton, useUser } from "@clerk/nextjs";

const Home: NextPage = () => {
  const { data: todos } = api.todo.getAll.useQuery();
  const user = useUser();

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        {!user.isSignedIn && <SignInButton />}
        {!!user.isSignedIn && <SignOutButton />}
        <div>
          {todos?.map((post: Todo) => (
            <p key={post.id}>{post.content}</p>
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
