import { Box, Heading, Container, Text, Stack } from "@chakra-ui/react";
import { MailCheck } from "lucide-react";

export default function Content() {
  return (
    <>
      <Container maxW={"2xl"} maxH={{ base: "100%", md: "70%" }}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={"bold"}
            fontSize={{ base: "2xl", sm: "4xl", md: "4xl" }}
            lineHeight={"110%"}
          >
            Please verify your email...
          </Heading>
          <Box ml={{ base: "10rem", md: "300px" }} mt={"-30px"}>
            <MailCheck size={"80px"} color="#42526E" strokeWidth="1.33" />
          </Box>
          <Text color={"#2C3E5D"} mb={"-10px"} mt={"-40px"}>
            Please verify your email address.We've sent an confirmation email
            to:
            <br></br>
            <Text fontWeight={"bold"} color={"black"}>
              account@refro.design
            </Text>
            <br></br>
            <Text>
              Click that confirmation link in that email to begin using Dribble.
            </Text>
            <br></br>
            <Text>
              Didn't receive the email?Check your spam folder,it may have been
              caught by a filter.If you don't see it,you can{" "}
              <span style={{ fontWeight: "bold", color: "#CD519D" }}>
                resend the confirmation email.
              </span>
            </Text>
            <br></br>
            <Text>
              Wrong email address?
              <span style={{ fontWeight: "bold", color: "#CD519D" }}>
                Change it.
              </span>
            </Text>
          </Text>
        </Stack>
      </Container>
    </>
  );
}
