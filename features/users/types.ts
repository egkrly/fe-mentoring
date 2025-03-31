export type User = {
  id: string;
  username: string;
  email: string;
  name: string;
  age: number;
  profilePicture: string;
};

export type UserProps = {
  user: User;
};
