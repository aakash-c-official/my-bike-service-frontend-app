import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import axios from "axios";

// const pages = ['Products', 'Pricing', 'Blog'];
const pages = [
  { page: "Home", link: "/" },
  // { page: "Sign In", link: "/signin" },
  // { page: "Bookings", link: "/bookings" },
  // { page: "Sign Up", link: "/signup" },
  // { page: "Dashboard", link: "/dashboard" },
  // { page: "Book Service", link: "/slotform" },
  // { page: "Add Service Center", link: "/addcenterform" },
  // 'Products', 'Pricing', 'Blog'
];
const settings = [
  { page: "Profile", link: "/profile" },
  { page: "Account", link: "/account" },
  { page: "Dashboard", link: "/dashboard" },
  // { page: "Logout", link: "/" },
];

function Header() {
  const { user, setUser } = React.useContext(UserContext);
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    await axios.post("/logout");
    navigate("/signin");
    setUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            style={{ cursor: "pointer" }}
            noWrap
            component="a"
            onClick={() => navigate(user ? "/" : "/signin")}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Biker
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.page} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    onClick={() => navigate(page.link)}
                  >
                    {page.page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>


          {user?.role &&
            (user.role === "Service Owner" || user.role === "Admin") && (
              <Box className="mx-5">
                <Link to="/dashboard">My Service centers</Link>
              </Box>
            )}
          {user?.role &&
            (user.role === "Service Owner" || user.role === "Admin") && (
              <Box className="mx-5">
                <Link to="/addcenterform">Add Service centers</Link>
              </Box>
            )}
                {user?.role &&
            (user.role === "Service Owner" || user.role === "Admin") && (
              <Box className="mx-5">
                <Link to="/Bookings">Bookings</Link>
              </Box>
            )}
              {user?.role &&
            (user.role === "Client" || user.role === "Admin") && (
              <Box className="mx-5">
                <Link to="/slotform">Book a service</Link>
              </Box>
            )}
            
          {/* {user?.role!=="Client" &&<Box className="mx-5">
<Link to="/addcenterform">Add Service Center</Link>
          </Box>} */}
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            MY Bike App
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.page}
                onClick={() => {
                  handleCloseNavMenu();
                  navigate(page.link);
                }}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.page}
              </Button>
            ))}
          </Box>
          <Box className="mx-5">{user?.role}</Box>
          {user?.role?"":<Box><Link to='/signin'>Sign In</Link></Box>}
          {!!user && (
            <Box sx={{ flexGrow: 0 }}>
              {!!user && (
                <Button sx={{ color: "white" }} onClick={handleLogout}>
                  Logout
                </Button>
              )}
              {/* {!!user &&(
              <div>{user.name}</div>
            )} */}
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem
                    key={setting}
                    onClick={() => {
                      handleCloseUserMenu();
                      navigate(setting.link);
                    }}
                  >
                    <Typography textAlign="center">{setting.page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
