import CardContent from "@mui/material/CardContent";

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
        height="168"
        src={`http://covers.openlibrary.org/b/id/${cover_i}-M.jpg`}
      />
      <CardContent>
        <S.BookText gutterBottom variant="body1" title={title}>
          {title}
        </S.BookText>
        <S.BookText variant="body2" color="text.secondary">
          <em>{String(author_name)}</em>
        </S.BookText>
      </CardContent>
    </S.BookContainer>
  );
};

export default BookCard;
