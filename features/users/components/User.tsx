import React, { FC } from "react";
import { Tr, Td, Image } from "@chakra-ui/react";
import { UserProps } from "@/features/users/types";

export const UserArray: FC<UserProps> = ({
  user: { username, name, email, age, profilePicture, id },
}) => {
  return (
    <Tr>
      <Td>{id}</Td>
      <Td>{username}</Td>
      <Td>{email}</Td>
      <Td>{name}</Td>
      <Td>{age}</Td>
      <Td>
        <Image
          src={profilePicture}
          borderRadius="50%"
          height="150px"
          alt="avatar"
        />
      </Td>
    </Tr>
  );
};

export default UserArray;
