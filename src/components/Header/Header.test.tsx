import React from 'react';
import { render } from '@testing-library/react';
import { Header, HeaderProps } from './Header'

describe('Header', () => {
    const props: HeaderProps = {
        title: "blah",
        variant: "h1",
        color: "dark"
    }
    it('should render', () => {
        const header = render(<Header title="blah" variant="h1" color="dark" />)
        expect(header).toBeTruthy();
    });
})