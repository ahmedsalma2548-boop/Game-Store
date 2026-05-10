import { SetStateAction, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  Box,
  useMediaQuery,
  useTheme,
  Menu,
  MenuItem
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate, Link as RouterLink, useLocation, To } from "react-router-dom";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGamesOpen, setMobileGamesOpen] = useState(false);

  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();

  const showHomeButton = !["/", "/Login"].includes(location.pathname);

  const getButtonStyle = (isMobileView = false) => ({
    color: "white",
    fontSize: isMobileView ? "18px" : "16px",
    padding: isMobileView ? "12px 24px" : "8px 16px",
    borderRadius: "8px",
    transition: "all 0.3s ease",
    fontWeight: "500",
    justifyContent: isMobileView ? "flex-start" : "center",
    width: isMobileView ? "100%" : "auto",
    textAlign: isMobileView ? "left" : "center",
    "&:hover": {
      bgcolor: "rgba(168, 85, 247, 0.2)",
      borderRadius: "20px",
      transform: "scale(1.05)",
      color: "#a855f7"
    }
  });

  const getMenuItemStyle = () => ({
    padding: "10px 24px",
    fontSize: "16px",
    fontWeight: "500",
    transition: "all 0.3s ease",
    borderRadius: "8px",
    margin: "4px 8px",
    color: "black",
    
    

    "&:hover": {
      backgroundColor: "rgba(168, 85, 247, 0.15)",
      color: "#a855f7",
      transform: "translateX(5px)",
      borderRadius: "12px"
    }
  });

  const getMobileSubmenuStyle = () => ({
    color: "#cbd5e1",
    fontSize: "15px",
    padding: "10px 16px",
    justifyContent: "flex-start",
    width: "100%",
    borderRadius: "8px",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "rgba(168, 85, 247, 0.15)",
      color: "#a855f7",
      transform: "translateX(8px)",
      borderRadius: "12px"
    }
  });

  const handleNav = (path: To | undefined, closeMenu = true) => {
    navigate(path);
    setAnchorEl(null);
    if (closeMenu) setMobileOpen(false);
  };

  const handleMenuOpen = (event: { currentTarget: SetStateAction<null>; }) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { text: "Games", submenu: true },
    { text: "Gallery", path: "/gallerytab" },
    { text: "About Us", path: "/about" },
    { text: "Login", path: "/Login" }
  ];

  const MobileMenu = () => (
    <Box sx={{ width: 280, height: "100%", bgcolor: "#111827" }}>

      <Box sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 2,
        borderBottom: "1px solid rgba(168, 85, 247, 0.3)"
      }}>
        <Typography
          variant="h6"
          sx={{
            background: "linear-gradient(to right, #a855f7, #ec4899)",
            backgroundClip: "text",
            color: "transparent"
          }}
        >
          Menu
        </Typography>

        <IconButton onClick={() => setMobileOpen(false)} sx={{ color: "white" }}>
          <CloseIcon />
        </IconButton>
      </Box>

      <List>

        {showHomeButton && (
          <ListItem disablePadding>
            <Button
              component={RouterLink}
              to="/"
              onClick={() => setMobileOpen(false)}
              sx={getButtonStyle(true)}
            >
              Home
            </Button>
          </ListItem>
        )}

        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ display: "block" }}>

            {item.submenu ? (
              <Box sx={{ width: "100%" }}>

                <Button
                  onClick={() => setMobileGamesOpen(!mobileGamesOpen)}
                  sx={getButtonStyle(true)}
                >
                  Games {mobileGamesOpen ? "▲" : "▼"}
                </Button>

                {mobileGamesOpen && (
                  <Box sx={{ 
                    pl: 2, 
                    display: "flex", 
                    flexDirection: "column",
                    mt: 1,
                    gap: 0.5
                  }}>
                    
                    <Button
                      sx={getMobileSubmenuStyle()}
                      onClick={() => handleNav("/Top-Rated")}                    >
                      Top Rated
                    </Button>

                    <Button
                      sx={getMobileSubmenuStyle()}
                      onClick={() => handleNav("/Trending")}                    >
                      Trending Games
                    </Button>

                  </Box>
                )}

              </Box>
            ) : (
              <Button
                component={RouterLink}
                to={item.path}
                onClick={() => handleNav(item.path)}
                sx={getButtonStyle(true)}
              >
                {item.text}
              </Button>
            )}

          </ListItem>
        ))}

      </List>
    </Box>
  );

  return (
    <AppBar position="static" sx={{ bgcolor: "#111827", py: 2 }}>
      <Toolbar sx={{ justifyContent: "space-between", px: 3 }}>

        <RouterLink to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
          <Box sx={{
            width: 40,
            height: 40,
            background: "linear-gradient(to right, #a855f7, #ec4899)",
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <Typography sx={{ color: "white", fontWeight: "bold" }}>
              G
            </Typography>
          </Box>

          <Typography sx={{
            color: "transparent",
            background: "linear-gradient(to right, #a855f7, #ec4899)",
            backgroundClip: "text",
            fontWeight: "bold",
            display: { xs: "none", sm: "block" }
          }}>
            GameStore
          </Typography>
        </RouterLink>

        {!isMobile ? (
          <Box sx={{ display: "flex", gap: 2 }}>

            {showHomeButton && (
              <Button component={RouterLink} to="/" sx={getButtonStyle()}>
                Home
              </Button>
            )}

            <Box>
              <Button
                onClick={handleMenuOpen}
                sx={getButtonStyle()}
              >
                Games ▼
              </Button>

              <Menu 
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
              >
                <MenuItem
                  onClick={() => handleNav("/Top-Rated")}
                  sx={getMenuItemStyle()}
                  
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, paddingRight:"10px" }}>
                    <span>Top Rated</span>
                    
                  </Box>
                </MenuItem>

                <MenuItem 
                  onClick={() => handleNav("/Trending")}
                  sx={getMenuItemStyle()}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <span>Trending Games</span>
                  </Box>
                </MenuItem>
              </Menu>
            </Box>

            <Button component={RouterLink} to="/gallerytab" sx={getButtonStyle()}>
              Gallery
            </Button>

            <Button component={RouterLink} to="/about" sx={getButtonStyle()}>
              About Us
            </Button>

            <Button component={RouterLink} to="/Login" sx={getButtonStyle()}>
              Login
            </Button>

          </Box>
        ) : (
          <IconButton onClick={() => setMobileOpen(true)} sx={{ color: "white" }}>
            <MenuIcon />
          </IconButton>
        )}

        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
        >
          <MobileMenu />
        </Drawer>

      </Toolbar>
    </AppBar>
  );
}