import { useState } from "react";
import {
  AppBar, Toolbar, Typography, Button, Menu, MenuItem,
  IconButton, Drawer, List, ListItem, Box, useMediaQuery, useTheme
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate, Link as RouterLink, useLocation } from "react-router-dom";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();

  const showHomeButton = !["/", "/Login"].includes(location.pathname);

  // أسلوب موحد لكل الأزرار مع دعم Responsive
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

  const handleNav = (path, closeMenu = true) => {
    navigate(path);
    setAnchorEl(null);
    if (closeMenu && isMobile) setMobileOpen(false);
  };

  const menuItems = [
    { text: "Games", submenu: true },
    { text: "Gallery", path: "/gallerytab" },
    { text: "About Us", path: "/about" },
    { text: "Login", path: "/Login" }
  ];

  const MobileMenu = () => (
    <Box sx={{ width: 280, height: "100%", bgcolor: "#111827" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 2, borderBottom: "1px solid rgba(168, 85, 247, 0.3)" }}>
        <Typography variant="h6" sx={{ background: "linear-gradient(to right, #a855f7, #ec4899)", backgroundClip: "text", color: "transparent" }}>
          Menu
        </Typography>
        <IconButton onClick={() => setMobileOpen(false)} sx={{ color: "white" }}>
          <CloseIcon />
        </IconButton>
      </Box>
      
      <List>
        {showHomeButton && (
          <ListItem disablePadding>
            <Button component={RouterLink} to="/" onClick={() => setMobileOpen(false)} sx={getButtonStyle(true)}>
               Home
            </Button>
          </ListItem>
        )}
        
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            {item.submenu ? (
              <>
                <Button onClick={(e) => setAnchorEl(e.currentTarget)} sx={getButtonStyle(true)}>
                   {item.text} ▼
                </Button>
                <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
                  <MenuItem onClick={() => handleNav("/Top-Rated")}> Top Rated</MenuItem>
                  <MenuItem onClick={() => handleNav("/Trending")}> Trending Games</MenuItem>
                </Menu>
              </>
            ) : (
              <Button component={RouterLink} to={item.path} onClick={() => handleNav(item.path)} sx={getButtonStyle(true)}>
                {item.text === "Gallery"} {item.text === "About Us"} {item.text === "Login"} {item.text}
              </Button>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="static" sx={{ bgcolor: "#111827", py: { xs: 1, md: 2 } }}>
      <Toolbar sx={{ 
        justifyContent: "space-between", 
        px: { xs: 2, sm: 3, md: 4 },
        flexWrap: "wrap",
        gap: { xs: 1, sm: 2 }
      }}>
        
        <RouterLink to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
          <Box sx={{ 
            width: { xs: 35, sm: 40, md: 45 }, 
            height: { xs: 35, sm: 40, md: 45 },
            background: "linear-gradient(to right, #a855f7, #ec4899)", 
            borderRadius: 2, 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center" 
          }}>
            <Typography sx={{ color: "white", fontWeight: "bold", fontSize: { xs: 18, sm: 20, md: 24 } }}>G</Typography>
          </Box>
          <Typography variant="h6" sx={{ 
            fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
            background: "linear-gradient(to right, #a855f7, #ec4899)", 
            backgroundClip: "text", 
            color: "transparent", 
            fontWeight: "bold",
            display: { xs: "none", sm: "block" }
          }}>
            GameStore
          </Typography>
        </RouterLink>

        {!isMobile ? (
          <Box sx={{ display: "flex", gap: { xs: 1, md: 2 }, alignItems: "center", flexWrap: "wrap" }}>
            {showHomeButton && (
              <Button component={RouterLink} to="/" sx={getButtonStyle()}>
                 Home
              </Button>
            )}
            
            <Button onClick={(e) => setAnchorEl(e.currentTarget)} sx={getButtonStyle()}>
               Games ▼
            </Button>
            
            {menuItems.filter(item => !item.submenu).map((item) => (
              <Button key={item.text} component={RouterLink} to={item.path} sx={getButtonStyle()}>
                {item.text === "Gallery"} {item.text === "About Us"} {item.text === "Login"} {item.text}
              </Button>
            ))}
            
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
              <MenuItem onClick={() => handleNav("/Top-Rated")}> Top Rated</MenuItem>
              <MenuItem onClick={() => handleNav("/Trending")}> Trending Games</MenuItem>
            </Menu>
          </Box>
        ) : (
          <IconButton onClick={() => setMobileOpen(true)} sx={{ color: "white" }}>
            <MenuIcon />
          </IconButton>
        )}

        <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)}>
          <MobileMenu />
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}