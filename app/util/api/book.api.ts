import { Book } from "../types/book";
import { wait } from "../wait";

export async function getAllBooks(): Promise<Book[]> {
  const response = await fetch("http://localhost:3001/books");
  return (await response.json()) as Book[];
}

export async function getBook(id: string): Promise<Book | undefined> {
  await wait(3_000);

  const response = await fetch(`http://localhost:3001/books/${id}`);
  return (await response.json()) as Book;
}
