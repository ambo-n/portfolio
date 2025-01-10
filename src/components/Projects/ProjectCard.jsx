import React from "react";
import { Badge, Box, Card, HStack, Image } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";

function ProjectCard({ projectData }) {
  return (
    <Card.Root flexDirection="column" overflow="hidden" maxW="xl">
      <Image objectFit="cover" maxW="200px" src={projectData.image} />
      <Box>
        <Card.Body>
          <Card.Title mb="2">{projectData.title}</Card.Title>
          <Card.Description>{projectData.description}</Card.Description>
          <HStack mt="4">
            {projectData.languages.map((languages, key) => {
              return <Badge key={key}>{languages}</Badge>;
            })}
          </HStack>
        </Card.Body>
        <Card.Footer>
          <Button href={projectData.github}>Source Code on Github</Button>
          {projectData.site ? (
            <Button href={projectData.site}>Deployed Site</Button>
          ) : null}
        </Card.Footer>
      </Box>
    </Card.Root>
  );
}

export default ProjectCard;
