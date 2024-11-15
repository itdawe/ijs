"use server";

import { revalidatePath } from "next/cache";
import { errorExtractor } from "../util/errorExtractor";

export async function deleteBook(id: string) {
  await fetch(`http://localhost:3001/books/${id}`, {
    method: "DELETE",
  });
  revalidatePath("books");
}

export async function createBook(
  errorState: string,
  formData: FormData
): Promise<string> {
  try {
    const book = {
      title: formData.get("title"),
      author: formData.get("author"),
      isbn: formData.get("isbn"),
      language: formData.get("language"),
    };

    const response = await fetch("http://localhost:3001/books", {
      method: "POST",
      body: JSON.stringify(book),
    });

    if (!response.ok) {
      throw new Error("Failed to create book");
    }
  } catch (error) {
    return errorExtractor(error);
  }

  revalidatePath("/books");
  return "";
}
