// TwitterFollowButton.jsx

import React from 'react';
import { Button, Typography, Box,Card } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';

const Socials = () => {
  const containerStyle = {
    textAlign: 'center',
    margin: "1rem auto",
    width: "50%",
  };

  const buttonStyle = {
    backgroundColor: '#00ACEE', // Twitter blue color
    color: 'white',
    width: "50%",
    margin: "1px auto",
    borderRadius: '1rem',
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    '&:hover': {
      backgroundColor: '#007BB5', // Darker shade on hover
    },
  };

  const iconStyle = {
    marginRight: '0.5rem',
  };

  return (
    <Box style={containerStyle}>
      <Card
        
        style={buttonStyle}
       
        href=""
        
      >
        {/* <TwitterIcon style={iconStyle} />*/}
        <Typography>Lutfen iturafınızı birbirinize saygı duyarak yazın!!</Typography>
      </Card>
    </Box>
  );
};

export default Socials;
