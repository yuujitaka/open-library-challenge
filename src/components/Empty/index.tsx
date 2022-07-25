import Typography from "@mui/material/Typography";
import emptyImage from "../../assets/undraw_searching.svg";
import * as S from "./styles";

const Empty = ({ message }: { message: string }) => {
  return (
    <S.EmptyContainer
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      py={2}
    >
      <img src={emptyImage} alt="empty state" width="250px" />
      <Typography variant="subtitle1" mt={3}>
        {message}
      </Typography>
    </S.EmptyContainer>
  );
};

export default Empty;
