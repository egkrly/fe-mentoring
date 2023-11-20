import React, { FC } from "react";
import {
  Container,
  Flex,
  VStack,
  Text,
  Button,
  Avatar,
  Wrap,
  Table,
  TableContainer,
  Th,
  Thead,
  Tr,
  Tbody,
} from "@chakra-ui/react";
import Link from "next/link";
import UserArray from "../features/users/components/User";
import Users from "../features/users/components/Users";

const Home: FC = () => {
  return (
    <VStack spacing={4} align="stretch">
      <Container centerContent padding={10}>
        <Flex
          width="1140px"
          height="800px"
          bg="gray.700"
          color="white"
          padding={0}
          position="relative"
        >
          <Flex height="800px" bg="gray.300" width="200px">
            <Flex flexDirection="column">
              <Flex margin="12px" color="black" height="40px">
                MentorApp
              </Flex>
              <Wrap spacing={4} justify={"center"}>
                <Flex>
                  <Link href="/Users">
                    <Button colorScheme="blue" size="lg" width="150px">
                      Users
                    </Button>
                  </Link>
                </Flex>
                <Flex>
                  <Link href="/Users">
                    <Button colorScheme="blue" size="lg" width="150px">
                      teszt
                    </Button>
                  </Link>
                </Flex>
              </Wrap>
              <Flex
                position="absolute"
                bottom="15px"
                width="200px"
                justifyContent="center"
              >
                <Flex justifyContent="space-between" textAlign="center">
                  <Avatar
                    padding="5px"
                    width="50px"
                    height="50px"
                    size="sm"
                    name="Dan Abrahmov"
                    src="https://bit.ly/dan-abramov"
                  />
                  <Text color="black" margin="auto">
                    Czipa Andras
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex flex={1} width="auto" height="auto" bg="gray.700">
            <Users />
          </Flex>
        </Flex>
      </Container>
    </VStack>
  );
};

export default Home;
