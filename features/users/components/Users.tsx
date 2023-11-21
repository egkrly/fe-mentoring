import React, { FC, useState } from "react";
import { User } from "@/features/users/types";
import { mockUsers } from "@/features/users/utils";
import UserArray from "./User";
import {
  Button,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

export const Users: FC = () => {
  const [users, setUsers] = useState<User[]>(mockUsers);
  return (
    <TableContainer width="100%" margin="12px" overflowY="scroll">
      <Table variant="simple" colorScheme="whiteAlpha">
        <Thead>
          <Button margin="12px">+ NEW</Button>
          <Tr>
            <Th>Id</Th>
            <Th>Username</Th>
            <Th>Email</Th>
            <Th>Name</Th>
            <Th>Age</Th>
            <Th>Picture</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user) => (
            <UserArray user={user} key={user.id} />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Users;
