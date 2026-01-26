import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      spacing={4}
      align="start"
      backgroundColor="white"
      color="gray.800"
      borderRadius="xl"
      overflow="visible"
      boxShadow="md"
      w="100%"
    >
      <Image src={imageSrc} alt={title} w="100%" borderTopRadius="xl" h="100%"/>
      <VStack spacing={2} align="start" p={4}>
        <Heading size="md">{title}</Heading>
        <Text color="gray.600">{description}</Text>
        <HStack>
          <Text fontWeight="bold">See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
