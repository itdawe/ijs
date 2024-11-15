import { User } from "../types/user";

export async function getAllUsers(): Promise<User[]> {
  const response = await fetch("http://localhost:3001/users");
  const users = (await response.json()) as User[];
  return users;
}
