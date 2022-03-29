import React from 'react';
import { render } from '@testing-library/react';
import { Contact } from './Contact'

describe('Contact', () => {
    it('should render', () => {
        const contact = render(<Contact />);
        expect(contact).toBeTruthy();
    });
})