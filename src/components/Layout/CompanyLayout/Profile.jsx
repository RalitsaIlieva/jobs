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
        {t("companyProfile")}
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
            name="companyPicture"
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <label
                for="companyPicture"
                style={{ height: "150px", textAlign: "center" }}
              >
                <Input
                  sx={{ display: "none" }}
                  value={value?.fileName}
                  onChange={(event) => {
                    onChange(event.target.files[0]);
                  }}
                  type="file"
                  id="companyPicture"
                />
                <img
                  src="https://placehold.co/150x150"
                  alt="Company"
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
          <Typography mb={-1}>{t("companyName")}</Typography>
          <Controller
            name="companyName"
            control={control}
            rules={{ required: t("validations:required") }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                size="small"
                error={!!error}
                onChange={onChange}
                value={value}
                variant="outlined"
                label={t("enterCompanyName")}
                helperText={errors.companyName?.message}
                fullWidth
              />
            )}
          />
          <Typography mb={-1}>{t("vatNumber")}</Typography>
          <Controller
            name="vatNumber"
            control={control}
            rules={{ required: t("validations:required") }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                size="small"
                error={!!error}
                onChange={onChange}
                value={value}
                variant="outlined"
                helperText={errors.vatNumber?.message}
                label={t("enterVAT")}
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
          <Typography mb={-1}>{t("website")}</Typography>
          <Controller
            name="website"
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                size="small"
                error={!!error}
                onChange={onChange}
                value={value}
                variant="outlined"
                label={t("enterWebsiteLabel")}
                fullWidth
              />
            )}
          />
          <Typography mb={-1}>{t("shortInfo")}</Typography>
          <Controller
            name="shortInfo"
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                size="normal"
                error={!!error}
                onChange={onChange}
                value={value}
                label={t("shortInfoForTheCompany")}
                variant="outlined"
                sx={{ width: "100%" }}
                inputProps={{
                  style: {
                    height: "10em",
                  },
                }}
              />
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

export default Profile;
