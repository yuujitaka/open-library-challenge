import { useState, ChangeEvent } from "react";
import debounce from "lodash.debounce";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import TopBar from "../components/TopBar";
import BookCard from "../components/BookCard";
import useSearchBooks from "../hooks/useSearchBooks";

const Home = () => {
  const [query, setQuery] = useState("");
  const { data } = useSearchBooks(query, "100");

  const handleSearch = debounce((e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }, 1000);

  return (
    <>
      <TopBar handleSearch={handleSearch} />
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {data?.docs.map((item: any) => (
            <Grid item xs={6} sm={4} lg={2}>
              <BookCard
                author_name={item.author_name}
                title={item.title}
                cover_i={item.cover_i}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
