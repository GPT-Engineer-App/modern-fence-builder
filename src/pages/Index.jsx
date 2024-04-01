import React from "react";
import { Box, Heading, Text, Button, Stack, Image, Grid, GridItem, Container, Icon } from "@chakra-ui/react";
import { FaPhone, FaRuler, FaPencilAlt, FaCheckCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box bg="gray.100" py={20}>
        <Container maxW="container.lg">
          <Grid templateColumns="repeat(2, 1fr)" gap={8} alignItems="center">
            <GridItem>
              <Heading as="h1" size="2xl" mb={4}>
                Modern Fences
              </Heading>
              <Text fontSize="xl" mb={8}>
                Elevate your property with our sleek and durable fencing solutions.
              </Text>
              <Button colorScheme="blue" size="lg">
                Get a Quote
              </Button>
            </GridItem>
            <GridItem>
              <Image src="https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmZW5jZXxlbnwwfHx8fDE3MTE5OTExNjB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Modern Fence" />
            </GridItem>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={10} textAlign="center">
            Our Services
          </Heading>
          <Grid templateColumns="repeat(3, 1fr)" gap={8}>
            <GridItem>
              <Icon as={FaRuler} boxSize={12} color="blue.500" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Custom Design
              </Heading>
              <Text>We create fences tailored to your unique style and needs.</Text>
            </GridItem>
            <GridItem>
              <Icon as={FaPencilAlt} boxSize={12} color="blue.500" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Expert Installation
              </Heading>
              <Text>Our skilled team ensures precise and efficient fence installation.</Text>
            </GridItem>
            <GridItem>
              <Icon as={FaCheckCircle} boxSize={12} color="blue.500" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Quality Materials
              </Heading>
              <Text>We use premium materials for long-lasting and attractive fences.</Text>
            </GridItem>
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box bg="blue.500" py={20} color="white">
        <Container maxW="container.lg" textAlign="center">
          <Heading as="h2" size="xl" mb={4}>
            Get Started Today
          </Heading>
          <Text fontSize="xl" mb={8}>
            Enhance your property's security and appeal with a modern fence.
          </Text>
          <Stack direction="row" spacing={4} justifyContent="center">
            <Button colorScheme="white" variant="outline">
              Learn More
            </Button>
            <Button colorScheme="white">
              <Icon as={FaPhone} mr={2} />
              Contact Us
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
