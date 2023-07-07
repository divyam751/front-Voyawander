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
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { debounce } from "lodash";
import { FaSearch } from "react-icons/fa";

const PlaceCard = () => {
  const [places, setPlaces] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/places")
      .then((response) => {
        setPlaces(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleSearch = debounce((value) => {
    setSearchTerm(value);
  }, 100);

  const filteredPlaces = places.filter((place) =>
    place.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  async function handleDelete() {
    const url = "http://localhost:8080/data/1"; // Replace with your delete endpoint
    try {
      const response = await axios.delete(url);
      console.log("Data deleted successfully:", response.data);
    } catch (error) {
      console.error("Error deleting data:", error.response.data);
    }
  }

  const handleClick = (place) => {
    const newData = {
      placeName: place.name,
      placePrice: place.price,
      placeImage: place.image,
      days: place.days,
      id: 1,
    };

    axios
      .get("http://localhost:8080/data")
      .then((response) => {
        setData(response.data.length);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error storing data:", error);
      });

    if (data !== null) {
      handleDelete();

      axios
        .post("http://localhost:8080/data", newData)
        .then((response) => {
          console.log("Data stored:", response.data);
        })
        .catch((error) => {
          console.error("Error storing data:", error);
        });
    } else {
      axios
        .post("http://localhost:8080/data", newData)
        .then((response) => {
          console.log("Data stored:", response.data);
        })
        .catch((error) => {
          console.error("Error storing data:", error);
        });
    }

    window.location.href = "/hotels";
  };

  return (
    <Box bgColor={"#cceaf7"} marginTop={-40}>
      <Box bgColor={"#29335c"} h={160}></Box>
      <Heading
        pt={100}
        fontWeight={600}
        fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
        lineHeight={"110%"}
      >
        <Text as={"span"} color={"black"}>
          Search your destination
        </Text>
      </Heading>
      <Flex justifyContent={"center"}>
        <InputGroup mt={4} mb={6} w={600} size={"lg"}>
          <InputLeftElement
            pointerEvents='none'
            children={<Icon as={FaSearch} color='gray.500' />}
          />
          <Input
            type='text'
            placeholder='Search by place name'
            onChange={(e) => handleSearch(e.target.value)}
            value={searchTerm}
          />
        </InputGroup>
      </Flex>
      <Grid templateColumns='repeat(4, 1fr)' gap={10} p={5}>
        {filteredPlaces.map((place) => (
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
                <Button
                  variant='solid'
                  colorScheme='orange'
                  onClick={() => {
                    handleClick(place);
                  }}
                >
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
