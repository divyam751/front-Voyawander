import React, { useEffect, useReducer, useState } from 'react';
import axios from 'axios';
// import { Card, CardHeader, CardBody, CardFooter,Image,Stack,Heading,Text,Divider,ButtonGroup,Button, Flex } from '@chakra-ui/react'
import styles from "../Style/Holiday.css";
import Background from "../image/BG.PNG";
import Cart from './Cart';
import { Routes, useNavigate,Route } from 'react-router-dom';

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
  const navigate=useNavigate();
  

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

  // console.log(data);
 const handleBook=(elem)=>{
  <Cart elem={elem}/>
  console.log(elem);
 }

const navigateToCart=()=>{
  navigate('/cart');
  console.log("clicked")
}

  return (
    <div style={{backgroundImage: "url(" + Background + ")"} }>
      <h1>Find Popular Destintions</h1>
      <h3 id='title'>Escape the ordinary and explore the extraordinary-with our handpicked selection of destinations and travel deals,you'll be able to create the trip of your dreams </h3>
    <div id='Body' >
      {data?.map((elem, i) => (
        <div key={i} id="main">
          <img id="image" src={elem.url} alt="url" />
          <div id="innerdiv">
            <h4>{elem.title}</h4>
            <h4>₹ {elem.cost}</h4>
          </div>
          <p id="desc">{elem.description}</p>
          <button className='book' onClick={()=>handleBook(elem)}>Book Now</button>
          <div id='booking'>
          <button className='book' onClick={navigateToCart }>View Booking</button>
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