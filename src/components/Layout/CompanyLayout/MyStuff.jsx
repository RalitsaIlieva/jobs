import { useTranslation } from "react-i18next";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import MyJobs from "./MyJobs";
import { useState } from "react";
import MyQuestionnaires from "./MyQuestionnaires";
import Paper from "@mui/material/Box";

const MyStuff = () => {
  const { t } = useTranslation("translation");
  const [openMyJobs, setOpenMyJobs] = useState(false);
  const [openMyQuestionnaires, setOpenMyQuestionnaires] = useState(false);

  const openMyJobsClick = () => {
    setOpenMyJobs(true);
  };
  const openMyQuestionnairesClick = () => {
    setOpenMyQuestionnaires(true);
  };

  if (openMyJobs) return <MyJobs />;
  if (openMyQuestionnaires) return <MyQuestionnaires />;

  return (
    <Paper pt={5.5} pb={2} sx={{ backgroundColor: "rgb(243 244 246)" }}>
      <Box
        textAlign="center"
        boxShadow={3}
        mb={4}
        pt={8}
        pb={8}
        sx={{ backgroundColor: "white" }}
      >
        <Button
          onClick={openMyJobsClick}
          sx={{
            background: "#004AAD",
            color: "white",
            height: "10em",
            width: "15em",
            margin: "3em",
          }}
        >
          {t("myJobs")}
        </Button>
        <Button
          onClick={openMyQuestionnairesClick}
          sx={{
            background: "#004AAD",
            color: "white",
            height: "10em",
            width: "15em",
            margin: "3em",
          }}
        >
          {t("myQuestionnaires")}
        </Button>
      </Box>
    </Paper>
  );
};

export default MyStuff;
