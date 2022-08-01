import { render, screen, fireEvent } from "@testing-library/react";
import List from "./components/List/List";
import TopNav from "./components/Nav";

test("renders list component", () => {
  render(<List />);
  const element = screen.getByText("List of available users");
  expect(element).toBeInTheDocument();
});

test("renders Nav and dropdown", () => {
  render(<TopNav />);
  expect(screen.getByText("Add new")).toBeInTheDocument();

  fireEvent.click(screen.getByText("Add new"));

  expect(screen.getByText("Admin")).toBeInTheDocument();
  expect(screen.getByText("User")).toBeInTheDocument();
});
