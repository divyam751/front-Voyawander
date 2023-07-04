import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card as ChakraCard,
  CardBody,
  CardFooter,
  Button,
  ButtonGroup,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
  Grid,
  Box,
} from "@chakra-ui/react";

const PlaceCard = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/places")
      .then((response) => {
        setPlaces(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <Box bgColor={"gray.400"}>
      <Heading
        pt={100}
        fontWeight={600}
        fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
        lineHeight={"110%"}
      >
        <Text as={"span"} color={"white"}>
          Places
        </Text>
      </Heading>
      <Grid templateColumns='repeat(4, 1fr)' gap={10} p={5}>
        {places &&
          places.map((place) => (
            <ChakraCard key={place.id} maxW='sm'>
              <CardBody>
                <Image src={place.image} alt={place.name} borderRadius='lg' />
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>{place.name}</Heading>
                  <Text color='blue.600' fontSize='2xl'>
                    Price per person: {place.price}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing='2'>
                  <Button variant='solid' colorScheme='orange'>
                    Book Now
                  </Button>
                </ButtonGroup>
                <Text color='blue.600' fontSize='2xl' pl={10}>
                  Days: {place.days}
                </Text>
              </CardFooter>
            </ChakraCard>
          ))}
      </Grid>
    </Box>
  );
};

export default PlaceCard;
