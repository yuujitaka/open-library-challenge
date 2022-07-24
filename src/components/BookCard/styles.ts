import styled from "styled-components";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import DialogTitle from "@mui/material/DialogTitle";

export const BookContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  box-shadow: 3px 3px 15px 1px #ebedf3;
  border: none;
  border-radius: 4px;
  height: 320px;
`;

export const BookImage = styled.img<{ isLoadedImage: boolean }>`
  display: ${({ isLoadedImage }) => (isLoadedImage ? "block" : "none")};
`;

export const BookText = styled(Typography)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const Title = styled(DialogTitle)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
