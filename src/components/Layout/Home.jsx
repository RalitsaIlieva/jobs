import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import backendDevelopment from "../../lib/pictures/backendDevelopment.png";
import database from "../../lib/pictures/database.png";
import frontendDevelopment from "../../lib/pictures/frontendDevelopment.jpg";
import marketing from "../../lib/pictures/marketing.jpg";
import piecePuzzle from "../../lib/pictures/piecePuzzle.jpg";
import support from "../../lib/pictures/support.jpg";
import { useTranslation } from "react-i18next";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { t } = useTranslation("translation");
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const navigate = useNavigate();

  return (
    <Card sx={{ marginTop: "3.5em" }}>
      <Box boxShadow={3}>
        <CardContent
          sx={isDesktop && { display: "flex", alignItems: "center" }}
        >
          {!isDesktop && (
            <CardMedia
              component="img"
              sx={
                !isDesktop
                  ? { height: "auto", maxWidth: "100%", width: "100%" }
                  : { height: "auto", maxWidth: "100%", width: "50%" }
              }
              image={piecePuzzle}
            />
          )}
          <Grid
            container
            direction="column"
            alignItems="center"
            sx={{ width: "100%" }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "primary",
              }}
              align="center"
            >
              {t("findJobHomePage")}
            </Typography>
            <Typography
              variant="h6"
              mt={2}
              mb={2}
              sx={{
                color: "primary",
              }}
              align="center"
            >
              {t("opportunities")}
            </Typography>
            <Button
              color="pink"
              variant="contained"
              sx={{
                marginTop: "5px",
                height: "3rem",
                color: "white",
                textTransform: "none",
              }}
              onClick={() => navigate(`/alljobs`)}
            >
              {t("jobsButton")}
            </Button>
          </Grid>
          {isDesktop && (
            <CardMedia
              component="img"
              sx={{ height: "auto", maxWidth: "100%", width: "50%" }}
              image={piecePuzzle}
            />
          )}
        </CardContent>
      </Box>
      <Box boxShadow={3}>
        <CardContent
          sx={isDesktop && { display: "flex", alignItems: "center" }}
        >
          <CardMedia
            component="img"
            sx={
              isDesktop
                ? { height: "auto", maxWidth: "100%", width: "50%" }
                : { height: "auto", maxWidth: "100%", width: "100%" }
            }
            image={backendDevelopment}
          />
          <Grid
            container
            direction="column"
            alignItems="center"
            sx={{ width: "100%" }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "primary",
              }}
              align="center"
            >
              {t("backend")}
            </Typography>
            <Typography
              variant="h6"
              mt={2}
              mb={2}
              sx={{
                color: "primary",
              }}
              align="center"
            >
              {t("freePositions")}
            </Typography>
            <Button
              onClick={() => navigate('/backend')}
              color="purple"
              variant="contained"
              sx={{
                marginTop: "5px",
                height: "3rem",
                color: "white",
                textTransform: "none",
              }}
            >
              {t("jobsButton")}
            </Button>
          </Grid>
        </CardContent>
      </Box>
      <Box boxShadow={3}>
        <CardContent
          sx={isDesktop && { display: "flex", alignItems: "center" }}
        >
          <Grid
            container
            direction="column"
            alignItems="center"
            sx={{ width: "100%" }}
          >
            {!isDesktop && (
              <CardMedia
                component="img"
                sx={{ height: "auto", maxWidth: "100%", width: "100%" }}
                image={frontendDevelopment}
              />
            )}
            <Typography
              variant="h4"
              sx={{
                color: "primary",
              }}
              align="center"
            >
              {t("frontend")}
            </Typography>
            <Typography
              variant="h6"
              mt={2}
              mb={2}
              sx={{
                color: "primary",
              }}
              align="center"
            >
              {t("freePositions")}
            </Typography>
            <Button
              color="pink"
              variant="contained"
              sx={{
                marginTop: "5px",
                height: "3rem",
                color: "white",
                textTransform: "none",
              }}
            >
              {t("jobsButton")}
            </Button>
          </Grid>
          {isDesktop && (
            <CardMedia
              component="img"
              sx={{ height: "auto", maxWidth: "100%", width: "50%" }}
              image={frontendDevelopment}
            />
          )}
        </CardContent>
      </Box>
      <Box boxShadow={3}>
        <CardContent
          sx={isDesktop && { display: "flex", alignItems: "center" }}
        >
          <CardMedia
            component="img"
            sx={
              isDesktop
                ? { height: "auto", maxWidth: "100%", width: "50%" }
                : { height: "auto", maxWidth: "100%", width: "100%" }
            }
            image={database}
          />
          <Grid
            container
            direction="column"
            alignItems="center"
            sx={{ width: "100%" }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "primary",
              }}
              align="center"
            >
              {t("database")}
            </Typography>
            <Typography
              variant="h6"
              mt={2}
              mb={2}
              sx={{
                color: "primary",
              }}
              align="center"
            >
              {t("freePositions")}
            </Typography>
            <Button
              color="primary"
              variant="contained"
              sx={{
                marginTop: "5px",
                height: "3rem",
                color: "white",
                textTransform: "none",
              }}
            >
              {t("jobsButton")}
            </Button>
          </Grid>
        </CardContent>
      </Box>
      <Box boxShadow={3}>
        <CardContent
          sx={isDesktop && { display: "flex", alignItems: "center" }}
        >
          <Grid
            container
            direction="column"
            alignItems="center"
            sx={{ width: "100%" }}
          >
            {!isDesktop && (
              <CardMedia
                component="img"
                sx={{ height: "auto", maxWidth: "100%", width: "100%" }}
                image={marketing}
              />
            )}
            <Typography
              variant="h4"
              sx={{
                color: "primary",
              }}
              align="center"
            >
              {t("marketing")}
            </Typography>
            <Typography
              variant="h6"
              mt={2}
              mb={2}
              sx={{
                color: "primary",
              }}
              align="center"
            >
              {t("freePositions")}
            </Typography>
            <Button
              color="secondary"
              variant="contained"
              sx={{
                marginTop: "5px",
                height: "3rem",
                color: "white",
                textTransform: "none",
              }}
            >
              {t("jobsButton")}
            </Button>
          </Grid>
          {isDesktop && (
            <CardMedia
              component="img"
              sx={{ height: "auto", maxWidth: "100%", width: "50%" }}
              image={marketing}
            />
          )}
        </CardContent>
      </Box>
      <Box boxShadow={3} mb={3.5}>
        <CardContent
          sx={isDesktop && { display: "flex", alignItems: "center" }}
        >
          <CardMedia
            component="img"
            sx={
              isDesktop
                ? { height: "auto", maxWidth: "100%", width: "50%" }
                : { height: "auto", maxWidth: "100%", width: "100%" }
            }
            image={support}
          />
          <Grid
            container
            direction="column"
            alignItems="center"
            sx={{ width: "100%" }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "primary",
              }}
              align="center"
            >
              {t("support")}
            </Typography>
            <Typography
              variant="h6"
              mt={2}
              mb={2}
              sx={{
                color: "primary",
              }}
              align="center"
            >
              {t("freePositions")}
            </Typography>
            <Button
              color="yellow"
              variant="contained"
              sx={{
                marginTop: "5px",
                height: "3rem",
                color: "white",
                textTransform: "none",
              }}
            >
              {t("jobsButton")}
            </Button>
          </Grid>
        </CardContent>
      </Box>
      <CardContent sx={isDesktop && { display: "flex", alignItems: "center" }}>
        <Grid
          container
          direction="column"
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "primary",
              fontWeight: "bold",
            }}
            align="center"
          >
            {t("allJobs")}
          </Typography>
          <Typography
            variant="h6"
            mt={2}
            mb={2}
            sx={{
              color: "primary",
            }}
            align="center"
          >
            {t("allJobsText")}
          </Typography>
          <Button
            onClick={() => navigate(`/alljobs`)}
            color="mint"
            variant="contained"
            sx={{
              marginTop: "5px",
              height: "3rem",
              color: "white",
              textTransform: "none",
            }}
          >
            {t("jobsButton")}
          </Button>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Home;
