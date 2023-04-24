import { render, screen, fireEvent } from "@testing-library/react";
import Dropdown from ".";

describe('<Dropdown/>', () =>{
    it('Renders close by default', () => {
        const title = 'toto'
        const content = 'totocontent'

        render(<Dropdown title={title}> <span>{content}</span> </Dropdown>);

        expect(screen.getByText(title)).toBeInTheDocument();
        expect(screen.queryByText(content)).not.toBeInTheDocument();
    });

    it('Open on click on title', () => {
        const title = 'toto'
        const content = 'totocontent'

        render(<Dropdown title={title}>{content}</Dropdown>);
        fireEvent.click(screen.getByText(title));

        expect(screen.getByText(title)).toBeInTheDocument();
        expect(screen.getByText(content)).toBeInTheDocument();
    });

    it('Close if opened', () => {
        const title = 'toto'
        const content = 'totocontent'

        render(<Dropdown title={title}>{content}</Dropdown>);
        fireEvent.click(screen.getByText(title));
        fireEvent.click(screen.getByText(title));

        expect(screen.getByText(title)).toBeInTheDocument();
        expect(screen.queryByText(content)).not.toBeInTheDocument();
    });
})
