"use client";

import { NextPage } from "next";
import { useActionState } from "react";
import { createBook } from "../../actions/book";
import { Table, TCell, THeadCell } from "../../table";

const BookFormPage: NextPage = () => {
  const [error, submitAction, isPending] = useActionState<string, FormData>(
    createBook,
    ""
  );

  if (error) {
    return <div>ERROR</div>;
  }

  if (isPending) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      <h1>Create Book</h1>
      <form action={submitAction}>
        <Table>
          <tbody>
            <tr>
              <THeadCell>
                <label htmlFor="title">Title</label>
              </THeadCell>
              <TCell>
                <input type="text" id="title" name="title" size={60} />
              </TCell>
            </tr>
            <tr>
              <THeadCell>
                <label htmlFor="author">Author</label>
              </THeadCell>
              <TCell>
                <input type="text" id="author" name="author" size={60} />
              </TCell>
            </tr>
            <tr>
              <THeadCell>
                <label htmlFor="language">Language</label>
              </THeadCell>
              <TCell>
                <input type="text" id="language" name="language" size={60} />
              </TCell>
            </tr>
            <tr>
              <THeadCell>
                <label htmlFor="isbn">ISBN</label>
              </THeadCell>
              <TCell>
                <input type="text" id="isbn" name="isbn" size={60} />
              </TCell>
            </tr>
            <tr>
              <TCell></TCell>
              <TCell>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Submit
                </button>
              </TCell>
            </tr>
          </tbody>
        </Table>
      </form>
    </>
  );
};

export default BookFormPage;
