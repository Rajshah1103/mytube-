import React from 'react'
import {Box,CardContent,CardMedia,Typography} from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../utils/constants'
import { borderRadius } from '@mui/system'

const ChannelCard = ({channelDetail,marginTop}) => {
  return (
      <Box sx={{boxShadow:'none',borderRadius:'20px',display:'flex',justifyContent:'center',alignItems:'center',width:{xs:'356px', md:'320px'},height:'326px',margin:'auto',marginTop}}>
        <Link to={`/channel/${channelDetail?.id?.channelId}`}>
              <CardContent sx={{display:'flex',flexDirection:'column',justifyContent:'center',textAlign:'center',color:'#fff'}}>
                <CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture} alt={channelDetail?.snippet?.title} sx={{width:'180px',height:'180px',borderRadius:'50%',mb:2,border:'1px solid #e3e3e3'}}/>
                <Typography variant='h6'>
                  {channelDetail?.snippet?.title}
                  <CheckCircle sx={{fontSize:14,color:'gray',ml:0.75}}/>
                </Typography>
                <Typography>
                {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
                </Typography>          
              </CardContent>
        </Link>
      </Box>
  )
}

export default ChannelCard