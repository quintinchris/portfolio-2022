import React from 'react';
import { render } from '@testing-library/react';
import { Resume } from './Resume'

describe('Resume', () => {
    it('should render', () => {
        const resume = render(<Resume />);
        expect(resume).toBeTruthy();
    });
})