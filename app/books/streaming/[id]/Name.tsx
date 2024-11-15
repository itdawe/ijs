import { getBook } from "../../../util/api/book.api";

type Props = {
  id: string;
};

const Name: React.FC<Props> = async ({ id }) => {
  const book = await getBook(id);

  return <div>{book?.title}</div>;
};

export default Name;
