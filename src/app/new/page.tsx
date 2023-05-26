import React from "react";
import Link from "next/link";
import prisma from "@/db";
import { redirect } from "next/navigation";
async function createTodo(data: FormData) {
  "use server";
  const title = data.get("todo")?.valueOf();
  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid Title");
  }
  await prisma.todo.create({
    data: {
      title,
      complete: false,
    },
  });
  redirect("/");
}

const New = () => {
  return (
    <div className="lg:text-center lg:m-auto mt-5 pt-5 sm:text-center sm:m-auto">
      <h1 className="font-semibold text-2xl text-orange-400">New Task</h1>
      <form action={createTodo}>
        <input
          type="text"
          className="w-full bg-transparent mx-2 sm:w-1/2 lg:w-1/3 rounded-md px-4 py-2 h-12 border-2 border-orange-500 my-12 focus:border-green-500 focus:outline-none"
          name="todo"
          autoComplete="off"
        />
        <button
          type="submit"
          className="mt-0 bg-green-600 rounded-md m-6 py-2 px-4 text-1xl text-white hover:bg-green-500"
        >
          Submit
        </button>
      </form>
      <Link href="/" className="mx-10 text-green-500 underline font-semibold">
        View Tasks
      </Link>
    </div>
  );
};

export default New;
