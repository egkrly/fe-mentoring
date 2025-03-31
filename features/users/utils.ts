import { User } from "./types";

export const getRandomId = (length = 8): string => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
};
const profilePicture = "https://picsum.photos/200/200";

export const mockUsers: User[] = [
  {
    id: getRandomId(),
    username: "testuser1",
    email: "testuser1@gmail.com",
    name: "Test User #1",
    age: 42,
    profilePicture,
  },
  {
    id: getRandomId(),
    username: "testuser2",
    email: "testuser2@gmail.com",
    name: "Test User #2",
    age: 25,
    profilePicture,
  },
  {
    id: getRandomId(),
    username: "testuser3",
    email: "testuser3@gmail.com",
    name: "Test User #3",
    age: 32,
    profilePicture,
  },
  {
    id: getRandomId(),
    username: "testuser4",
    email: "testuser4@gmail.com",
    name: "Test User #4",
    age: 22,
    profilePicture,
  },
  {
    id: getRandomId(),
    username: "testuser5",
    email: "testuser5@gmail.com",
    name: "Test User #5",
    age: 19,
    profilePicture,
  },
];
