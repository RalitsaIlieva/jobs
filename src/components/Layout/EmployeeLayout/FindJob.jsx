import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const categories = [
  { name: "Backend Development", subcategories: ["Java", "PHP", "Phyton"] },
  {
    name: "Frontend Development",
    subcategories: ["JavaScript", "React", "Vue.js"],
  },
  {
    name: "Full Stack Development",
    subcategories: ["Java & Angular", "Java && React", "React && Node.js"],
  },
  {
    name: "Infrastructure",
    subcategories: ["DevOps", "Database Engineer", "Cybersecurity"],
  },
  { name: "Mobile Development", subcategories: ["Android", "iOS"] },
  { name: "Quality Assurance", subcategories: ["Automation QA", "Manual QA"] },
  {
    name: "PM/BA and more",
    subcategories: ["IT Business Analyst", "IT Project Management"],
  },
  { name: "ERP/CRM Development", subcategories: ["Sales Force", "SAP"] },
  { name: "Data Science", subcategories: ["ETL/Data Warehouse", "Big Data"] },
];

const FindJob = () => {
  const { control, handleSubmit } = useForm();
  const { t } = useTranslation("translation");
  const navigate = useNavigate();

  const [cat, setCat] = useState("");
  const [chosen, setChosen] = useState();
  const handleChange = (event) => {
    setCat(event.target.value);
    setChosen(event.target.value);
  };
  const onSubmit = () => {
    if (!chosen) {
      navigate("/alljobs");
    } else {
      navigate(`/${chosen}`);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid
        container
        pt={4}
        mb={2}
        spacing={4}
        justifyContent="center"
        sx={{ backgroundColor: "white" }}
        alignContent="start"
      >
        <Typography
          variant="h4"
          justifySelf="center"
          textAlign="center"
          width="100%"
          mt={3}
          mb={3}
          sx={{ fontWeight: "bold" }}
        >
          {t("findJobHeading")}
        </Typography>
        {categories.map((category, index) => (
          <Grid key={index} sx={{ width: "20em" }} mt={2}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth sx={{ backgroundColor: "white" }}>
                <InputLabel>{category.name}</InputLabel>
                <Controller
                  name="category"
                  control={control}
                  defaultValue=""
                  render={({ field: { onChange, value } }) => (
                    <Select value={cat} onChange={handleChange}>
                      {category.subcategories.map((sub, index) => (
                        <MenuItem key={index} value={sub}>
                          {sub}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
              </FormControl>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Button
        color="primary"
        type="submi"
        variant="contained"
        sx={{ margin: "auto", display: "block", height: "3rem", width: "20em" }}
      >
        {t("jobsButton")}
      </Button>
    </form>
  );
};

export default FindJob;
