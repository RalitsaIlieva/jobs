import Paper from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid2";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";

const Contact = () => {
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
      alert(t("success"));
      navigate(`/`);
    } catch (error) {
      alert(t("fail"));
    }
  };
  return (
    <Paper ml={4} mr={4}>
      <Typography
        variant="h4"
        textAlign="center"
        mt={6}
        mb={3}
        sx={{ fontWeight: "bold" }}
      >
        {t("contactUs")}
      </Typography>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ width: isDesktop ? "50%" : "90%", margin: "0 auto" }}
      >
        <Grid
          item
          xs={12}
          md={6}
          container
          direction="column"
          spacing={2}
          sx={{ [theme.breakpoints.up("md")]: { marginTop: "4px" } }}
        >
          <Typography sx={{ fontWeight: "bold" }} mb={-1}>
            {t("yourName")}
          </Typography>
          <Controller
            name="name"
            control={control}
            rules={{
              required: t("validations:required"),
              minLength: {
                value: 2,
                message: t("validations:minLength", { number: 2 }),
              },
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                size="normal"
                error={!!error}
                onChange={onChange}
                value={value}
                label={t("insertName")}
                variant="outlined"
                helperText={errors.name?.message}
                sx={{ width: "100%" }}
              />
            )}
          />
          <Typography sx={{ fontWeight: "bold" }} mb={-1}>
            {t("yourEmail")}
          </Typography>
          <Controller
            name="email"
            control={control}
            rules={{ required: t("validations:required") }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                type="email"
                size="normal"
                error={!!error}
                onChange={onChange}
                value={value}
                label={t("insertEmail")}
                variant="outlined"
                helperText={errors.email?.message}
                sx={{ width: "100%" }}
              />
            )}
          />
          <Typography sx={{ fontWeight: "bold" }} mb={-1}>
            {t("subjectOfTheMessage")}
          </Typography>
          <Controller
            name="subject"
            control={control}
            rules={{ required: t("validations:required") }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                size="normal"
                error={!!error}
                onChange={onChange}
                value={value}
                label={t("insertSubjectOfTheMessage")}
                variant="outlined"
                helperText={errors.subject?.message}
                sx={{ width: "100%" }}
              />
            )}
          />
          <Typography sx={{ fontWeight: "bold" }} mb={-1}>
            {t("message")}
          </Typography>
          <Controller
            name="message"
            control={control}
            rules={{
              required: t("validations:required"),
              minLength: {
                value: 10,
                message: t("validations:minLength", { number: 10 }),
              },
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                className="message"
                label={t("insertMessage")}
                multiline
                error={!!error}
                onChange={onChange}
                value={value}
                helperText={errors.message?.message}
                sx={{ width: "100%" }}
                inputProps={{
                  style: {
                    height: "10em",
                  },
                }}
              />
            )}
          />
          <Button
            color="primary"
            type="submit"
            variant="contained"
            sx={{ marginTop: "5px", height: "3rem" }}
          >
            {t("submitButton")}
          </Button>
        </Grid>
      </form>
    </Paper>
  );
};

export default Contact;
