import { NextPage } from "next";
import { getAllUsers } from "../util/api/user.api";
import { User } from "../util/types/user";

const UsersPage: NextPage = async () => {
  let users: User[] = [];
  let errorMessage = "";

  try {
    users = await getAllUsers();
  } catch (error) {
    if (error instanceof Error) {
      errorMessage = error.message;
    }
  }

  return (
    <div>
      <h1>Users</h1>
      {errorMessage && <p>{errorMessage}</p>}
      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UsersPage;
