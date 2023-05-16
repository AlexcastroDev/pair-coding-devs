import { render } from "@testing-library/react";
import { Header } from "./Header";

describe("Header component", () => {
  it("renders the header text correctly", () => {
    const text = "Test Header";
    const { getByText } = render(<Header text={text} />);
    const headerElement = getByText(text);

    expect(headerElement).toBeInTheDocument();
    expect(headerElement.tagName).toBe("H1");
  });
});
