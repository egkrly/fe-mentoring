import React, { FC } from "react";
import {
  Box,
  Container,
  Flex,
  VStack,
  Text,
  Center,
  Button,
  Avatar,
  Stack,
  StackDivider,
  flexbox,
} from "@chakra-ui/react";
import Link from "next/link";
import UsersPage from "./users";

const Home: FC = () => {
  return (
    <VStack
      divider={<StackDivider borderColor="gray.200" />}
      spacing={4}
      align="stretch"
    >
      <Container centerContent padding={10}>
        <Flex
          width="1140px"
          height="800px"
          bg="gray.700"
          color="white"
          padding={0}
          position="relative"
        >
          <Flex display="flex" height="800px" bg="gray.300" width="200px">
            <Box
              justifyContent="center"
              alignContent="center"
              width="100%"
              flexDirection="row"
            >
              <Flex margin="12px" color="black" height="40px">
                MentorApp
              </Flex>
              <Flex justifyContent="center" alignContent="center" width="100%">
                <Link href="/users">
                  <Button colorScheme="blue" size="lg" width="150px">
                    Users
                  </Button>
                </Link>
              </Flex>
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
                  ></Avatar>
                  <Text color="black" margin="auto">
                    Czipa Andras
                  </Text>
                </Flex>
              </Flex>
            </Box>
          </Flex>
          <Flex flex={1} width="auto" height="auto" bg="gray.700" />
        </Flex>
      </Container>
    </VStack>
  );
};

export default Home;
