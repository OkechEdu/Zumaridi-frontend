import { render, screen, within } from "test/test-utils";
import { Home } from "pages";

test("should contain sign in button", async () => {
  render(<Home />);
  expect(screen.getByRole("link", { name: /sign in/i })).toBeInTheDocument();
});

test("should contain create an account button", async () => {
  render(<Home />);
  expect(screen.getByRole("link", { name: /create an account/i })).toBeInTheDocument();
});

test("home page should have logo", async () => {
  render(<Home />);
  const link = screen.getByRole("link", { name: /logo/i });
  expect(within(link).getByRole("img", { name: /logo/i })).toBeInTheDocument();
});
