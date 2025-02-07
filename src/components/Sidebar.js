import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";
import InventoryIcon from "@mui/icons-material/Inventory";
import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const toggleDrawer = (newOpen) => {
    setOpen(newOpen);
  };

  const fetchCartItems = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://fakestoreapi.com/carts");
      const data = await response.json();
      setCartItems(data);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
    setLoading(false);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <Divider />
      <List>
        {[
          { text: "Home", icon: <HomeIcon />, path: "/" },
          { text: "Products", icon: <InventoryIcon />, path: "/" },
          {
            text: "My Cart",
            icon: <ShoppingCartIcon />,
            action: fetchCartItems,
          },
          { text: "Login", icon: <LoginIcon />, path: "/login" },
        ].map((item) => (
          <ListItem key={item.text} disablePadding>
            {item.action ? (
              <ListItemButton onClick={item.action}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            ) : (
              <Link
                to={item.path}
                style={{ textDecoration: "none", color: "inherit", width: "100%" }}
              >
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </Link>
            )}
          </ListItem>
        ))}
      </List>
      <Divider />

      {/* Cart Items Display */}
      {loading ? (
        <Box sx={{ textAlign: "center", p: 2 }}>
          <CircularProgress size={24} />
        </Box>
      ) : (
        cartItems.length > 0 && (
          <Box sx={{ p: 2 }}>
            <h3>Cart Items</h3>
            <List>
              {cartItems.map((cart) => (
                <ListItem key={cart.id}>
                  <ListItemText primary={`Cart ID: ${cart.id}`} secondary={`User ID: ${cart.userId}`} />
                </ListItem>
              ))}
            </List>
          </Box>
        )
      )}
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
