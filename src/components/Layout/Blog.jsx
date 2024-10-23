import Paper from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import { Trans } from 'react-i18next'

const Blog = () => {
  const { t } = useTranslation("translation");

  return (
    <Paper ml={4} mr={4}>
      <Typography
        variant="h4"
        textAlign="center"
        mt={6}
        sx={{ fontWeight: "bold" }}
      >
        {t("blogHeaderText")}
      </Typography>
      <Typography sx={{textAlign:"center",color: "rgb(107 114 128)"}}>
      <Trans i18nKey="authorAndDateOfBlog"  />
      </Typography>
      <Box sx={{textAlign: "center"}} mb={3} mt={3}>
        <img
          src="https://placehold.co/800x400"
          alt="Blog"
          width="70%"
          style={{ borderRadius: "9px", textAlign: "center" }}
        />
      </Box>
      <Typography variant="h6" mt={2} sx={{width: "80%", margin: "0 auto" }}>
        {t("blogText")}
      </Typography>
    </Paper>
  );
};

export default Blog;
