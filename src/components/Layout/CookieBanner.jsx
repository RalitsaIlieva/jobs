import { Check, Close } from "@mui/icons-material";
import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const style = {
  padding: 2,
  margin: 2,
  display: "flex",
  justifyContent: "space-between",
  textAlign: "center",
  backgroundColor: "whitesmoke",
  position: "absolute",
  bottom: 0,
  maxHeight: "fit-content",
  width: "100%",
};
const CookieBanner = ({
  open,
  handleCookieClose,
  handleCookieAccepted,
  handleCookieDeclined,
}) => {
  return (
    <Modal open={open} onClose={handleCookieClose} disableScrollLock>
      <Box style={style}>
        <Box>
          <Typography
            variant="body2"
            sx={{ display: "flex", justifyContent: "center", margin: 0.5 }}
          >
            We use cookies on our website to provide you with a more
            personalized digital experience.
          </Typography>
          <Typography variant="caption">
            You can read about our cookie policy <Link to="cookie">here</Link>
          </Typography>
        </Box>
        <Box sx={{ padding: 0, maxWidth: "fit-content" }}>
          <Button
            onClick={handleCookieDeclined}
            color="error"
            variant="outlined"
            sx={{ padding: "3px", margin: 1 }}
            startIcon={<Close />}
          >
            Decline
          </Button>
          <Button
            onClick={handleCookieAccepted}
            color="success"
            variant="contained"
            sx={{ padding: "3px", margin: 1 }}
            startIcon={<Check />}
          >
            Accept
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default CookieBanner;
