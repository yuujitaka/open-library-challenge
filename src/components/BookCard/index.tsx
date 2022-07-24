import { useState } from "react";
import CardContent from "@mui/material/CardContent";
import CircularProgress from "@mui/material/CircularProgress";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";

import notFoundImage from "../../assets/undraw_no_data.svg";
import * as S from "./styles";

type BookCardProps = {
  author_name: string[];
  title: string;
  cover_i: number;
  first_publish_year: number;
  isbn: number[];
  type: string;
};

const BookCard = ({
  author_name,
  title,
  cover_i,
  first_publish_year,
  isbn,
  type,
}: BookCardProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoadedImage, setIsLoadedImage] = useState(false);

  const handleClickOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <S.BookContainer variant="outlined" type={type}>
        <Box
          pt={type === "list" ? 0 : 2}
          pl={type === "list" ? 2 : 0}
          display="flex"
          justifyContent="center"
        >
          <S.BookThumbnail
            height="168"
            src={
              cover_i
                ? `http://covers.openlibrary.org/b/id/${cover_i}-M.jpg`
                : notFoundImage
            }
            onClick={handleClickOpen}
            loading="lazy"
          />
        </Box>

        <CardContent>
          <S.BookText gutterBottom variant="body1" title={title}>
            {title}
          </S.BookText>
          <S.BookText variant="body2" color="text.secondary">
            <em>{String(author_name || "Unknown")}</em>
          </S.BookText>
          {type === "list" && (
            <>
              <S.BookText variant="body2" color="text.secondary" my={2}>
                First Publication Year: <strong>{first_publish_year}</strong>
              </S.BookText>
              <Chip label={isbn?.[0]} />
            </>
          )}
        </CardContent>
      </S.BookContainer>

      <Dialog
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
      >
        <S.Title id="alert-dialog-title">
          {title}
          <IconButton aria-label="close" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </S.Title>
        <DialogContent>
          <Box display="flex" justifyContent="center">
            <S.BookImage
              src={
                cover_i
                  ? `http://covers.openlibrary.org/b/id/${cover_i}-L.jpg`
                  : notFoundImage
              }
              onLoad={() => setIsLoadedImage(true)}
              noImage={!cover_i}
              isLoadedImage={isLoadedImage}
            />
            {!isLoadedImage && <CircularProgress />}
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BookCard;
