import { useTranslation } from "react-i18next";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const MyQuestionnaires = () => {
  const { t } = useTranslation("translation");
  const questionnaires = [
    { name: "React developer Template", date: "01/10/2024", level: "mid" },
    { name: "Java developer Template", date: "01/10/2024", level: "senior" },
  ];

  return (
    <TableContainer component={Paper}>
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
            {questionnaires.map((questionnaire) => (
              <TableRow key={questionnaire.name}>
                <TableCell component="th" scope="row">
                  {questionnaire.name}
                </TableCell>
                <TableCell align="right">{questionnaire.date}</TableCell>
                <TableCell align="right">{questionnaire.level}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
    </TableContainer>
  );
};

export default MyQuestionnaires;
