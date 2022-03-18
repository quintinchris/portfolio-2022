import { Grid, AppBar, styled, alpha, InputBase, Button, SvgIcon, Tab } from '@mui/material';
import React from 'react';
import { Header } from '../Header';
import { defaultTheme } from '../../styles/theme';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Container from '@mui/material/Container';
import { CqLogo, CqIcon } from '../Icons/CqLogo'



const styles = {
    glassyNavbar: {
        height: '6vh',
        // backgroundColor: defaultTheme.palette.primary.light,
        backdropFilter: 'blur(16px) saturate(180%)',
        // -webkit-backdrop-filter: blur(16px) saturate(180%);
        backgroundColor: 'rgba(17, 25, 40, 0.75)',
        borderRadius: '12px',
        border: '1px solid rgba(255, 255, 255, 0.125)',
    },
}

export const Navbar: React.FC = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="fixed"
                color="primary"
                sx={{
                    height: '6vh',
                    width: '100%',
                    justifyContent: 'center',
                    backdropFilter: 'blur(16px) saturate(180%)',
                    backgroundColor: 'rgba(17, 25, 40, 0.75)',
                }}
            >
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    {/* <img src="src/assets/cqBlack.svg"></img> */}
                    {/* <SvgIcon>
                        cqLogoBlack
                    </SvgIcon> */}
                    {/* <CqIcon /> */}
                    <Typography variant="h6" color="primary.light" noWrap>
                        CQ
                    </Typography>
                    <IconButton
                        size="large"
                        edge="start"
                        color="primary"
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton>
                    {/* <Box sx={{ justifyContent: 'space-evenly' }}>
                        <Button color="inherit">Showcase</Button>
                        <Button color="inherit">Resume</Button>
                        <Button color="inherit">Journal</Button>
                    </Box> */}
                </Toolbar>
            </AppBar>
        </Box>
    )
}

// interface Props {
//     /**
//      * Injected by the documentation to work in an iframe.
//      * You won't need it on your project.
//      */
//     window?: () => Window
//     children: React.ReactElement
// }

// function ElevationScroll(props: Props) {
//     // Note that you normally won't need to set the window ref as useScrollTrigger
//     // will default to window.
//     // This is only being set here because the demo is in an iframe.
//     const trigger = useScrollTrigger({
//         disableHysteresis: true,
//         threshold: 0,
//         target: new Window,
//     })

//     return React.cloneElement(props.children, {
//         elevation: trigger ? 4 : 0,
//     })
// }
  

// const Search = styled('div')(({ theme }) => ({
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     '&:hover': {
//       backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       marginLeft: theme.spacing(1),
//       width: 'auto',
//     },
//   }));
  
//   const SearchIconWrapper = styled('div')(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }));

//   const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: 'inherit',
//     '& .MuiInputBase-input': {
//       padding: theme.spacing(1, 1, 1, 0),
//       // vertical padding + font size from searchIcon
//       paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//       transition: theme.transitions.create('width'),
//       width: '100%',
//       [theme.breakpoints.up('sm')]: {
//         width: '12ch',
//         '&:focus': {
//           width: '20ch',
//         },
//       },
//     },
//   }));


// export const Navbar: React.FC = () => {
//     const [auth, setAuth] = React.useState(true)
//     const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

//     const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setAuth(event.target.checked)
//     }

//     const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
//         setAnchorEl(event.currentTarget)
//     }

//     const handleClose = () => {
//         setAnchorEl(null)
//     }

//     return (
//         <React.Fragment>
//             <ElevationScroll>
//                 <AppBar position="static" style={styles.navbar}>
//                     <Toolbar>
//                         <IconButton
//                             size="large"
//                             edge="start"
//                             color="inherit"
//                             aria-label="menu"
//                             sx={{ mr: 2 }}
//                         >
//                             <MenuIcon />
//                         </IconButton>
//                         <Typography
//                             variant="h6"
//                             component="div"
//                             sx={{ flexGrow: 1 }}
//                         >
//                             Photos
//                         </Typography>
//                         <Search>
//                             <SearchIconWrapper>
//                                 <SearchIcon />
//                             </SearchIconWrapper>
//                             <StyledInputBase
//                                 placeholder="Search…"
//                                 inputProps={{ 'aria-label': 'search' }}
//                             />
//                         </Search>
//                         {auth && (
//                             <div>
//                                 <IconButton
//                                     size="large"
//                                     aria-label="account of current user"
//                                     aria-controls="menu-appbar"
//                                     aria-haspopup="true"
//                                     onClick={handleMenu}
//                                     color="inherit"
//                                 >
//                                     <AccountCircle />
//                                 </IconButton>
//                                 <Menu
//                                     id="menu-appbar"
//                                     anchorEl={anchorEl}
//                                     anchorOrigin={{
//                                         vertical: 'top',
//                                         horizontal: 'right',
//                                     }}
//                                     keepMounted
//                                     transformOrigin={{
//                                         vertical: 'top',
//                                         horizontal: 'right',
//                                     }}
//                                     open={Boolean(anchorEl)}
//                                     onClose={handleClose}
//                                 >
//                                     <MenuItem onClick={handleClose}>
//                                         Profile
//                                     </MenuItem>
//                                     <MenuItem onClick={handleClose}>
//                                         My account
//                                     </MenuItem>
//                                 </Menu>
//                             </div>
//                         )}
//                     </Toolbar>
//                 </AppBar>
//             </ElevationScroll>
//         </React.Fragment>
//     )
// }
