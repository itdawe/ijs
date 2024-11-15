"use client";

import { deleteBook } from "../../actions/book";

type Props = {
  id: string;
};

const Delete: React.FC<Props> = ({ id }) => {
  return (
    <button
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => deleteBook(id)}
    >
      DELETE
    </button>
  );
};

export default Delete;
