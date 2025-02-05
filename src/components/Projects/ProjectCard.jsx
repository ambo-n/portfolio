import React from "react";
import { Badge, Box, Card, HStack, Image } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";

function ProjectCard({ projectData }) {
  return (
    <Card.Root flexDirection="column" overflow="hidden">
      <Box display="flex" justifyContent="center">
        <Image objectFit="cover" width="100%" src={projectData.image} />
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
          <Button href={projectData.github} padding="6px">
            Source Code on Github
          </Button>
          {projectData.site ? (
            <Button href={projectData.site} padding="6px">
              Deployed Site
            </Button>
          ) : null}
        </Card.Footer>
      </Box>
    </Card.Root>
  );
}

export default ProjectCard;
