import styled from "styled-components";
import TextField from "@mui/material/TextField";

export const Bar = styled.div`
  background: #1a1a40;
  color: white;
`;

export const SearchInput = styled(TextField)`
  .MuiInputBase-root {
    background: white;
  }
  .MuiOutlinedInput-input {
    padding: 12px;
  }
  .MuiInputAdornment-root {
    color: rgba(0, 0, 0, 0.87);
  }
`;
