import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "To do app",
    description:
      "A simple and intuitive task management app built with React, allowing users to add, complete, and remove tasks using a clean and responsive interface.",
    getImageSrc: () => require("../images/photo1.jpg"),
  },
  {
    title: "Sree's tasty kitchen",
    description:
      "A modern restaurant website built using React and TypeScript, designed to showcase the restaurant’s menu, services, and brand identity. The application uses Material Design components to deliver a clean, responsive, and user-friendly interface. This project demonstrates strong component structuring, type-safe development, and attention to UI consistency and usability.",
    getImageSrc: () => require("../images/photo2.jpg"),
  },
  {
    title: "Remote Job Finder",
    description:
      "A remote job finder using Angular 21 and the Remotive API, delivering a responsive, user-friendly interface for searching and filtering remote job opportunities.",
    getImageSrc: () => require("../images/photo3.jpg"),
  },
  // {
  //   title: "Photo Gallery",
  //   description:
  //     "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
  //   getImageSrc: () => require("../images/photo3.jpg"),
  // },
  // {
  //   title: "Event planner",
  //   description:
  //     "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
  //   getImageSrc: () => require("../images/photo4.jpg"),
  // },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
