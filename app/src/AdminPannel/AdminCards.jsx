import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card as ChakraCard,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
  Text,
  Grid,
  Box,
} from "@chakra-ui/react";

const AdminCards = (update) => {
  const [msgs, setMsgs] = useState([]);
  const getMessages = () => {
    return axios
      .get("http://localhost:8080/messages")
      .then((response) => {
        setMsgs(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <Box bgColor={"green.400"}>
      <Heading
        pt={100}
        fontWeight={600}
        fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
        lineHeight={"110%"}
      >
        <Text as={"span"} color={"white"}>
          Messages
        </Text>
      </Heading>
      <Grid templateColumns='repeat(1, 1fr)' gap={10} p={5}>
        {msgs &&
          msgs.map((msg) => (
            <ChakraCard key={msg.id} minW={800}>
              <CardBody>
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>{msg.Name}</Heading>
                  <Text color='blue.600' fontSize='2xl'>
                    Email: {msg.Email}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <Text color='blue.600' fontSize='2xl' pl={10}>
                  Message: {msg.Message}
                </Text>
              </CardFooter>
            </ChakraCard>
          ))}
      </Grid>
    </Box>
  );
};

export default AdminCards;
