import { useState, ChangeEvent } from "react";
import debounce from "lodash.debounce";
import Container from "@mui/material/Container";
import { SelectChangeEvent } from "@mui/material/Select";
import Box from "@mui/material/Box";

import useSearchBooks from "../../hooks/useSearchBooks";
import TopBar from "../../components/TopBar";
import Empty from "../../components/Empty";
import ResultsContainer from "../../components/ResultsContainer";
import PaginatedContent from "../../components/PaginatedContent";

const Home = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState("100");
  const [viewType, setViewType] = useState("grid");
  const { data, isFetching } = useSearchBooks(query, page, limit);
  const hasBookResults = data?.docs?.length > 0;

  const handleSearch = debounce((event: ChangeEvent<HTMLInputElement>) => {
    setPage(1);
    setQuery(event.target.value);
  }, 500);

  const handlePage = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleSelect = (event: SelectChangeEvent) => {
    setPage(1);
    setLimit(event.target.value);
  };

  const handleViewType = (type: string) => {
    setViewType(type);
  };

  return (
    <>
      <TopBar handleSearch={handleSearch} />
      <Container maxWidth="lg">
        {query && (isFetching || hasBookResults) && (
          <Box py={4}>
            <PaginatedContent
              page={page}
              limit={limit}
              viewType={viewType}
              isFetching={isFetching}
              numFound={data?.numFound}
              handlePage={handlePage}
              handleSelect={handleSelect}
              handleViewType={handleViewType}
            >
              <ResultsContainer data={data} query={query} viewType={viewType} />
            </PaginatedContent>
          </Box>
        )}
        {query && !hasBookResults && !isFetching && (
          <Empty message="No results found" />
        )}
        {!query && <Empty message="Start searching by typing in search box!" />}
      </Container>
    </>
  );
};

export default Home;
