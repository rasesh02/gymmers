import React from 'react'
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({exerciseDetail}) => {
    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
    // instead of using exerciseDetail.gifUrl we can use gifUrl directly 
    const extraDetail = [
      {
        icon: BodyPartImage,
        name: bodyPart,
      },
      {
        icon: TargetImage,
        name: target,
      },
      {
        icon: EquipmentImage,
        name: equipment,
      },
    ];
  
  return (
   <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
 <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
 <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
  <Typography sx={{ fontSize: { lg: '64px', xs: '30px' } }} fontWeight={700} textTransform="capitalize">
    {name}
  </Typography>
  <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} color="#4F4C4C">
   Exercises keeps you fit.  <span style={{ textTransform: 'capitalize' }}>{name}</span> helps in developing your <b>{target}</b>.
  It also helps to enhance cardiorespiratory fitness and build strong bones.
  </Typography>
  {
    extraDetail.map((item)=>(
      <Stack key={item.name} direction="row" gap="24px" alignItems="center">
      <Button sx={{ background: '#e9e2da', borderRadius: '50%', width: '100px', height: '100px' }}>
        <img src={item.icon} alt={bodyPart} style={{ width: '50px', height: '50px' }} />
      </Button>
      <Typography textTransform="capitalize" sx={{ fontSize: { lg: '30px', xs: '20px' } }}>
              {item.name}
            </Typography>
      </Stack>
    ))
  }
 </Stack>
   </Stack>
  )
}

export default Detail