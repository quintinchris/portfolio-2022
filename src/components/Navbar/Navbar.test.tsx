import React from 'react';
import { render } from '@testing-library/react';
import {Navbar} from './Navbar';
import { Grid } from '@mui/material';

describe('Navbar', () => {
    const navbarTrigger = 600;
    const mockScrollBeforeTrigger = jest.fn(() => window.scrollBy(0, 200));
    const mockScrollToTrigger = jest.fn(() => window.scrollBy(0, navbarTrigger));
    const NavbarWrapper = () => {
        return (
            <Grid sx={{height: '1000px'}}>
                <Navbar />
            </Grid>
        )
    }
    // it('should not render before trigger', () => {
    //     const wrapper = render(<NavbarWrapper />);
    //     mockScrollBeforeTrigger();
    //     const navbar = wrapper.getByTestId('navbar');
    //     expect(navbar).not.toBeInTheDocument();
    // });
    it('should render after scrolling to trigger', () => {
        const wrapper = render(<NavbarWrapper />);
        mockScrollToTrigger();
        const navbar = wrapper.getByTestId('navbar');
        expect(navbar).toBeTruthy();
    });
})