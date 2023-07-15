import React from 'react'
import { Box, Button, Stack, Typography } from '@mui/material';
//import HeroBannerImage from '../assets/images/banner.png'
const HeroBanner = () => {
  return (
    <Box sx={{ mt: { lg: '200px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#131cde" fontWeight="600" fontSize="30px">Rana's Fit Club</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="8px" mt="30px">
    Lift like a man, <br />
    look like a goddess.
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px"mb="20px"  >
    <b>"Do it because <br/>they said you couldn’t."</b>
    </Typography>
   <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px" mb={2}>
      Check out the most effective exercises <br />
      personalized to you.
    </Typography>
    <Button variant="contained" color="info" href='#exercises' sx={{ backgroundColor: '#131cde',
padding: '10px'}}>Traverse Exercises</Button>
    <Stack>
      
      </Stack>
      <Typography fontWeight={600} color="#b4b6a9" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Exercise
    </Typography>
   
    <img src="https://staticg.sportskeeda.com/editor/2023/03/c7066-16794222453149-1920.jpg?w=840" alt="banner" className="hero-banner-img"
      />
   </Box>
  )
}

export default HeroBanner