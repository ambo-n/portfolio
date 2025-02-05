import React from "react";
import { Badge, Box, Card, HStack, Image } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";

function ProjectCard({ projectData }) {
  return (
    <Card.Root flexDirection="column" overflow="hidden">
      <Box display="flex" justifyContent="center">
        <Image
          objectFit="cover"
          width="100px"
          height="100px"
          src={projectData.image}
        />
      </Box>
      <Box margin={["1rem", "2rem"]}>
        <Card.Body>
          <Card.Title mb="2">{projectData.title}</Card.Title>
          <Card.Description>{projectData.description}</Card.Description>
          <HStack mt="4">
            {projectData.languages.map((languages, key) => {
              return (
                <Badge
                  key={key}
                  border="1px solid #6EDD4F"
                  padding="8px"
                  marginBottom="10px"
                >
                  {languages}
                </Badge>
              );
            })}
          </HStack>
        </Card.Body>
        <Card.Footer>
          <a
            href={projectData.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button padding="6px">Source Code on Github</Button>
          </a>
          {projectData.site ? (
            <a
              href={projectData.site}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button padding="6px">Deployed Site</Button>
            </a>
          ) : null}
        </Card.Footer>
      </Box>
    </Card.Root>
  );
}

export default ProjectCard;
