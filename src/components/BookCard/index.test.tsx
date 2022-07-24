import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookCard from ".";

const book = {
  author_name: ["Name"],
  title: "Title",
  cover_i: 123,
  first_publish_year: 2022,
  isbn: [123],
};

describe("<BookCard />", () => {
  test("Displays book's image, title and author", () => {
    render(<BookCard {...book} type="grid" />);

    const image = screen.getByRole("img", { name: book.title });
    const title = screen.getByText(book.title);
    const author = screen.getByText(book.author_name[0]);
    expect(image).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(author).toBeInTheDocument();
  });

  test("Displays First Publication Year and ISBN when type is list", () => {
    render(<BookCard {...book} type="list" />);

    const year = screen.getByText(book.first_publish_year);
    const isbn = screen.getByText(book.isbn[0]);
    expect(year).toBeInTheDocument();
    expect(isbn).toBeInTheDocument();
  });

  test("Opens modal when image is clicked", async () => {
    render(<BookCard {...book} type="grid" />);

    const image = screen.getByRole("img", { name: book.title });
    userEvent.click(image);

    const modal = await screen.findByRole("dialog");
    expect(modal).toBeInTheDocument();
  });
});
