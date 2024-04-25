import { ProtectedRoute } from "components";
import { render } from "test/test-utils";

test("protected routes", () => {
  render(<ProtectedRoute />);
});
