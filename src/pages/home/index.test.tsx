import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Home from "./";

const queryClient = new QueryClient();

const Providers = ({ children }: { children: React.ReactElement }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("Home Page", () => {
  test("Shows results after user types", async () => {
    render(<Home />, { wrapper: Providers });

    const emptyImage = screen.getByRole("img", { name: /empty/i });
    expect(emptyImage).toBeInTheDocument();

    const searchInput = screen.getByPlaceholderText(/Type book titles here/i);
    userEvent.type(searchInput, "book");

    await waitFor(
      () => {
        const books = screen.getAllByRole("img");
        expect(books).toHaveLength(2);
      },

      { timeout: 1000 }
    );
  });
});
