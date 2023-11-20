import { User } from "./types";

const profilePicture = "https://picsum.photos/200/200";

export const mockUsers: User[] = [
  {
    username: "testuser1",
    email: "testuser1@gmail.com",
    fullName: "Test User #1",
    age: 42,
    profilePicture,
  },
  {
    username: "testuser2",
    email: "testuser2@gmail.com",
    fullName: "Test User #2",
    age: 25,
    profilePicture,
  },
  {
    username: "testuser3",
    email: "testuser3@gmail.com",
    fullName: "Test User #3",
    age: 32,
    profilePicture,
  },
  {
    username: "testuser4",
    email: "testuser4@gmail.com",
    fullName: "Test User #4",
    age: 22,
    profilePicture,
  },
  {
    username: "testuser5",
    email: "testuser5@gmail.com",
    fullName: "Test User #5",
    age: 19,
    profilePicture,
  },
];
