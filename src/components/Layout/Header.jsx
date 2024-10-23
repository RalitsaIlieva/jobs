import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from "../../lib/pictures/logo.png";
import alternativeLogo from "../../lib/pictures/alternativeLogo.png";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import ClearIcon from "@mui/icons-material/Clear";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Header = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const [value, setValue] = useState(0);
  const [openLoginDialog, setOpenLoginDialog] = useState(false);
  const [loggedCompany, setLoggedCompany] = useState(
    localStorage.getItem("isCompanyLogged") === true ? true : false
  );
  const [loggedEmployee, setLoggedEmployee] = useState(
    localStorage.getItem("isEmployeeLogged") === true ? true : false
  );
  const [isCompany, setIsCompany] = useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { t } = useTranslation("translation");
  const handleClickOpenLoginDialog = () => {
    setOpenLoginDialog(true);
  };
  const handleClickOpenCompanyLoginDialog = () => {
    setOpenLoginDialog(true);
    setIsCompany(true);
  };
  const handleCloseLoginDialog = () => {
    setOpenLoginDialog(false);
    setIsCompany(false);
  };
  const Logout = () => {
    setLoggedCompany(localStorage.setItem("isCompanyLogged", false));
    setLoggedEmployee(localStorage.setItem("isEmployeeLogged", false));
  };
  useEffect(() => {
    const checkUserData = () => {
      const user = JSON.parse(localStorage.getItem("isEmployeeLogged"));

      if (user) {
        setLoggedEmployee(true);
        setLoggedCompany(false);
      }
    };
    window.addEventListener("storage1", checkUserData);

    return () => {
      window.removeEventListener("storage1", checkUserData);
    };
  }, []);

  useEffect(() => {
    const checkUserData = () => {
      const userCompany = JSON.parse(localStorage.getItem("isCompanyLogged"));
      if (userCompany) {
        setLoggedCompany(true);
        setLoggedEmployee(false);
      }
    };
    window.addEventListener("storage", checkUserData);

    return () => {
      window.removeEventListener("storage", checkUserData);
    };
  }, []);
  const LoginDialog = () => {
    return (
      <Dialog
        open={openLoginDialog}
        onClose={handleCloseLoginDialog}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            const password = formJson.password;
            if (
              email ===
                JSON.parse(localStorage.getItem("submissionCompanyEmail")) &&
              password ===
                JSON.parse(localStorage.getItem("submissionCompanyPassword")) &&
              isCompany
            ) {
              setLoggedCompany(true);
              navigate(`/createjobs`);
            } else if (
              email ===
                JSON.parse(localStorage.getItem("submissionEmployeeEmail")) &&
              password ===
                JSON.parse(
                  localStorage.getItem("submissionEmployeePassword")
                ) &&
              !isCompany
            ) {
              setLoggedEmployee(true);
              navigate(`/findjob`);
            } else {
              alert(t("fail"));
            }
            handleCloseLoginDialog();
          },
        }}
      >
        <ClearIcon
          fontSize="small"
          sx={{ marginLeft: "1em", marginTop: "1em" }}
          onClick={handleCloseLoginDialog}
        />
        <DialogTitle sx={{ textAlign: "center" }}>
          {!isCompany ? t("employeeLogin") : t("companyLogin")}
        </DialogTitle>
        <DialogContent>
          <Grid
            item
            container
            direction="column"
            spacing={2}
            sx={{ [theme.breakpoints.up("md")]: { marginTop: "4px" } }}
          >
            <Typography mb={-1}>{t("userName")}</Typography>
            <TextField
              type="email"
              size="small"
              variant="outlined"
              fullWidth
              name="email"
              label={t("labelUserName")}
            />
            <Typography mb={-1}>{t("password")}</Typography>
            <TextField
              type="password"
              size="small"
              variant="outlined"
              fullWidth
              name="password"
              label={t("labelPassword")}
            />
          </Grid>
          <DialogActions>
            <Button
              color="primary"
              type="submit"
              variant="contained"
              sx={{
                marginTop: "15px",
                marginBottom: "15px",
                height: "3rem",
                textTransform: "none",
              }}
              fullWidth
            >
              {t("login")}
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    );
  };
  console.log(loggedEmployee);
  return (
    <>
      <Grid
        container
        justifyContent="space-between"
        spacing={2}
        alignItems={!isDesktop && "center"}
        pt={2.5}
        pb={2.5}
        direction={!isDesktop ? "column" : "row"}
      >
        {value === 0 ? (
          <img
            src={logo}
            alt="Logo"
            width="50"
            height="50"
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/`)}
          />
        ) : (
          <img
            src={alternativeLogo}
            alt="Alternative logo"
            height="50"
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/`)}
          />
        )}
        <Grid container item>
          <Tabs
            value={value}
            onChange={handleChange}
            TabIndicatorProps={{
              style: {
                display: "none",
              },
            }}
            sx={{
              "& .MuiTabs-flexContainer": {
                flexWrap: "wrap",
              },
            }}
          >
            {!loggedCompany && (
              <Tab label={t("firstTab")} component={Link} to="/" />
            )}
            {loggedCompany && (
              <Tab label={t("firstTab")} component={Link} to="/company" />
            )}
            {!loggedCompany && !loggedEmployee && (
              <Tab
                label={t("findJobTab")}
                onClick={handleClickOpenLoginDialog}
              />
            )}
            {loggedEmployee && (
              <Tab label={t("findJobTab")} component={Link} to="/findjob" />
            )}
            <LoginDialog />
            {!loggedCompany && !loggedEmployee && (
              <Tab
                label={t("createTab")}
                onClick={handleClickOpenCompanyLoginDialog}
              />
            )}
            {loggedCompany && (
              <Tab label={t("createTab")} component={Link} to="/createjobs" />
            )}
            {loggedCompany && (
              <Tab
                label={t("createQuestionnaireTab")}
                component={Link}
                to="/createquestionnaire"
              />
            )}
            {loggedCompany && (
              <Tab label={t("myStuff")} component={Link} to="/mystuff" />
            )}
            {loggedCompany && (
              <Tab label={t("cvLibrary")} component={Link} to="/cvlibrary" />
            )}
            {loggedCompany && (
              <Tab label={t("profile")} component={Link} to="/companyprofile" />
            )}
            {!loggedCompany && (
              <Tab label={t("aboutTab")} component={Link} to="/about" />
            )}
            {!loggedCompany && (
              <Tab label={t("contactTab")} component={Link} to="/contacts" />
            )}
            {!loggedCompany && (
              <Tab label={t("blogTab")} component={Link} to="/blog" />
            )}
            {loggedEmployee && (
              <Tab label={t("profile")} component={Link} to="/profile" />
            )}
          </Tabs>
        </Grid>
        {!loggedCompany && !loggedEmployee ? (
          <Box
            component={Link}
            to="/login"
            sx={{
              color: "primary.main",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            {t("loginTab")}
          </Box>
        ) : (
          <Box
            component={Link}
            onClick={() => Logout()}
            to="/"
            sx={{
              color: "primary.main",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            {t("logoutTab")}
          </Box>
        )}
      </Grid>
      <Divider />
    </>
  );
};

export default Header;
