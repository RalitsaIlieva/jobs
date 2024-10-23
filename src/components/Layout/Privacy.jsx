import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";

const Privacy = () => {
  const { t } = useTranslation("translation");

  return (
    <Box boxShadow={3} mb={4} pt={8} pb={8}>
      <Typography
        variant="h4"
        textAlign="center"
        sx={{ fontWeight: "bold" }}
      >
        {t("aboutUs")}
      </Typography>
      <Typography
        variant="h5"
        textAlign="center"
        mt={5}
        mb={2}
        sx={{ fontWeight: "bold" }}
      >
        {t("gtc")}
      </Typography>
      <Typography textAlign="center" sx={{margin: "0 2em"}}>{t("gtcText")}</Typography>
      <Typography
        variant="h5"
        textAlign="center"
        mt={5}
        mb={2}
        sx={{ fontWeight: "bold" }}
      >
        {t("history")}
      </Typography>
      <Typography textAlign="center" sx={{margin: "0 2em"}}>{t("historyText")}</Typography>
    </Box>
  );
};

export default Privacy;
