import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
} from "@chakra-ui/react";
import { FileCheck2, Search } from "lucide-react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

interface Props {
  children: React.ReactNode;
}

const Links = ["Inspiration", "Work", "Design", "GoPro", "Hire "];

const NavLink = (props: Props) => {
  const { children } = props;

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#"}
    >
      {children}
    </Box>
  );
};

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"lg"}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Image
              boxSize={{ base: "100px", md: "80px" }}
              ml={{ base: "20px", md: "40px" }}
              src="dribble.png"
              alt="hello"
            ></Image>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>

          <Flex
            alignItems={"center"}
            ml={"800px"}
            width={{ base: "100%", md: "100%" }}
            display={{ base: "none", md: "flex" }}
          >
            <InputGroup size="sm">
              <InputLeftElement pointerEvents="none">
                <Search size={16} />
              </InputLeftElement>
              <Input
                variant="filled"
                placeholder="Search"
                width={"100px"}
                pl={8}
              />
            </InputGroup>
            <Box ml={"-170px"}>
              <FileCheck2 size={"20px"} color="#44546F" />
            </Box>
            <Spacer />
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={{ base: "lg", md: "sm" }}
                  mr={"20px"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
                <Button
                  as={"a"}
                  display={{ base: "none", md: "inline-flex" }}
                  fontSize={"sm"}
                  fontWeight={600}
                  color={"white"}
                  bg={"pink.400"}
                  href={"#"}
                  _hover={{
                    bg: "pink.300",
                  }}
                >
                  Upload
                </Button>
              </MenuButton>

              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
