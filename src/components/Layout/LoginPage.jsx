import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid2";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { useState } from "react";
import LoginForm from "./forms/LoginForm";
import RegisterEmployeeForm from "./forms/RegisterEmployeeForm";
import RegisterCompanyForm from "./forms/RegisterCompanyForm";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { t } = useTranslation("translation");
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState({
    first: true,
    second: false,
  });
  const [activeButtonRole, setActiveButtonRole] = useState({
    employee: true,
    company: false,
  });
  const clickedButtonHandlerOne = () => {
    setActiveButton({
      first: true,
      second: false,
    });
  };
  const clickedButtonHandlerTwo = () => {
    setActiveButton({
      first: false,
      second: true,
    });
  };
  const clickedEmployeeButtonHandler = (e) => {
    setActiveButtonRole({
      employee: true,
      company: false,
    });
  };
  const clickedCompanyButtonHandler = (e) => {
    setActiveButtonRole({
      employee: false,
      company: true,
    });
  };
  const onLogin = (email, password) => {
    if (
      email === JSON.parse(localStorage.getItem("submissionCompanyEmail")) &&
      password ===
        JSON.parse(localStorage.getItem("submissionCompanyPassword"))
    ) {
      localStorage.setItem("isCompanyLogged", true);
      window.dispatchEvent(new Event("storage"));
      navigate(`/createjobs`);
    } else if (
      email === JSON.parse(localStorage.getItem("submissionEmployeeEmail")) &&
      password ===
        JSON.parse(localStorage.getItem("submissionEmployeePassword")) 
    ) {
      localStorage.setItem("isEmployeeLogged", true)
      window.dispatchEvent(new Event("storage1"));
      navigate(`/findjob`);
    } else {
      alert(t("fail"));
    }
  };
  return (
    <Grid
      container
      alignItems="center"
      spacing={2}
      direction="column"
      sx={{ backgroundColor: "rgb(243 244 246)" }}
    >
      <Grid item mt={3}>
        <ButtonGroup
          disableElevation
          variant="contained"
          aria-label="Disabled button group"
        >
          <Button
            onClick={clickedButtonHandlerOne}
            sx={
              activeButton.first === false
                ? {
                    background: "#E5E7EB",
                    color: "#004AAD",
                    textTransform: "none",
                  }
                : {
                    background: "#004AAD",
                    color: "white",
                    textTransform: "none",
                  }
            }
          >
            {t("login")}
          </Button>
          <Button
            onClick={clickedButtonHandlerTwo}
            sx={
              activeButton.second === false
                ? {
                    background: "#E5E7EB",
                    color: "#004AAD",
                    textTransform: "none",
                  }
                : {
                    background: "#004AAD",
                    color: "white",
                    textTransform: "none",
                  }
            }
          >
            {t("register")}
          </Button>
        </ButtonGroup>
      </Grid>
      <Grid item mt={3}>
        <ButtonGroup
          disableElevation
          variant="contained"
          aria-label="Disabled button group"
        >
          <Button
            onClick={clickedEmployeeButtonHandler}
            sx={
              activeButtonRole.employee === false
                ? {
                    background: "#E5E7EB",
                    color: "#004AAD",
                    textTransform: "none",
                  }
                : {
                    background: "#004AAD",
                    color: "white",
                    textTransform: "none",
                  }
            }
          >
            {t("employee")}
          </Button>
          <Button
            onClick={clickedCompanyButtonHandler}
            sx={
              activeButtonRole.company === false
                ? {
                    background: "#E5E7EB",
                    color: "#004AAD",
                    textTransform: "none",
                  }
                : {
                    background: "#004AAD",
                    color: "white",
                    textTransform: "none",
                  }
            }
          >
            {t("company")}
          </Button>
        </ButtonGroup>
      </Grid>
      {activeButton.first && (
        <LoginForm role={activeButtonRole} onLogin={onLogin} />
      )}
      {activeButton.second && activeButtonRole.employee && (
        <RegisterEmployeeForm />
      )}
      {activeButton.second && activeButtonRole.company && (
        <RegisterCompanyForm />
      )}
    </Grid>
  );
};

export default LoginPage;
