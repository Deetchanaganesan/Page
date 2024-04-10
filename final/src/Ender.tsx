import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Ender() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text color={"#2C3E5D"} ml={{ base: "10px", md: "-200px" }}>
          © 2023 Dribble. All rights reserved
        </Text>
        <Stack direction={"row"} spacing={6}>
          <Text>
            <span style={{ fontWeight: "bold" }}>20,501,853 </span>
            <span style={{ color: "#2C3E5D" }}>shots dribbled🏀</span>
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}
