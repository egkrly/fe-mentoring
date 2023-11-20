export type User = {
  username: string;
  email: string;
  fullName: string;
  age: number;
  profilePicture: string;
};

export type UserProps = {
  user: User;
};
