import { ChangeEvent } from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Pagination from "@mui/material/Pagination";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import TableRowsRoundedIcon from "@mui/icons-material/TableRowsRounded";

type PaginatedContentProps = {
  children: React.ReactNode;
  limit: string;
  page: number;
  numFound: number;
  isFetching: boolean;
  viewType: string;
  handleSelect: (event: SelectChangeEvent) => void;
  handlePage: (event: ChangeEvent<unknown>, value: number) => void;
  handleViewType: (type: string) => void;
};

const PaginatedContent = ({
  children,
  limit,
  page,
  numFound,
  isFetching,
  viewType,
  handleSelect,
  handlePage,
  handleViewType,
}: PaginatedContentProps) => {
  const startCount = (page - 1) * parseInt(limit) + 1;
  const endCount = Math.min(startCount + parseInt(limit) - 1, numFound);

  return (
    <div>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography gutterBottom variant="body1">
          {isFetching
            ? "Searching..."
            : `Showing ${startCount}-${endCount} of ${numFound} results`}
        </Typography>
        <Box>
          <IconButton
            aria-label="Grid view"
            color={viewType === "grid" ? "primary" : "default"}
            onClick={() => handleViewType("grid")}
          >
            <GridViewRoundedIcon />
          </IconButton>
          <IconButton
            aria-label="List view"
            color={viewType === "list" ? "primary" : "default"}
            onClick={() => handleViewType("list")}
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
          {children}
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
                count={Math.ceil(numFound / parseInt(limit)) ?? 1}
                page={page}
                color="primary"
                onChange={handlePage}
              />
            </Grid>
          </Grid>
        </>
      )}
    </div>
  );
};

export default PaginatedContent;
