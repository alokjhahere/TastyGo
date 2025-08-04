import { render, screen } from "@testing-library/react"
import Contact from "../Contact";
import "@testing-library/jest-dom"

test("Should load Contact component", ()=>{
    //rendering
    render(<Contact/>)
    //quering
    const heading = screen.getByRole("heading");
    //Assertion
    expect(heading).toBeInTheDocument();
})
test("Should load button in Contact Component", ()=>{
    render(<Contact/>)

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
})
test("Should load input in Contact component", ()=>{
    render(<Contact/>);

    const input = screen.getByPlaceholderText("Name");

    expect(input).toBeInTheDocument();
})
test("should load")