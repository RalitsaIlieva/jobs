import Paper from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid2";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const About = () => {
  const { t } = useTranslation("translation");
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Paper ml={4} mr={4}>
      <Typography
        variant="h4"
        textAlign="center"
        mt={6}
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
        {t("ourMission")}
      </Typography>
      <Typography textAlign="center">{t("ourMissionText")}</Typography>
      <Typography
        variant="h5"
        textAlign="center"
        mt={5}
        mb={2}
        sx={{ fontWeight: "bold" }}
      >
        {t("ourTeam")}
      </Typography>
      <Grid container spacing={isDesktop ? 35 : 5} justifyContent="center">
        <Grid item>
          <img
            src="https://placehold.co/150x150"
            alt="Team member photo1"
            height="80%"
            style={{ borderRadius: "9999px" }}
          />
          <Typography
            variant="h6"
            textAlign="center"
            mt={2}
            sx={{ fontWeight: "bold" }}
          >
            {t("firstTeamMemberName")}
          </Typography>
          <Typography textAlign="center">
            {t("firstTeamMemberPosition")}
          </Typography>
        </Grid>
        <Grid item>
          <img
            src="https://placehold.co/150x150"
            alt="Team member photo2"
            height="80%"
            style={{ borderRadius: "9999px" }}
          />
          <Typography
            variant="h6"
            textAlign="center"
            mt={2}
            sx={{ fontWeight: "bold" }}
          >
            {t("secondTeamMemberName")}
          </Typography>
          <Typography textAlign="center">
            {t("secondTeamMemberPosition")}
          </Typography>
        </Grid>
        <Grid item>
          <img
            src="https://placehold.co/150x150"
            alt="Team member photo3"
            height="80%"
            style={{ borderRadius: "9999px" }}
          />
          <Typography
            variant="h6"
            textAlign="center"
            mt={2}
            sx={{ fontWeight: "bold" }}
          >
            {t("thirdTeamMemberName")}
          </Typography>
          <Typography textAlign="center">
            {t("thirdTeamMemberPosition")}
          </Typography>
        </Grid>
      </Grid>
      <Typography
        variant="h5"
        textAlign="center"
        mt={5}
        mb={2}
        sx={{ fontWeight: "bold" }}
      >
        {t("ourHistory")}
      </Typography>
      <Typography textAlign="center" mb={5}>{t("ourHistoryText")}</Typography>
    </Paper>
  );
};

export default About;
