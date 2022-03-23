import { AppBar } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArticleIcon from '@mui/icons-material/Article';
import Divider from '@mui/material/Divider';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import BookIcon from '@mui/icons-material/Book';
import TerminalIcon from '@mui/icons-material/Terminal';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { CqLogo, CqIcon } from '../Icons/CqLogo'

export const Navbar: React.FC = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        open ? setAnchorEl(null) : setAnchorEl(event.currentTarget)
    }

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
                        onClick={handleClick}
                    >
                        <MenuIcon />
                        <Menu
                                elevation={0}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClick}
                            >
                                <MenuItem onClick={handleClick} disableRipple>
                                    <ArticleIcon />
                                    Resume
                                </MenuItem>
                                <MenuItem onClick={handleClick} disableRipple>
                                    <BookIcon />
                                    Journal
                                </MenuItem>
                                <MenuItem onClick={handleClick} disableRipple>
                                    <TerminalIcon />
                                    Snippets
                                </MenuItem>
                                <MenuItem onClick={handleClick} disableRipple>
                                    <RocketLaunchIcon />
                                    Projects
                                </MenuItem>
                            </Menu>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
