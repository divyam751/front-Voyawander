import { Box, Flex, Input, InputGroup, InputRightElement, Link, Text, FlexItem,InputRightAddon, Divider, } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '@chakra-ui/react';

function Search() {
    const [search, setSearch] = useState('');
    const [searchData, setSearchData] = useState([]);

    // Custom debounce function
    const debounce = (func, delay) => {
        let timerId;
        return function (...args) {
            clearTimeout(timerId);
            timerId = setTimeout(() => func.apply(this, args), delay);
        };
    };

    const handleSearch = () => {
        axios
            .get(`https://voyawander-server.onrender.com/hotels?q=${search}`)
            .then((res) => {
                setSearchData(res.data);
                console.log(res.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    // Debounced version of handleSearch
    const debouncedSearch = debounce(handleSearch, 1000);

    const handleChange = (e) => {
        setSearch(e.target.value);
        debouncedSearch(); // Call the debounced function on each input change
    };

    useEffect(() => {
        // Cleanup function to cancel any pending debounced calls
        return () => {
            clearTimeout(debouncedSearch);
        };
    }, []);

    return (
        <Box>
      <Input
        pr='4.5rem'
        type='text'
        placeholder='Enter search term'
        value={search}
        onChange={handleChange} 
        maxW="500"
        border="1px"
      />
    </Box>
    );
}

export default Search;
