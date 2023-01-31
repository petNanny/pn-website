import { render, screen } from "@testing-library/react";
import Hero from "../components/Hero";
import "@testing-library/jest-dom";

describe("Hero", () => {
  it("renders a heading", () => {
    render(<Hero />);

    const heading = screen.getByRole("heading", {
      name: /AsyncWorking/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
