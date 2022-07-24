import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import emptyImage from "../../assets/undraw_searching.svg";

const Empty = ({ message }: { message: string }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{ height: "calc(100vh - 239px)" }}
    >
      <img src={emptyImage} alt="empty state image" width="250px" />
      <Typography variant="subtitle1" mt={3}>
        {message}
      </Typography>
    </Box>
  );
};

export default Empty;
