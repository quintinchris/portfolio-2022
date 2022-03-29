import React from 'react';
import { render } from '@testing-library/react';
import { Footer } from './Footer'

describe('Footer', () => {
    it('should render', () => {
        const footer = render(<Footer />);
        expect(footer).toBeTruthy();
    });
})