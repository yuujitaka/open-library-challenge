import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

import * as S from "./styles";

const TopBar = () => {
  return (
    <S.Bar>
      <Container maxWidth="lg">
        <Box py={10}>
          <Typography variant="h5" mb={2}>
            Search books by Openlibrary API
          </Typography>
          <S.SearchInput
            variant="outlined"
            placeholder="Type book titles here"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Container>
    </S.Bar>
  );
};

export default TopBar;
