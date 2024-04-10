import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import {
  Aperture,
  Facebook,
  Instagram,
  LayoutGrid,
  Twitter,
} from "lucide-react";
import { ReactNode } from "react";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr " }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Image
              boxSize={{ base: "100px", md: "80px" }}
              ml={{ base: "10px", md: "-200px" }}
              mt={{ base: "10px", md: "-30px" }}
              src="dribble.png"
              alt="hello"
            ></Image>
            <Text
              fontSize={"sm"}
              mt={"-40px"}
              textAlign={"left"}
              ml={{ base: "10px", md: "-200px" }}
              noOfLines={2}
            >
              Dribble is the world's leading community for creatives <br></br>to
              share,grow and get hired.
            </Text>
            <Stack
              direction={"row"}
              spacing={5}
              ml={{ base: "10px", md: "-200px" }}
            >
              <Aperture />
              <Twitter />
              <Facebook />
              <Instagram />
              <LayoutGrid />
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>For designers</ListHeader>
            <Box as="a" href={"#"}>
              Go Pro
            </Box>
            <Box as="a" href={"#"}>
              Explore design work
            </Box>
            <Box as="a" href={"#"}>
              Design Blog
            </Box>
            <Box as="a" href={"#"}>
              Overtime podcast
            </Box>
            <Box as="a" href={"#"}>
              Payoffs
            </Box>
            <Box as="a" href={"#"}>
              Weekly warm up
            </Box>
            <Box as="a" href={"#"}>
              Refer a friend
            </Box>
            <Box as="a" href={"#"}>
              Code of conduct
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Hire designers</ListHeader>
            <Box as="a" href={"#"}>
              Post a job opening
            </Box>
            <Box as="a" href={"#"}>
              Post a freelance project
            </Box>
            <Box as="a" href={"#"}>
              Search for designers
            </Box>
            <ListHeader>Brands</ListHeader>
            <Box as="a" href={"#"}>
              Advertise with us
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Box as="a" href={"#"}>
              About
            </Box>
            <Box as="a" href={"#"}>
              Carrers
            </Box>
            <Box as="a" href={"#"}>
              Support
            </Box>
            <Box as="a" href={"#"}>
              Media Kit
            </Box>
            <Box as="a" href={"#"}>
              Testimonials
            </Box>
            <Box as="a" href={"#"}>
              API
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
