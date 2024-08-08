import { render, screen } from "@testing-library/react"; 
import App from "../App"; 
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
render(<App />);
const topLevelHeading = screen.getByRole("heading", {
name: /hi, i'm/i, exact: false, level: 1, 
});
expect(topLevelHeading).toBeInTheDocument(); 
});
test("displays an image of yourself with alt text", () => { 
render(<App />);
const image = screen.getByAltText(/image of me/i);
expect(image).toBeInTheDocument(); 
expect(image).toHaveAttribute("src", expect.any(String));
 });
  test("displays a second-level heading with the text 'About Me'", () => {
 render(<App />);
 const secondLevelHeading = screen.getByRole("heading", {
 name: /about me/i, level: 2,
 }); 
expect(secondLevelHeading).toBeInTheDocument();
 });
  test("displays a paragraph for the biography", () => {
 render(<App />);
const paragraph = screen.getByText(/this is my biography/i);
expect(paragraph).toBeInTheDocument(); 
});
 test("displays a link to GitHub page", () => { 
render(<App />);
 const githubLink = screen.getByRole("link", { name: /github/i });
expect(githubLink).toBeInTheDocument();
 expect(githubLink).toHaveAttribute("href", "https://github.com/yourusername");
 });
test("displays a link to LinkedIn page", () => { 
render(<App />); 
const linkedinLink = screen.getByRole("link", { 
name: /linkedin/i });
expect(linkedinLink).toBeInTheDocument(); 
expect(linkedinLink).toHaveAttribute("href", "https://linkedin.com/in/yourusername"); 
});
