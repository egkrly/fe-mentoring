import React, { FC } from "react";
import {
  TableContainer,
  Table,
  Button,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";

const UsersPage: FC = () => {
  return (
    <TableContainer width="100%" margin="12px">
      <Table variant="simple" colorScheme="whiteAlpha">
        <Thead>
          <Button margin="12px">+ NEW</Button>
          <Tr>
            <Th>Username</Th>
            <Th>Email</Th>
            <Th>Name</Th>
            <Th>Age</Th>
            <Th>Picture</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>{}</Td>
            <Td>{}</Td>
            <Td>{}</Td>
            <Td>{}</Td>
            <Td>{}</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default UsersPage;
