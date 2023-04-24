import { render, screen, fireEvent } from '@testing-library/react';
import Slider from '.';

describe('<Slider/>', () =>{
    const pictures = ['test1.png', 'test2.png', 'test3.png']
    it('Renders with first image', () => {
        render(<Slider sliderImage={pictures} />)

        expect(screen.getByTestId('current')).toHaveAttribute('src', pictures[0]);
        expect(screen.getByText('1 / 3')).toBeInTheDocument();
    });
});

// Test cases : 
// Next image
// Previous image
// Goes to 1rst when clicking next on last image
// Goes to last when clicking previous on first image