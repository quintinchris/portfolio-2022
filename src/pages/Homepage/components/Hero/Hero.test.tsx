import React from 'react';
import { render } from '@testing-library/react';
import {Hero} from './Hero';

describe('Hero', () => {
    it('should render', () => {
        const hero = render(<Hero />);
        expect(hero).toBeTruthy();
    });
    it.each([
        ["GitHubIcon"],
        ["TwitterIcon"],
        ["LinkedInIcon"],
    ])('should render icons', (a) => {
        const hero = render(<Hero />);
        const icon = hero.getByTestId(a);
        expect(icon).toBeInTheDocument();
    });
    it('should render logo', () => {
        const hero = render(<Hero />);
        const logo = hero.getByTestId("logo");
        expect(logo).toBeInTheDocument();
    });
})