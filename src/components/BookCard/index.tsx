import { useState } from "react";
import CardContent from "@mui/material/CardContent";
import CircularProgress from "@mui/material/CircularProgress";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";

import * as S from "./styles";

type BookCardProps = {
  author_name: string[];
  title: string;
  cover_i: number;
};

const BookCard = ({ author_name, title, cover_i }: BookCardProps) => {
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
      <S.BookContainer variant="outlined">
        <Box pt={2} display="flex" justifyContent="center">
          <img
            height="168"
            src={`http://covers.openlibrary.org/b/id/${cover_i}-M.jpg`}
            onClick={handleClickOpen}
            loading="lazy"
          />
        </Box>

        <CardContent>
          <S.BookText gutterBottom variant="body1" title={title}>
            {title}
          </S.BookText>
          <S.BookText variant="body2" color="text.secondary">
            <em>{String(author_name)}</em>
          </S.BookText>
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
              src={`http://covers.openlibrary.org/b/id/${cover_i}-L.jpg`}
              onLoad={() => setIsLoadedImage(true)}
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
