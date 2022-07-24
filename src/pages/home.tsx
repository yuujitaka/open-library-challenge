import { useState, ChangeEvent } from "react";
import debounce from "lodash.debounce";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import IconButton from "@mui/material/IconButton";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import TableRowsRoundedIcon from "@mui/icons-material/TableRowsRounded";

import TopBar from "../components/TopBar";
import BookCard from "../components/BookCard";
import useSearchBooks from "../hooks/useSearchBooks";
import emptyImage from "../assets/undraw_searching.svg";

const Home = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState("100");
  const [viewType, setViewType] = useState("grid");
  const { data, isFetching } = useSearchBooks(query, page, limit);
  const startShowing = (page - 1) * parseInt(limit) + 1;
  const isGrid = viewType === "grid";
  const endShowing = Math.min(
    startShowing + parseInt(limit) - 1,
    data?.numFound
  );

  const handleSearch = debounce((e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }, 1000);

  const handlePage = (e: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleSelect = (event: SelectChangeEvent) => {
    setPage(1);
    setLimit(event.target.value);
  };

  //TODO: ITEM ANY

  return (
    <>
      <TopBar handleSearch={handleSearch} />
      <Container maxWidth="lg">
        {query ? (
          <Box py={4}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography gutterBottom variant="body1">
                {isFetching
                  ? "Searching..."
                  : `Showing ${startShowing}-${endShowing} of ${data?.numFound} results`}
              </Typography>
              <Box>
                <IconButton
                  aria-label="Grid view"
                  color={viewType === "grid" ? "primary" : "default"}
                  onClick={() => setViewType("grid")}
                >
                  <GridViewRoundedIcon />
                </IconButton>
                <IconButton
                  aria-label="List view"
                  color={viewType === "list" ? "primary" : "default"}
                  onClick={() => setViewType("list")}
                >
                  <TableRowsRoundedIcon />
                </IconButton>
              </Box>
            </Box>
            <hr />
            {isFetching ? (
              <Box display="flex" justifyContent="center" mt={2}>
                <CircularProgress />
              </Box>
            ) : (
              <>
                <Grid container spacing={4}>
                  {data?.docs.map((item: any) => (
                    <Grid
                      item
                      xs={isGrid ? 6 : 12}
                      sm={isGrid ? 4 : undefined}
                      lg={isGrid ? 3 : undefined}
                      xl={isGrid ? 2 : undefined}
                    >
                      <BookCard
                        author_name={item.author_name}
                        title={item.title}
                        cover_i={item.cover_i}
                      />
                    </Grid>
                  ))}
                </Grid>
                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  justifyContent="flex-end"
                  mt={4}
                >
                  <Grid item>
                    <Box mr={1} display="inline">
                      Show:
                    </Box>
                    <Select value={limit} onChange={handleSelect} size="small">
                      <MenuItem value={10}>10</MenuItem>
                      <MenuItem value={20}>20</MenuItem>
                      <MenuItem value={50}>50</MenuItem>
                      <MenuItem value={100}>100</MenuItem>
                    </Select>
                  </Grid>
                  <Grid item>
                    <Pagination
                      count={Math.ceil(data?.numFound / parseInt(limit)) ?? 1}
                      page={page}
                      color="primary"
                      onChange={handlePage}
                    />
                  </Grid>
                </Grid>
              </>
            )}
          </Box>
        ) : (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            sx={{ height: "calc(100vh - 239px)" }}
          >
            <img src={emptyImage} alt="Logo" width="250px" />
            <Typography variant="subtitle1" mt={3}>
              You haven't searched for anything
            </Typography>
          </Box>
        )}
      </Container>
    </>
  );
};

export default Home;
