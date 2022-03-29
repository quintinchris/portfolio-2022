import React from 'react';
import { render } from '@testing-library/react';
import { Showcase } from './Showcase'

describe('Showcase', () => {
    it('should render', () => {
        const showcase = render(<Showcase />);
        expect(showcase).toBeTruthy();
    });
})