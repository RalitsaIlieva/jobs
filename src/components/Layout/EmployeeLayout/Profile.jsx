import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid2";
import { useForm, Controller } from "react-hook-form";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useTheme } from "@mui/material/styles";
import Input from "@mui/material/Input";
import useMediaQuery from "@mui/material/useMediaQuery";

const Profile = () => {
  const { t } = useTranslation("translation");
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const onSubmit = (data) => {
    try {
      alert(t("success"));
    } catch (error) {
      alert(t("fail"));
    }
  };

  return (
    <Box sx={{ width: isDesktop ? "50%" : "90%", margin: "0 auto" }}>
      <Typography
        variant="h4"
        textAlign="center"
        mt={3}
        mb={3}
        sx={{ fontWeight: "bold" }}
      >
        {t("profile")}
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
          <Controller
            name="picture"
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <label
                for="picture"
                style={{ height: "150px", textAlign: "center" }}
              >
                <Input
                  sx={{ display: "none" }}
                  value={value?.fileName}
                  onChange={(event) => {
                    onChange(event.target.files[0]);
                  }}
                  type="file"
                  id="picture"
                />
                <img
                  src="https://placehold.co/150x150"
                  alt="Profile"
                  height="auto"
                  style={{
                    borderRadius: "9999px",
                    width: isDesktop ? "30%" : "50%",
                    margin: "0 auto",
                  }}
                />
              </label>
            )}
          />
          <Typography mb={-1}>{t("firstName")}</Typography>
          <Controller
            name="firstName"
            control={control}
            rules={{ required: t("validations:required") }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                size="small"
                error={!!error}
                onChange={onChange}
                value={value}
                variant="outlined"
                label={t("insertName")}
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
                label={t("insertLastName")}
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
                label={t("enterEmail")}
                fullWidth
              />
            )}
          />
          <Typography mb={-1}>{t("cv")}</Typography>

          <Controller
            name="cv"
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <label for="cv">
                <Input
                  type="file"
                  value={value?.fileName}
                  onChange={(event) => {
                    onChange(event.target.files[0]);
                  }}
                  id="cv"
                />
              </label>
            )}
          />
        </Grid>
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
          {t("edit")}
        </Button>
      </form>
    </Box>
  );
};

export { Profile };
