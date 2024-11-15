import { NextPage } from "next";
import { Suspense } from "react";
import Name from "./Name";

type Props = {
  params: Promise<{ id: string }>;
};

const StreamingPage: NextPage<Props> = async ({ params }) => {
  const { id } = await params;
  return (
    <div>
      <h1>Streaming {id}</h1>
      <hr />
      <Suspense fallback={<div>Loading the name...</div>}>
        <Name id={id} />
      </Suspense>
    </div>
  );
};

export default StreamingPage;
