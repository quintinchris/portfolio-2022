import { AppBar } from '@mui/material';
import React, { useEffect, useState } from 'react';
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
import cq from '../../assets/cqWhite.png';
import { useScrollPosition } from '../../services/hooks/useScrollPosition'

const styles = {
    logo: {
        width: '20%',
        height: '20%',
        // marginLeft: '0',
    },
    logoWrapper: {
        marginLeft: '-2vw',
        width: '8vw',
    }
};

export const Navbar: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const [visible, setVisibile] = useState(false);
    const open = Boolean(anchorEl);
    const scrollPosition = useScrollPosition();

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        open ? setAnchorEl(null) : setAnchorEl(event.currentTarget)
    }
    
    useEffect(() => {
        scrollPosition > 444 ? setVisibile(true) : setVisibile(false);
    }, [scrollPosition]);

    // Note: need to refactor to not use visibile/hidden, they aren't transitionable properties: https://stackoverflow.com/questions/27900053/css-transition-with-visibility-not-working
    return (
        <Box sx={{ flexGrow: 1, visibility: `${visible ? 'visible' : 'hidden'}`}}>
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
                    <Box style={styles.logoWrapper}>
                        <img src={cq} alt="logo" style={styles.logo} />
                    </Box>
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
