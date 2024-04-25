import { Button } from "components";
import { render, screen } from "test/test-utils";

test("renders button component", async () => {
  render(<Button>Test</Button>);
  expect(screen.getByText(/test/i)).toBeInTheDocument();
});

test("renders outline variant component", async () => {
  render(<Button variant="outline">Test</Button>);
  screen.debug();
});
