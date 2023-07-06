import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import axios from "axios";

export default function SignupCard() {
  const toast = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  // Handle success
  const handleSuccess = () => {
    toast({
      title: "Account created.",
      description: "We've created your account for you.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/users",
        formData
      ); // Adjust the API endpoint accordingly
      console.log(response.data); // Optional: Log the response data
      // Reset the form after successful submission
      handleSuccess();
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box mt={-20}>
      <Box bgColor={"#29335c"} h={20}></Box>

      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("skyblue")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Sign up
            </Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to explore and book your next trip with us ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <form onSubmit={handleSubmit}>
              <Stack spacing={4}>
                <HStack>
                  <Box>
                    <FormControl id='firstName' isRequired>
                      <FormLabel>First Name</FormLabel>
                      <Input
                        type='text'
                        id='firstName'
                        value={formData.firstName}
                        onChange={handleInputChange}
                      />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id='lastName'>
                      <FormLabel>Last Name</FormLabel>
                      <Input
                        type='text'
                        id='lastName'
                        value={formData.lastName}
                        onChange={handleInputChange}
                      />
                    </FormControl>
                  </Box>
                </HStack>
                <FormControl id='email' isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input
                    type='email'
                    id='email'
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </FormControl>
                <FormControl id='password' isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      type={showPassword ? "text" : "password"}
                      id='password'
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                    <InputRightElement h={"full"}>
                      <Button
                        variant={"ghost"}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }
                      >
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Stack spacing={10} pt={2}>
                  <Button
                    loadingText='Submitting'
                    size='lg'
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                    type='submit' // Add the submit type to the button
                  >
                    Sign up
                  </Button>
                </Stack>
                <Stack pt={6} spacing={4}>
                  <Text align={"center"}>
                    Already a user? <Link color={"blue.400"}>Login</Link>
                  </Text>
                  <Text align={"center"}>Sign up with:</Text>
                  <Stack direction='row' spacing={4} justify='center'>
                    <Button
                      leftIcon={<FaGoogle />}
                      colorScheme='red'
                      // variant='outline'
                    >
                      Sign up with Google
                    </Button>
                    <Button
                      leftIcon={<FaFacebook />}
                      colorScheme='blue'
                      // variant='outline'
                    >
                      Sign up with Facebook
                    </Button>
                  </Stack>
                </Stack>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
}
