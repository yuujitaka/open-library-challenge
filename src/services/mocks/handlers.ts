import { rest } from "msw";

export const handlers = [
  rest.get("http://openlibrary.org/search.json", (req, res, ctx) => {
    return res(
      ctx.json({
        docs: [
          {
            author_name: ["Author 1"],
            cover_i: 12015776,
            first_publish_year: 2022,
            isbn: ["1793277990"],
            key: "/works/OL21860074W",
            title: "Book 1",
          },
          {
            author_name: ["Author 2"],
            cover_i: 12015777,
            first_publish_year: 2022,
            isbn: ["1793277991"],
            key: "/works/OL21860072W",
            title: "Book 2",
          },
        ],
        numFound: 2,
        numFoundExact: true,
        num_found: 2,
      })
    );
  }),
];
