import { useTranslation } from "react-i18next";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const MyJobs = () => {
  const { t } = useTranslation("translation");
  const jobs = [
    { name: "React developer", date: "14/10/2024", level: "mid" },
    { name: "Java developer", date: "15/10/2024", level: "senior" },
  ];

  return (
    <TableContainer
      component={Paper}
      pt={5.5}
      pb={2}
      sx={{ backgroundColor: "rgb(243 244 246)" }}
    >
      <Box boxShadow={3} mt={3} mb={14} pt={8} pb={8} sx={{ backgroundColor: "white" }}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>{t("position")}</TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                {t("publishedDate")}
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                {t("level")}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {jobs.map((job) => (
              <TableRow key={job.name}>
                <TableCell component="th" scope="row">
                  {job.name}
                </TableCell>
                <TableCell align="right">{job.date}</TableCell>
                <TableCell align="right">{job.level}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </TableContainer>
  );
};

export default MyJobs;
