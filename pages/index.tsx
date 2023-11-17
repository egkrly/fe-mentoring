import React, { FC } from "react";
import { Flex } from "@chakra-ui/react";
import Link from "next/link";

const Home: FC = () => {
  return (
    <Flex w="100%" h="100%" flexDir="column">
      <Link href="/users">Open users page</Link>
    </Flex>
  );
};

export default Home;
