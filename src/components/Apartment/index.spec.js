import { render, screen } from "@testing-library/react"
import Apartment from "."

describe('<Apartment/>', () => {
    it('Renders with image and title', () => {
        const title = 'toto'
        const img = 'totoimg'

        render(<Apartment title={title} cover={img} />)
        
        expect(screen.getByText(title)).toBeInTheDocument();
        expect(screen.getByRole('img')).toHaveAttribute('src', img)
    })
})