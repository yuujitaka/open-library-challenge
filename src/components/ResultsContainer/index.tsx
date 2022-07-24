import Grid from "@mui/material/Grid";
import BookCard from "../../components/BookCard";

type Doc = {
  author_name: string[];
  title: string;
  cover_i: number;
  first_publish_year: number;
  isbn: number[];
  key: string;
};

type ResultsContainerProps = {
  query?: string;
  viewType: string;
  data: {
    docs?: Doc[];
    numFound: number;
  };
};

const ResultsContainer = ({ viewType, data }: ResultsContainerProps) => {
  const isGrid = viewType === "grid";

  return (
    <Grid container spacing={4}>
      {data?.docs?.map((item: Doc) => (
        <Grid
          item
          xs={isGrid ? 6 : 12}
          sm={isGrid ? 4 : undefined}
          lg={isGrid ? 3 : undefined}
          xl={isGrid ? 2 : undefined}
        >
          <BookCard
            key={item.key}
            author_name={item.author_name}
            title={item.title}
            cover_i={item.cover_i}
            first_publish_year={item.first_publish_year}
            isbn={item.isbn}
            type={viewType}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ResultsContainer;
