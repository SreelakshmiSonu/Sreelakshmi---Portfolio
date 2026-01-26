import React from "react";
import { Avatar, Heading, VStack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Sree!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4}>
      <Avatar
        src=""
        size="2xl"
      />
      <Heading as="h1" size="lg">
        {greeting}
      </Heading>
      <Text fontSize="xl">{bio1}</Text>
      <Text fontSize="xl">{bio2}</Text>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
