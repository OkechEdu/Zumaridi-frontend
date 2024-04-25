import { render, screen } from "test/test-utils";
import { Contact } from "pages";

test("renders contact page", async () => {
  render(<Contact />);
  expect(screen.getByText(/contact page/i)).toBeInTheDocument();
});
