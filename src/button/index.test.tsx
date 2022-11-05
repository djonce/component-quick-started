import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';
import Button from '.';

describe('Button', () => {
  test('renders primary button', () => {
    const { container } = render(<Button type="primary">click me</Button>);
    expect(container.querySelector('.ant-btn-primary')).toBeInTheDocument();
  });

  test('should support click', () => {
    const onClick = jest.fn();
    render(
      <Button type="primary" onClick={onClick}>
        click me
      </Button>
    );

    const linkElement = screen.getByText(/click me/i);
    fireEvent.click(linkElement);

    expect(onClick).toBeCalled();
  });
});
