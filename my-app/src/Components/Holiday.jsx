import React, { useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import { Card, CardHeader, CardBody, CardFooter,Image,Stack,Heading,Text,Divider,ButtonGroup,Button, Flex } from '@chakra-ui/react'
import styles from "../Style/Holiday.css";
import Background from "../image/BG.PNG";
import Cart from './Cart';

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
  const[page,setPage]=useState(1);
 
  

  const getData = async (page) => {
    dispatch({ type: 'FETCH_LOADING' });
    try {
      const response = await axios.get('https://voyawander-server.onrender.com/hotels',{
        params:{
          _page:page,
          _limit:6,
        }
      });
      dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
      console.log(response);
    } catch (err) {
      console.log('Error:', err);
      dispatch({ type: 'FETCH_ERROR' });
    }
  };

  useEffect(() => {
    getData(page);
  }, [page]);

  const { data, error, loading } = state;

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Something went wrong</h1>;
  }

  console.log(data);
 const handleView=(elem)=>{
  <Cart/>
 }
  return (
    <div style={{backgroundImage: "url(" + Background + ")"} }>
      <h1>Holiday</h1>
    <div id='Body' >
      {data?.map((elem, i) => (
        <div key={i} id="main">
          <img id="image" src={elem.url} alt="url" />
          <div id="innerdiv">
            <h4>{elem.title}</h4>
            <h4>₹ {elem.cost}</h4>
          </div>
          <h4 id="desc">{elem.description}</h4>
          <div id='booking'>
          <button className='book' onClick={()=>(handleView(elem))}>View Booking</button>
          <button className='book'>Search hotel </button>
          </div>
        </div>
      ))}
      </div>
          <div id='body2'>
            <button className='pg' onClick={()=>setPage(page-1)}>Previous</button>
            <h3 id="page-number">{page}</h3>
            <button className='pg' onClick={()=>setPage(page+1)}>Next</button>
          </div>
      </div>
    
  );
};

export default Holiday;