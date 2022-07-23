import styled from "styled-components";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export const BookContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  box-shadow: 3px 3px 15px 1px #ebedf3;
  border: none;
  border-radius: 4px;
  height: 320px;
`;

export const BookImage = styled(CardMedia)`
  align-self: center;
  width: auto;
  padding-top: 16px;
` as typeof CardMedia;

export const BookText = styled(Typography)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;
