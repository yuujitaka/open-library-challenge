import styled from "styled-components";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import DialogTitle from "@mui/material/DialogTitle";

export const BookContainer = styled(Card)<{ type: string }>`
  display: flex;
  flex-direction: ${({ type }) => (type === "grid" ? "column" : "row")};
  box-shadow: 3px 3px 15px 1px #ebedf3;
  border: none;
  border-radius: 4px;
  height: ${({ type }) => (type === "grid" ? "320px" : "200px")}; ;
`;

export const BookThumbnail = styled.img`
  cursor: pointer;
  :hover {
    box-shadow: 3px 3px 10px #ebedf3;
    transform: scale(1.01);
  }
`;

export const BookImage = styled.img<{
  isLoadedImage: boolean;
  noImage: boolean;
}>`
  display: ${({ isLoadedImage }) => (isLoadedImage ? "block" : "none")};
  max-width: ${({ noImage }) => (noImage ? "300px" : "unset")};
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
