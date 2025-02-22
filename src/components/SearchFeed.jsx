import React from 'react'
import { useState,useEffect } from 'react'
import{Box,Typography} from '@mui/material'
import {Videos} from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { useParams } from 'react-router-dom'


const SearchFeed = () => {

  const [videos, setVideos] = useState([])
  const {searchTerm}  = useParams();

  useEffect(()=>{  
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data)=> setVideos(data.items)) 
  },[searchTerm])

  return (
      <Box sx={{flexDirection:{height:{sx:'auto',md:'92vh'},borderRight:'1px solid #3d3d3d',px:{sx:0,md:2},background:'#000'}}}>
        <Typography variant='h4'fontWeight='bold' mb={2} sx={{color:"white"}}>
            Search Results for:<span style={{color:'#F31503'}}>{searchTerm}</span> Videos
        </Typography>
        <Videos videos={videos}/>
      </Box>
  )
}

export default SearchFeed
