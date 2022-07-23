import styled from "styled-components";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

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
