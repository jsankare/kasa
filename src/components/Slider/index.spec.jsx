import { render, screen, fireEvent } from '@testing-library/react';
import Slider from '.';

describe('<Slider/>', () =>{
    const pictures = ['test1.png', 'test2.png', 'test3.png']
    it('Renders with first image', () => {
        render(<Slider sliderImage={pictures} />);

        expect(screen.getByTestId('current')).toHaveAttribute('src', pictures[0]);
        expect(screen.getByText('1 / 3')).toBeInTheDocument();
    });

    it('Goes to next image', () => {
        render(<Slider sliderImage={pictures} />);
    
        fireEvent.click(screen.getByTestId('next'));
    
        expect(screen.getByTestId('current')).toHaveAttribute('src', pictures[1]);
        expect(screen.getByText('2 / 3')).toBeInTheDocument();
      });

      it('goes to previous image', () => {
        render(<Slider sliderImage={pictures} />);
    
        fireEvent.click(screen.getByTestId('next'));
        fireEvent.click(screen.getByTestId('previous'));
    
        expect(screen.getByTestId('current')).toHaveAttribute('src', pictures[0]);
        expect(screen.getByText('1 / 3')).toBeInTheDocument();
      });

      it('Goes to first image when clicking next on last image', () => {
        render(<Slider sliderImage={pictures} />);
    
        fireEvent.click(screen.getByTestId('next'));
        fireEvent.click(screen.getByTestId('next'));
        fireEvent.click(screen.getByTestId('next'));
    
        expect(screen.getByTestId('current')).toHaveAttribute('src', pictures[0]);
        expect(screen.getByText('1 / 3')).toBeInTheDocument();
      });

      it('Goes to last when clicking previous on first image', () => {
        render(<Slider sliderImage={pictures} />);
    
        fireEvent.click(screen.getByTestId('previous'));
    
        expect(screen.getByTestId('current')).toHaveAttribute('src', pictures[2]);
        expect(screen.getByText('3 / 3')).toBeInTheDocument();
      });

});