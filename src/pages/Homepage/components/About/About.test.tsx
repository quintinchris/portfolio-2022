import React from 'react';
import { render } from '@testing-library/react';
import { About } from './About'

describe('About', () => {
    it('should render', () => {
        const about = render(<About />);
        expect(about).toBeTruthy();
    });
})