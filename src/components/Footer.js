import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

export default function FooterNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box
      sx={{ 
        width: '100%', 
        position: 'fixed', 
        bottom: 2, 
        backgroundColor: 'background.paper', 
        boxShadow: 3 
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="LinkedIn" icon={<LinkedInIcon />} />
        <BottomNavigationAction label="GitHub" icon={<GitHubIcon />} />
        <BottomNavigationAction label="Mail" icon={<EmailIcon />} />
      </BottomNavigation>
    </Box>
  );
}
