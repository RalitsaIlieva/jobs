import Paper from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";

const CvLibrary = () => {
  const { t } = useTranslation("translation");

  return (
    <Paper pt={5.5} pb={2} sx={{backgroundColor: "rgb(243 244 246)"}}>
    <Box boxShadow={3} mb={4} pt={8} pb={8} sx={{backgroundColor: "white"}}>
      <Typography
        variant="h4"
        textAlign="center"
        sx={{ fontWeight: "bold", marginBottom: "1em" }}
      >
        {t("cvLibrary")}
      </Typography>
      <Typography
        textAlign="center"
      >
        {t("cvLibraryText")}
      </Typography>
    </Box>
    </Paper>
  );
};

export default CvLibrary;

