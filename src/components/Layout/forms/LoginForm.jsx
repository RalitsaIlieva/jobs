import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid2";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const LoginForm = ({onLogin, role}) => {
  const { t } = useTranslation("translation");
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const onSubmit = (data) => {
    try {
      if (
        data.email ===
        JSON.parse(localStorage.getItem("submissionEmployeeEmail")) &&
        data.password ===
        JSON.parse(localStorage.getItem("submissionEmployeePassword")) && role.employee
      ) {
        onLogin(data.email, data.password);
        localStorage.setItem("isEmployeeLogged", true)
        localStorage.setItem("isCompany", false)
        window.dispatchEvent(new Event("storage"));
        navigate(`/`);
      }
       else if (
        data.email ===
          JSON.parse(localStorage.getItem("submissionCompanyEmail")) &&
        data.password ===
          JSON.parse(localStorage.getItem("submissionCompanyPassword"))
      ) {
        onLogin(data.email, data.password);
        localStorage.setItem("isCompanyLogged", true)
        localStorage.setItem("isCompany", true)
        window.dispatchEvent(new Event("storage"));
        navigate(`/company`);
      } else {
        alert(t("fail"));
      }
    } catch (error) {
      console.log(error)
      alert(t("fail"));
    }
  };

  return (
    <Grid
      item
      sx={{ backgroundColor: "white", width: isDesktop ? "30%" : "80%", marginBottom: "4em" }}
    >
      <Typography
        variant="h6"
        textAlign="center"
        mt={3}
        mb={3}
        sx={{ fontWeight: "bold" }}
      >
        {t("login")}
      </Typography>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ width: "90%", margin: "0 auto" }}
      >
        <Grid
          item
          container
          direction="column"
          spacing={2}
          sx={{ [theme.breakpoints.up("md")]: { marginTop: "4px" } }}
        >
          <Typography mb={-1}>{t("email")}</Typography>
          <Controller
            name="email"
            control={control}
            rules={{ required: t("validations:required") }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                type="email"
                size="small"
                error={!!error}
                onChange={onChange}
                value={value}
                variant="outlined"
                helperText={errors.email?.message}
                fullWidth
              />
            )}
          />
          <Typography mb={-1}>{t("password")}</Typography>
          <Controller
            name="password"
            control={control}
            rules={{ required: t("validations:required") }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                type="password"
                size="small"
                error={!!error}
                onChange={onChange}
                value={value}
                variant="outlined"
                helperText={errors.password?.message}
                fullWidth
              />
            )}
          />
        </Grid>
        <Button
          color="primary"
          type="submit"
          variant="contained"
          sx={{ marginTop: "15px", marginBottom: "15px", height: "3rem" }}
          fullWidth
        >
          {t("login")}
        </Button>
      </form>
    </Grid>
  );
};

export default LoginForm;
