import React from 'react'
import { Typography, Box, Stack } from '@mui/material';
//import Loader from './Loader';

const ExerciseVideos = ({exerciseVideos,name}) => {
  return (
    <Box sx={{ marginTop: { lg: '100px', xs: '20px' } }} p="20px">
      <Typography sx={{ fontSize: { lg: '44px', xs: '25px' } }} fontWeight={700} color="#000" mb="20px">
        Watch <span style={{ color: '#262ff1', textTransform: 'capitalize' }}>{name}</span> exercise videos
      </Typography>
      <Stack sx={{ flexDirection: { lg: 'row' }, gap: { lg: '100px', xs: '0px' } }} justifyContent="flex-start" flexWrap="wrap" alignItems="center">
        {exerciseVideos?.slice(0, 6)?.map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img style={{ borderTopLeftRadius: '20px' }} src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography variant='h5' color="#000" mb={2}>
                {item.video.title}
              </Typography>
             
              <Typography variant='h7' color="#000"  >
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
      </Box>
  )
}

export default ExerciseVideos