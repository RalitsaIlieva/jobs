import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid2";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useTheme } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";

const RegisterEmployeeForm = () => {
  const { t } = useTranslation("translation");
  const {
    formState: { errors },
    control,
    watch,
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const theme = useTheme();
  const onSubmit = (data) => {
    try {
      localStorage.setItem("submissionEmployeeEmail", JSON.stringify(data.email))
      localStorage.setItem("submissionEmployeePassword", JSON.stringify(data.password))
      alert(t("success"));
      navigate('/')
    } catch (error) {
      alert(t("fail"));
    }
  };

  return (
    <Grid
      item
      sx={{ backgroundColor: "white", width: "30%", marginBottom: "4em" }}
    >
      <Typography
        variant="h6"
        textAlign="center"
        mt={3}
        mb={3}
        sx={{ fontWeight: "bold" }}
      >
        {t("register")}
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
          <Typography mb={-1}>{t("firstName")}</Typography>
          <Controller
            name="fisrtName"
            control={control}
            rules={{ required: t("validations:required") }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                size="small"
                error={!!error}
                onChange={onChange}
                value={value}
                variant="outlined"
                helperText={errors.firstName?.message}
                fullWidth
              />
            )}
          />
          <Typography mb={-1}>{t("lastName")}</Typography>
          <Controller
            name="lastName"
            control={control}
            rules={{ required: t("validations:required") }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                size="small"
                error={!!error}
                onChange={onChange}
                value={value}
                variant="outlined"
                helperText={errors.lastName?.message}
                fullWidth
              />
            )}
          />
          <Typography mb={-1}>{t("gsmOptional")}</Typography>
          <Controller
            name="gsm"
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                size="small"
                error={!!error}
                onChange={onChange}
                value={value}
                variant="outlined"
                helperText={errors.gsm?.message}
                fullWidth
              />
            )}
          />
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
            rules={{
              required: t("validations:required"),
              minLength: {
                value: 8,
                message: t("validations:minLength", { number: 8 }),
              },
            }}
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
          <Typography mb={-1}>{t("confirmPassword")}</Typography>
          <Controller
            name="confirmPassword"
            control={control}
            rules={{
              required: t("validations:required"),
              validate: (val) => {
                if (watch("password") !== val) {
                  return "Your passwords do no match";
                }
              },
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                type="password"
                size="small"
                error={!!error}
                onChange={onChange}
                value={value}
                variant="outlined"
                helperText={errors.confirmPassword?.message}
                fullWidth
              />
            )}
          />
          <Controller
            name="gtc"
            control={control}
            rules={{ required: t("validations:required") }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <FormGroup>
                <FormControlLabel
                  required
                  error={!!error}
                  onChange={onChange}
                  value={value}
                  variant="outlined"
                  helperText={errors.gtc?.message}
                  fullWidth
                  control={<Checkbox />}
                  label={
                    <div>
                      <span>I agree to the </span>
                      <Link onClick={() => window.scrollTo(0, 0)} to={"/privacy"}>
                        General Conditions
                      </Link>
                      <span> and </span>
                      <Link onClick={() => window.scrollTo(0, 0)} to={"/privacy"}>
                        Privacy Notice.
                      </Link>
                    </div>
                  }
                />
              </FormGroup>
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
          {t("register")}
        </Button>
      </form>
    </Grid>
  );
};

export default RegisterEmployeeForm;
