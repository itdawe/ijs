import { NextPage } from "next";
import Link from "next/link";
import { Table, TBody, TCell, THeadCell } from "../../table";
import { getAllBooks, getBook as getBookById } from "../../util/api/book.api";
import { errorExtractor } from "../../util/errorExtractor";
import { Book } from "../../util/types/book";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const BookDetailPage: NextPage<Props> = async ({ params }: Props) => {
  const { id } = await params;
  let book: Book | undefined = undefined;
  let errorMessage = "";

  try {
    book = await getBookById(id);
  } catch (error) {
    errorMessage = errorExtractor(error);
  }

  return (
    <div>
      {errorMessage && <p>{errorMessage}</p>}
      {book && (
        <>
          <h1>Details of {book.title}</h1>
          <Table>
            <TBody>
              <tr>
                <THeadCell>ID</THeadCell>
                <TCell>{book.id}</TCell>
              </tr>
              <tr>
                <THeadCell>Title</THeadCell>
                <TCell>{book.title}</TCell>
              </tr>
              <tr>
                <THeadCell>Author</THeadCell>
                <TCell>{book.author}</TCell>
              </tr>
              <tr>
                <THeadCell>Language</THeadCell>
                <TCell>{book.language}</TCell>
              </tr>
              <tr>
                <THeadCell>Release</THeadCell>
                <TCell>{book.release}</TCell>
              </tr>
              <tr>
                <THeadCell>ISBN</THeadCell>
                <TCell>{book.isbn}</TCell>
              </tr>
              <tr>
                <THeadCell>Rating</THeadCell>
                <TCell>{book.rating}</TCell>
              </tr>
            </TBody>
          </Table>

          <div className="flex justify-center">
            <Link
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              href="/books"
            >
              Back
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default BookDetailPage;

export async function generateStaticParams() {
  try {
    const books = await getAllBooks();
    return books
      .filter((book) => book.rating > 4)
      .map((book) => ({ id: book.id }));
  } catch {
    return [];
  }
}
