import React from 'react'
import { Box, Stack, Typography } from '@mui/material';
//import Logo from '../assets/images/Logo-1.png';

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#010105">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src="https://i.ytimg.com/vi/xNZfx5jStO8/maxresdefault.jpg" alt="logo" style={{ width: '230px', height: '130px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px" color="white">@2023 Rana's fit club All Rights Reserved.</Typography>
  </Box>
  )
}

export default Footer