import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Home from "../pages/index";

test("test child component", () => {
  const { getByText } = render(<Home />);
  expect(getByText(/Add Reminder/i)).toBeInTheDocument();
});