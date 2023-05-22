import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Home } from '@mui/icons-material';

import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

import useAuthContext from "../context/AuthContext";
import { Navigate, Outlet, Link } from 'react-router-dom';


const drawerWidth = 240;
// const navItems = ['Home', 'About', 'Contact'];
const menuItems = [
    {
        listIcon: <Home />,
        listText: "Home",
        listPath: "/"
    },
    {
        listIcon: <LogoutIcon />,
        listText: "Logout",
        listPath: "/logout"
    },
    {
        listIcon: <LoginIcon />,
        listText: "Login",
        listPath: "/login"
    },
    {
        listIcon: <AppRegistrationIcon />,
        listText: "Register",
        listPath: "/register"
    }
]

function NewAuthLayout() {

    const { user, logout } = useAuthContext();

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                News Aggregator
            </Typography>
            <Divider />
            {/* Drawer for smaller Screens */}
            <List>

                <ListItem disablePadding >
                    <ListItemButton sx={{ textAlign: 'center' }} component={Link} to={menuItems[0].listPath}>
                        {menuItems[0].listIcon}
                        <ListItemText primary={menuItems[0].listText} />
                    </ListItemButton>
                </ListItem>
                {user ?
                    (
                        <ListItem disablePadding >
                            <ListItemButton sx={{ textAlign: 'center' }} component={Link} to={menuItems[1].listPath}>
                                {menuItems[1].listIcon}
                                <ListItemText primary={menuItems[1].listText} />
                            </ListItemButton>
                        </ListItem>
                    ) : (
                        <>
                            <ListItem disablePadding >
                                <ListItemButton sx={{ textAlign: 'center' }} component={Link} to={menuItems[2].listPath}>
                                    {menuItems[2].listIcon}
                                    <ListItemText primary={menuItems[2].listText} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding >
                                <ListItemButton sx={{ textAlign: 'center' }} component={Link} to={menuItems[3].listPath}>
                                    {menuItems[3].listIcon}
                                    <ListItemText primary={menuItems[3].listText} />
                                </ListItemButton>
                            </ListItem>
                        </>
                    )
                }

            </List>
        </Box>
    );

    const container = () => window.document.body;

    return (
        !user ?
            <>
                <div style={{
                    display: 'flex',
                    height: "50px"
                }}>

                    <AppBar component="nav" sx={{ backgroundColor: 'primary', }}>
                        {/* General App Toolbar */}
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ mr: 2, display: { sm: 'none' }, zIndex: '1' }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography
                                variant="h6"
                                component={Link}
                                to={'/'}
                                sx={{
                                    flexGrow: 1,
                                    position: { xs: 'absolute', sm: 'relative' },
                                    left: { xs: '0' },
                                    width: { xs: '100vw', sm: 'auto' },
                                    textDecoration: 'none',
                                    color: 'white',
                                    textAlign: { xs: 'center', sm: 'left' },
                                    fontSize: "20px"
                                }}
                            >
                                News Aggregator
                            </Typography>
                            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>

                                <Button
                                    sx={{ color: '#fff' }}
                                    component={Link} to={menuItems[0].listPath}
                                >
                                    {menuItems[0].listIcon}
                                    {menuItems[0].listText}
                                </Button>
                                {user ? (
                                    <Button
                                        sx={{ color: '#fff' }}
                                        component={Link} to={menuItems[1].listPath}
                                    >
                                        {menuItems[1].listIcon}
                                        {menuItems[1].listText}
                                    </Button>
                                ) : (
                                    <>
                                        <Button
                                            sx={{ color: '#fff' }}
                                            component={Link} to={menuItems[2].listPath}
                                        >
                                            {menuItems[2].listIcon}
                                            {menuItems[2].listText}
                                        </Button>
                                        <Button
                                            sx={{ color: '#fff' }}
                                            component={Link} to={menuItems[3].listPath}
                                        >
                                            {menuItems[3].listIcon}
                                            {menuItems[3].listText}
                                        </Button>
                                    </>
                                )}


                            </Box>
                        </Toolbar>
                    </AppBar>
                    <Box component="nav" >
                        <Drawer
                            container={container}
                            variant="temporary"
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                            sx={{
                                display: { xs: 'block', sm: 'none' },
                                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Box>
                    <Box component="main" sx={{ p: 3 }}>
                        <Toolbar />

                    </Box>
                </div>
                <Outlet />
            </> : <Navigate to="/login" />
    );
}

export default NewAuthLayout;