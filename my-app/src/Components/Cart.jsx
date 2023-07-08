import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cart = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://voyawander-server.onrender.com/hotels/${id}`);
        setData(response.data);
      } catch (err) {
        console.log('Error:', err);
      }
    };

    fetchData();
  }, [id]);

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Cart Page</h1>
      <img id="image" src={data.url} alt="url" />
      <div id="innerdiv">
        <h4>{data.title}</h4>
        <h4>₹ {data.cost}</h4>
      </div>
      <h4 id="desc">{data.description}</h4>
    </div>
  );
};

export default Cart;