import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { Categories } from "./Categories";
import PropTypes from "prop-types";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;
const navItems = ["Shop"];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Link
          to={"/"}
          style={{
            textDecoration: "none",
            color: "#413F42",
            fontSize: "1.5rem",
          }}
        >
          Ⱡυ𝐜𝒽σ
        </Link>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText
                primary={
                  <Link to={"/productos"} style={{ color: "#413F42" }}>
                    {item}
                  </Link>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        style={{
          background: "white",
          color: "#413F42",
          boxShadow: "none",
          padding: "10px 100px 10px 100px",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Link
              to={"/"}
              style={{
                textDecoration: "none",
                color: "#413F42",
                fontSize: "1.7rem",
                fontWeight:"100"
              }}
            >
              Ⱡυ𝐜𝒽σ
            </Link>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item}>
                <Link to={"/productos"} style={{ color: "#413F42" }}>
                  {item}
                </Link>
              </Button>
            ))}
          </Box>
          <Button
            style={{
              color: "#413F42",
              marginRight: "2rem",
              fontFamily:
                '"GT America", "Helvetica Neue", "Helvetica", "sans-serif"',
              fontWeight: "400",
              marginLeft: "1.5rem",
            }}
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            Categorias
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <Categories />
          </Menu>
          <Link
            to={"/cart"}
            style={{ textDecoration: "none", color: "#413F42" }}
          >
            <CartWidget items={1} />
          </Link>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;

// const NavBar = () => {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };
//   return (
//     <>
//       <AppBar
//         position="static"
//         style={{ background: "white", color: "#73777B",boxShadow:"none"}}
//       >
//         <Container maxWidth="xl" style={{padding:"25px 100px 0px 100px"}}>
//           <Toolbar disableGutters>
//             <Link to={"/"} style={{ textDecoration: "none", color: "#73777B" }}>
//               <Typography
//                 variant="h5"
//                 noWrap
//                 sx={{
//                   mr: 2,
//                   display: { xs: "none", md: "flex" },
//                   fontWeight: 400,
//                   letterSpacing: ".1rem",
//                 }}
//               >
//                 Ⱡυ𝐜𝒽σ
//               </Typography>
//             </Link>
//             <Link to={"/"} style={{ textDecoration: "none", color: "#73777B" }}>
//               <Typography
//                 variant="h5"
//                 noWrap
//                 sx={{
//                   mr: 2,
//                   display: { xs: "flex", md: "none" },
//                   fontWeight: 400,
//                   letterSpacing: ".1rem",
//                 }}
//               >
//                 Ⱡυ𝐜𝒽σ
//               </Typography>
//             </Link>
//             <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }} />
//             <Button
//               style={{
//                 color: "#73777B",
//                 marginRight: "2rem",
//                 fontFamily:
//                   '"GT America", "Helvetica Neue", "Helvetica", "sans-serif"',
//                 fontWeight: "400",
//               }}
//               id="basic-button"
//               aria-controls={open ? "basic-menu" : undefined}
//               aria-haspopup="true"
//               aria-expanded={open ? "true" : undefined}
//               onClick={handleClick}
//             >
//               Categorias
//             </Button>
//             <Menu
//               id="basic-menu"
//               anchorEl={anchorEl}
//               open={open}
//               onClose={handleClose}
//               MenuListProps={{
//                 "aria-labelledby": "basic-button",
//               }}
//             >
//               <Categories />
//             </Menu>
//             <Link
//               to={"/cart"}
//               style={{ textDecoration: "none", color: "#73777B" }}
//             >
//               <CartWidget items={1} />
//             </Link>
//             <Box sx={{ flexGrow: 0 }}></Box>
//           </Toolbar>
//         </Container>
//       </AppBar>
//     </>
//   );
// };
//export default NavBar;
