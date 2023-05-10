import { render, screen } from "@testing-library/react";
import Hero from ".";

describe('<Hero/>', () => {
    it ('Renders with title and cover', () => {
        const title = 'toto';
        const cover = 'totocover';

        render(<Hero title={title} cover={cover}/>);
        expect(screen.getByText(title)).toBeInTheDocument();
        expect(screen.getByRole('img')).toHaveAttribute('src', cover);
    })
});
