import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';
import InventoryIcon from '@mui/icons-material/Inventory';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <Button
        onClick={() => toggleDrawer(false)}
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          marginBottom: 1,
          marginLeft: 1,
        }}
        startIcon={<CloseIcon />}
      >
        Close
      </Button>
      <Divider />
      <List>
        {[{ text: 'Home', icon: <HomeIcon /> }, { text: 'Products', icon: <InventoryIcon /> }, { text: 'Mycart', icon: <ShoppingCartIcon /> }, { text: 'Login', icon: <LoginIcon /> }].map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <Button onClick={() => toggleDrawer(true)}>
        <MenuIcon />
      </Button>
      <Drawer open={open} onClose={() => toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
