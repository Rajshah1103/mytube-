import React from 'react'
import { useState,useEffect } from 'react'
import{Box,Stack,Typography} from '@mui/material'
import {Sidebar,Videos} from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const Feed = () => {

  const [selectedCategory, setselectedCategory] = useState('New')
  const [videos, setVideos] = useState([])

  useEffect(()=>{  
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data)=>{
      setVideos(data.items)
      console.log(data.items)
    })
    
  },[selectedCategory])

  return (
    <Stack sx={{flexDirection:{sx:"column",md:"row",background:'#000'},overflowY:"auto"}}>
      <Box sx={{flexDirection:{height:{sx:'auto',md:'92vh'},borderRight:'1px solid #3d3d3d',px:{sx:0,md:2},background:'#000'},}}>
        <Typography className='copyright' variant='body2' sx={{mt:1.5,color:'#fff'}}>
          <Sidebar selectedCategory={selectedCategory} setselectedCategory={setselectedCategory}/>
          Copyright 2023 Alphabet
        </Typography>
      </Box>
      <Box p={2} sx={{overflowY:'auto',height:'90vh',flex:2,background:'#000',}}>
        <Typography variant='h4'fontWeight='bold' mb={2} sx={{color:"white"}}>
            {selectedCategory}<span style={{color:'#FC1503'}}> Videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed