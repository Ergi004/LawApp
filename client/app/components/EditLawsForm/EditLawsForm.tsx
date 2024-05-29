import { IAllCategories, ICreateCategory } from "@/app/models/categoryModel";
import { HandlePartClick } from "@/app/models/functions";
import { IGetAllLaws, ICreateLaw } from "@/app/models/lawModel";
import { IAllParts, ICreatePart } from "@/app/models/partModel";
import { Grid, Box, Card, Typography, TextField, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Part } from "../../models/partModel";
import LawApi from "../../api/lawApi";
import PartApi from "../../api/partApi";
import CategoryApi from "../../api/categoryApi";


const EditLawsForm = () => {
  const [parts, setParts] = useState<IAllParts[]>([]);
  const [categories, setCategories] = useState<IAllCategories[]>([]);
  const [laws, setLaws] = useState<IGetAllLaws[]>([]);
  const [createPart, setCreatePart] = useState<ICreatePart>();
  const [createCategory, setCreateCategory] = useState<ICreateCategory>();
  const [createLaw, setCreateLaw] = useState<ICreateLaw>();

  const getAllLaws = async () => {
    const resposne = await LawApi.getAllLaws(laws);
    setLaws(resposne.data);
  };

  const handlePartClick: HandlePartClick = async (
    part: Part | ICreateCategory
  ) => {
    const response = await CategoryApi.getCategoryByPartId(
      part.part_id as number
    );
    setCategories(response.data.data);
  };
  const getAllParts = async () => {
    const response = await PartApi.getAllParts(parts);
    setParts(response);
  };

  const addPart = async () => {
    const response = await PartApi.createPart(createPart as ICreatePart);
    setCreatePart(response.data);
    getAllParts();
    console.log("Part Succesfully Added", createPart);
  };

  const addCategory = async () => {
    const response = await CategoryApi.createCategory(
      createCategory as ICreateCategory
    );
    setCreateCategory(response.data);
    handlePartClick(response.data);
    console.log("Category Succesfully Added", createCategory);
  };

  const addLaw = async () => {
    const response = await LawApi.createLaw(createLaw as ICreateLaw);
    setCreateLaw(response.data);
    console.log("Law Succesfully Added", createLaw);
  };
  useEffect(() => {
    getAllParts();
    getAllLaws();
  }, []);

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={12} lg={13} xl={12}>
        <Box
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            minHeight: 240,
            boxShadow: 10,
            backgroundColor: "white",
            marginLeft: '150px'
          }}
        >
          <Card sx={{ margin: "20px" }}>
            <Box
              sx={{
                borderBottom: "0.5px #222222 solid",
                margin: "10px",
              }}
            >
              <Typography
                sx={{ margin: "10px 40px", fontWeight: "bold" }}
                variant="h5"
              >
                Fill the forms to add Parts
              </Typography>
            </Box>
            <Box
              sx={{
                margin: "20px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <TextField
                id="outlined-basic"
                label="Part Number"
                variant="outlined"
                value={createPart?.part_number}
                onChange={(e) =>
                  setCreatePart((prev: any) => ({
                    ...prev,
                    part_number: e.target.value,
                  }))
                }
                sx={{ margin: "0 30px", maxWidth: "400px" }}
              />
              <TextField
                id="outlined-basic"
                label="Part Title"
                value={createPart?.part_title}
                onChange={(e) =>
                  setCreatePart((prev: any) => ({
                    ...prev,
                    part_title: e.target.value,
                  }))
                }
                variant="outlined"
                sx={{ margin: "0 30px", maxWidth: "400px" }}
              />
              <Button
                onClick={() => addPart()}
                variant="contained"
                sx={{ maxWidth: "130px", height: "35px" }}
              >
                Add Part
              </Button>
            </Box>
          </Card>
          <Card sx={{ margin: "20px" }}>
            <Box
              sx={{
                borderBottom: "0.5px black solid",
                margin: "10px",
              }}
            >
              <Typography
                sx={{ margin: "10px 40px", fontWeight: "bold" }}
                variant="h5"
              >
                Fill the forms to add Categories
              </Typography>
            </Box>
            <Box
              sx={{
                margin: "20px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <TextField
                id="outlined-basic"
                label="Category Number"
                variant="outlined"
                sx={{ margin: "0 30px", maxWidth: "400px" }}
                value={createCategory?.category_number}
                onChange={(e) =>
                  setCreateCategory((prev: any) => ({
                    ...prev,
                    category_number: e.target.value,
                  }))
                }
              />
              <TextField
                id="outlined-basic"
                label="Category Title"
                variant="outlined"
                sx={{ margin: "0 30px", maxWidth: "400px" }}
                value={createCategory?.category_title}
                onChange={(e) =>
                  setCreateCategory((prev: any) => ({
                    ...prev,
                    category_title: e.target.value,
                  }))
                }
              />
              <TextField
                id="outlined-basic"
                label="Part ID"
                variant="outlined"
                sx={{ margin: "0 30px", maxWidth: "400px" }}
                value={createCategory?.part_id}
                onChange={(e) =>
                  setCreateCategory((prev: any) => ({
                    ...prev,
                    part_id: e.target.value,
                  }))
                }
              />
              <Button
                variant="contained"
                sx={{ maxWidth: "130px", height: "35px" }}
                onClick={() => addCategory()}
              >
                Add Part
              </Button>
            </Box>
          </Card>
          <Card sx={{ margin: "20px" }}>
            <Box
              sx={{
                borderBottom: "0.5px  black solid",
                margin: "10px",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{ margin: "10px 40px", fontWeight: "bold" }}
                variant="h5"
              >
                Fill the forms to add Laws
              </Typography>
            </Box>
            <Box
              sx={{
                margin: "20px",
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              <TextField
                id="outlined-basic"
                label="Law Name"
                variant="outlined"
                sx={{ margin: "0 20px", maxWidth: "400px" }}
                value={createLaw?.law_name}
                onChange={(e) =>
                  setCreateLaw((prev: any) => ({
                    ...prev,
                    law_name: e.target.value,
                  }))
                }
              />
              <TextField
                id="outlined-basic"
                label="Law Description"
                multiline
                maxRows={50}
                sx={{ margin: "0 20px", width: "500px" }}
                value={createLaw?.law_description}
                onChange={(e) =>
                  setCreateLaw((prev: any) => ({
                    ...prev,
                    law_description: e.target.value,
                  }))
                }
              />
              <TextField
                id="outlined-basic"
                label="Category ID"
                variant="outlined"
                sx={{ margin: "0 20px", maxWidth: "400px" }}
                value={createLaw?.category_id}
                onChange={(e) =>
                  setCreateLaw((prev: any) => ({
                    ...prev,
                    category_id: e.target.value,
                  }))
                }
              />
              <TextField
                id="outlined-basic"
                label="Written Date"
                variant="outlined"
                sx={{ margin: "0 20px", maxWidth: "400px" }}
                value={createLaw?.written_date}
                onChange={(e) =>
                  setCreateLaw((prev: any) => ({
                    ...prev,
                    written_date: e.target.value,
                  }))
                }
              />
              <Button
                variant="contained"
                sx={{ maxWidth: "130px", height: "35px" }}
                onClick={() => addLaw()}
              >
                Add Part
              </Button>
            </Box>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
};

export default EditLawsForm;
