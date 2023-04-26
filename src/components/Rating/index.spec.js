import Rating from ".";
import { render, screen } from "@testing-library/react";

describe('<Rating/>', () =>{
    const rating = '3'

    it('Renders 5 stars', () => {
        render(<Rating rating={rating}/>);

        expect(screen.getAllByRole('star')).toHaveLength(5);
    });

    it('Renders 3 filled stars', () => {
        render(<Rating rating={rating}/>);

        expect(screen.getAllByTestId('active')).toHaveLength(3);
    });

    it('Renders 2 empty stars', () => {
        render(<Rating rating={rating}/>);

        expect(screen.getAllByTestId('inactive')).toHaveLength(2);
    });
})