import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import logogym from '../assets/icons/logogym.png';


const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={logogym} alt="logo" style={{ width: '180px', height: '150px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="20px" textAlign="center" pb="40px">Train hard, stay consistent, be patient.</Typography>
  </Box>
);

export default Footer;