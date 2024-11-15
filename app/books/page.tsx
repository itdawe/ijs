import { NextPage } from "next";
import Link from "next/link";
import { Table, TBody, TCell, THead, THeadCell } from "../table";
import { getAllBooks } from "../util/api/book.api";
import { Book } from "../util/types/book";
import Delete from "./components/delete";

const BooksListPage: NextPage = async () => {
  let books: Book[] = [];
  let errorMessage = "";

  try {
    books = await getAllBooks();
  } catch (error) {
    if (error instanceof Error) {
      errorMessage = error.message;
    } else {
      errorMessage = "An error occured";
    }
  }

  return (
    <div>
      <h1>Books</h1>
      {errorMessage && <p>{errorMessage}</p>}

      <div className="flex justify-center">
        <Link
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          href="/books/form"
        >
          Create
        </Link>
      </div>

      {books.length > 0 ? (
        <Table>
          <THead>
            <tr>
              <THeadCell>ID</THeadCell>
              <THeadCell>Title</THeadCell>
              <THeadCell>Author</THeadCell>
              <THeadCell>Language</THeadCell>
              <THeadCell>Release</THeadCell>
              <THeadCell>ISBN</THeadCell>
              <THeadCell>Rating</THeadCell>
              <THeadCell></THeadCell>
            </tr>
          </THead>
          <TBody>
            {books.map((book) => (
              <tr key={book.id}>
                <TCell>{book.id}</TCell>
                <TCell>
                  <Link href={`books/${book.id}`}>{book.title}</Link>
                </TCell>
                <TCell>{book.author}</TCell>
                <TCell>{book.language}</TCell>
                <TCell>{book.release}</TCell>
                <TCell>{book.isbn}</TCell>
                <TCell>{book.rating}</TCell>
                <TCell>
                  <Delete id={book.id} />
                </TCell>
              </tr>
            ))}
          </TBody>
        </Table>
      ) : (
        <p>No books available</p>
      )}
    </div>
  );
};

export default BooksListPage;
