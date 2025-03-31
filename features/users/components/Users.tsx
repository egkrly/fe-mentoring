import React, { FC, useState, ChangeEvent, useEffect } from "react";
import { User } from "@/features/users/types";
import { mockUsers } from "@/features/users/utils";
import UserArray from "./User";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalOverlay,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
  HStack,
  Box,
  InputGroup,
  InputLeftElement,
  IconButton,
  useToast,
  Flex,
  ModalContent,
  ModalCloseButton,
  ModalFooter,
  ModalHeader,
} from "@chakra-ui/react";
import { SearchIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";

export const Users: FC = () => {
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    name: "",
    age: "",
    profilePicture: "",
  });
  const toast = useToast();

  // Filter users based on search query
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleOpenModal = () => {
    setFormData({
      username: "",
      email: "",
      name: "",
      age: "",
      profilePicture: "",
    });
    setEditingUser(null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDeleteUser = (userId: string) => {
    setUsers(users.filter((user) => user.id !== userId));
    toast({
      title: "User deleted",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleEditUser = (user: User) => {
    setFormData({
      username: user.username,
      email: user.email,
      name: user.name,
      age: user.age.toString(),
      profilePicture: user.profilePicture,
    });
    setEditingUser(user);
    setIsModalOpen(true);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSaveUser = () => {
    const newUser = {
      id: editingUser ? editingUser.id : Date.now().toString(),
      username: formData.username,
      email: formData.email,
      name: formData.name,
      age: parseInt(formData.age) || 0,
      profilePicture:
        formData.profilePicture || "https://via.placeholder.com/150",
    };

    if (editingUser) {
      setUsers(
        users.map((user) => (user.id === editingUser.id ? newUser : user))
      );
      toast({
        title: "User updated",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } else {
      setUsers([...users, newUser]);
      toast({
        title: "User added",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    }
    setIsModalOpen(false);
  };

  return (
    <>
      <Flex justifyContent="space-between" alignItems="center" margin="12px">
        <Button onClick={handleOpenModal}>+ NEW</Button>

        <InputGroup maxW="300px">
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input
            placeholder="Search users..."
            value={searchQuery}
            onChange={handleSearch}
          />
        </InputGroup>
      </Flex>

      <TableContainer width="100%" margin="12px" overflowY="scroll">
        <Table variant="simple" colorScheme="whiteAlpha">
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Username</Th>
              <Th>Email</Th>
              <Th>Name</Th>
              <Th>Age</Th>
              <Th>Picture</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredUsers.map((user) => (
              <Tr key={user.id}>
                <UserArray user={user} />
                <Th>
                  <HStack spacing={2}>
                    <IconButton
                      aria-label="Edit user"
                      icon={<EditIcon />}
                      size="sm"
                      colorScheme="blue"
                      onClick={() => handleEditUser(user)}
                    />
                    <IconButton
                      aria-label="Delete user"
                      icon={<DeleteIcon />}
                      size="sm"
                      colorScheme="red"
                      onClick={() => handleDeleteUser(user.id)}
                    />
                  </HStack>
                </Th>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        size="lg"
        scrollBehavior="inside"
        motionPreset="slideInTop"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {editingUser ? "Edit User" : "Add New User"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl mb={3}>
              <FormLabel>Username</FormLabel>
              <Input
                name="username"
                placeholder="Enter username"
                value={formData.username}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl mb={3}>
              <FormLabel>Email</FormLabel>
              <Input
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl mb={3}>
              <FormLabel>Name</FormLabel>
              <Input
                name="name"
                placeholder="Enter full name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl mb={3}>
              <FormLabel>Age</FormLabel>
              <Input
                name="age"
                placeholder="Enter age"
                type="number"
                value={formData.age}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl mb={3}>
              <FormLabel>Picture URL</FormLabel>
              <Input
                name="profilePicture"
                placeholder="Enter picture URL"
                value={formData.profilePicture}
                onChange={handleInputChange}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <HStack spacing={3}>
              <Button colorScheme="blue" onClick={handleSaveUser}>
                {editingUser ? "Update" : "Save"}
              </Button>
              <Button variant="ghost" onClick={handleCloseModal}>
                Cancel
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Users;
