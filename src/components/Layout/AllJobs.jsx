import Paper from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";

const jobs = [
  { heading: "Java Mid Developer", tech: "Java, Spring" },
  { heading: "Java Regular Developer", tech: "Java, Hibernate" },
  { heading: "JavaScript Developer", tech: "JavaScript, React" },
  { heading: "C# Developer", tech: "C#" },
];
const AllJobs = () => {
  const { t } = useTranslation("translation");

  return (
    <Paper pt={5.5} pb={2} sx={{ backgroundColor: "rgb(243 244 246)" }}>
      <Box boxShadow={3} mb={4} pt={8} pb={8} sx={{ backgroundColor: "white" }}>
        <Typography
          variant="h4"
          textAlign="center"
          sx={{ fontWeight: "bold", marginBottom: "1em" }}
        >
          {t("freePositions")}
        </Typography>
        {jobs.map((job) => (
          <Box
            boxShadow={3}
            mb={4}
            pt={2}
            pb={2}
            sx={{ backgroundColor: "white" }}
          >
            <Typography
              variant="h6"
              textAlign="center"
              sx={{ fontWeight: "bold", marginBottom: "1em" }}
            >
              {job.heading}
            </Typography>
            <Typography textAlign="center" sx={{ marginBottom: "1em" }}>
              {t("technologies") + ": " + job.tech}
            </Typography>
          </Box>
        ))}
      </Box>
    </Paper>
  );
};

export default AllJobs;
