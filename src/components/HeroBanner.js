import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { useEffect,useState } from 'react';

import HeroBannerImage from '../assets/images/banner.png';

const captions = [
  'Sweat now,\nShine later',
  'Transform your body,\nTransform your life',
  'Train like a beast, \nLook like a beauty',
  'Your health is an investment, \nnot an expense',
  "Stronger than yesterday, \nweaker than tomorrow.",
  "Your only limit is you.",
  "Commit to be fit.",
  "Fitness is a journey,\nnot a destination.",
  "Make sweat your\nbest accessory.",
  "Train insane or\nremain the same.",
  "Wake up, work out,\nlook hot, kick ass.",
  "Fitness is the key to \na healthy and happy life.",
  "Sore today,\nstrong tomorrow.",
  "Eat clean,\ntrain dirty.",

  // Add more captions as needed
];

const HeroBanner = () => {
  const [randomCaption, setRandomCaption] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * captions.length);
    setRandomCaption(captions[randomIndex]);
  }, []);

  return (
    <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">Fitness Club</Typography>
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' }, whiteSpace: 'pre-line'}} mb="23px" mt="30px">
        {randomCaption}
      </Typography>
      <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
        Check out the most effective exercises personalized for you
      </Typography>
      <Stack>
        <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
      </Stack>
      <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
    </Box>
  );
};



export default HeroBanner;