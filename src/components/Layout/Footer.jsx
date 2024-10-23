import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import alternativeLogo from "../../lib/pictures/alternativeLogo.png";
import Grid from "@mui/material/Grid2";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Footer = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { t } = useTranslation("translation");
  return (
    <>
      <Grid
        container
        pt={2.5}
        pb={2.5}
        justifyContent="space-between"
        spacing={2}
        alignItems={!isDesktop && "center"}
        direction={!isDesktop ? "column" : "row"}
      >
        <Grid item>
          <img src={alternativeLogo} alt="Alternative logo" height="50" />
        </Grid>
        <Grid item container>
          <Tabs
            value={value}
            onChange={handleChange}
            TabIndicatorProps={{
              style: { display: "none" },
            }}
            sx={{
              "& .MuiTabs-flexContainer": {
                flexWrap: "wrap",
              },
            }}
          >
            <Tab
              label={t("aboutTab")}
              component={Link}
              to="/"
              sx={{ textAlign: "center" }}
            />
            <Tab label={t("contactTab")} component={Link} to="/" />
            <Tab label={t("forEmployersTab")} component={Link} to="/" />
            <Tab
              label={t("termsAndConditions")}
              component={Link}
              to="/"
              sx={{ textAlign: "center" }}
            />
            <Tab label={t("privacy")} component={Link} to="/" />
            <Tab label={t("cookiePolicy")} component={Link} to="/" />
          </Tabs>
        </Grid>
        <Grid item lg={2}>
          <LinkedInIcon fontSize="large" color="primary" />
          <FacebookIcon fontSize="large" color="primary" />
          <InstagramIcon fontSize="large" color="primary" />
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
