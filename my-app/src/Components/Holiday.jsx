import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import { Card, CardHeader, CardBody, CardFooter,Image,Stack,Heading,Text,Divider,ButtonGroup,Button } from '@chakra-ui/react'

const initialState = {
  data: [],
  loading: false,
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_LOADING':
      return {
        ...state,
        loading: true,
        error: false,
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false,
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        data: [],
        loading: false,
        error: true,
      };
    default:
      throw new Error('Invalid action type');
  }
};

const Holiday = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getData = async () => {
    dispatch({ type: 'FETCH_LOADING' });
    try {
      const response = await axios.get('https://voyawander-server.onrender.com/hotels');
      dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
      console.log(response);
    } catch (err) {
      console.log('Error:', err);
      dispatch({ type: 'FETCH_ERROR' });
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const { data, error, loading } = state;

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Something went wrong</h1>;
  }

  console.log(data);

  return (
    <div>
      {data?.map((elem, i) => (
        <div key={i}>
          {/* <img src={elem.url} alt="url" />
          <div>
            <p>{elem.title}</p>
            <p>{elem.description}</p>
            <p>{elem.cost}</p>
          </div> */}
          <Card maxW='sm'>
  <CardBody>
    <Image
      src={elem.url}
      alt='URL'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{elem.title}</Heading>
      <Text>
        {elem.description}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        {elem.cost}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Book
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
        </div>
      ))}
    </div>
  );
};

export default Holiday;