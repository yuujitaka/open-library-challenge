import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

import logo from "../../assets/logo.png";
import * as S from "./styles";

type BookCardProps = {
  author_name: string[];
  title: string;
  cover_i: number;
};

const BookCard = ({ author_name, title, cover_i }: BookCardProps) => {
  return (
    <S.BookContainer variant="outlined">
      <S.BookImage
        component="img"
        height="168"
        image={`http://covers.openlibrary.org/b/id/${cover_i}-M.jpg`}
      />
      <CardContent>
        <Typography gutterBottom variant="body1">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <em>{String(author_name)}</em>
        </Typography>
      </CardContent>
    </S.BookContainer>
  );
};

export default BookCard;
