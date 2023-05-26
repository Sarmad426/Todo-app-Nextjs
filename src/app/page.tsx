import TodoItem from "@/components/TodoItem";
import prisma from "@/db";

import Link from "next/link";
interface Todo {
  title: string;
  id: string;
  complete: boolean;
}
function getTodos() {
  return prisma.todo.findMany();
}
export default async function Home() {
  let todos: Todo[] = await getTodos();
  async function toggleTodo(id: string, complete: boolean) {
    "use server";
    await prisma.todo.update({ where: { id }, data: { complete } });
  }
  async function handleDelete(id: string) {
    "use server";
    await prisma.todo.delete({ where: { id } });
    await prisma.todo.updateMany({ data: {} });
  }
  return (
    <main className="text-center m-auto my-12">
      <Link
        href="/new"
        className="mx-10 text-green-500 underline font-semibold"
      >
        Add Task
      </Link>
      <br />
      {todos.length > 0 ? (
        todos.map((todo: Todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              toggleTodo={toggleTodo}
              handleDelete={handleDelete}
            />
          );
        })
      ) : (
        <h2 className="my-8 text-2xl font-medium">No Tasks</h2>
      )}
    </main>
  );
}
