import React, { FC, useEffect, useState } from "react";
import {
  Container,
  Flex,
  VStack,
  Text,
  Button,
  Avatar,
  Wrap,
} from "@chakra-ui/react";
import Users from "../features/users/components/Users";

const Home: FC = () => {
  const [activeTab, setActiveTab] = useState<"main" | "users">("main");

  const handleTabChange = (tab: "main" | "users") => {
    setActiveTab(tab);
  };

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
                  <Button
                    colorScheme="blue"
                    size="lg"
                    width="150px"
                    variant={activeTab === "main" ? "solid" : "outline"}
                    onClick={() => handleTabChange("main")}
                  >
                    Main page
                  </Button>
                </Flex>
                <Flex>
                  <Button
                    colorScheme="blue"
                    size="lg"
                    width="150px"
                    variant={activeTab === "users" ? "solid" : "outline"}
                    onClick={() => handleTabChange("users")}
                  >
                    Users
                  </Button>
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
            {activeTab === "users" ? (
              <Users />
            ) : (
              <Flex justifyContent="center" alignItems="center" width="100%">
                <Text fontSize="2xl">Welcome to the Main Page</Text>
              </Flex>
            )}
          </Flex>
        </Flex>
      </Container>
    </VStack>
  );
};

export default Home;
