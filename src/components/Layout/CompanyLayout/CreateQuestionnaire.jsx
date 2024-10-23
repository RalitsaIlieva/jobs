import { useTranslation } from "react-i18next";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useState } from "react";
import Paper from "@mui/material/Box";

const CreateQuestionnaire = () => {
  const { t } = useTranslation("translation");
  const [openCreateQuestionnaire, setOpenCreateQuestionnaire] = useState(false);
  const [openCreateTemplate, setOpenCreateTemplate] = useState(false);
  const [openUseTemplate, setOpenUseTemplate] = useState(false);

  const openCreateQuestionnaireClick = () => {
    setOpenCreateQuestionnaire(true);
  };
  const openUseTemplateClick = () => {
    setOpenUseTemplate(true);
  };
  const openCreateTemplateClick = () => {
    setOpenCreateTemplate(true);
  };

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
          onClick={openCreateQuestionnaireClick}
          sx={{
            background: "#004AAD",
            color: "white",
            height: "10em",
            width: "15em",
            margin: "3em",
          }}
        >
          {t("createQuestionnaire")}
        </Button>
        <Button
          onClick={openUseTemplateClick}
          sx={{
            background: "#004AAD",
            color: "white",
            height: "10em",
            width: "15em",
            margin: "3em",
          }}
        >
          {t("useTemplate")}
        </Button>
        <Button
          onClick={openCreateTemplateClick}
          sx={{
            background: "#004AAD",
            color: "white",
            height: "10em",
            width: "15em",
            margin: "3em",
          }}
        >
          {t("createTemplate")}
        </Button>
      </Box>
    </Paper>
  );
};

export default CreateQuestionnaire;
