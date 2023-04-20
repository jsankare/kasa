import { render, screen, fireEvent } from "@testing-library/react"
import Dropdown from "."
import { click } from "@testing-library/user-event/dist/click"

describe('<Dropdown/>', () =>{
    it('Renders close by default', () => {
        const title = 'toto'
        const content = 'totocontent'

        render(<Dropdown title={title} content={content} />);

        expect(screen.getByText(title)).toBeInTheDocument();
        expect(screen.queryByText(content)).not.toBeInTheDocument();
    });

    it('Open on click on title', () => {
        const title = 'toto'
        const content = 'totocontent'

        render(<Dropdown title={title} content={content} />);
        fireEvent.click(screen.getByText(title));

        expect(screen.getByText(title)).toBeInTheDocument();
        expect(screen.getByText(content)).toBeInTheDocument();
    });

    it('Close if opened', () => {
        const title = 'toto'
        const content = 'totocontent'

        render(<Dropdown title={title} content={content} />);
        fireEvent.click(screen.getByText(title));
        fireEvent.click(screen.getByText(title));

        expect(screen.getByText(title)).toBeInTheDocument();
        expect(screen.queryByText(content)).not.toBeInTheDocument();
    });
})
