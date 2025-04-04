import { useState } from "react";
import { Box, Container, styled, TextField, Typography } from "@mui/material";
import UIButton from "./Button";

const Form = ({
  initialData = {
    title: "",
    startDate: "",
    endDate: "",
  },
  onCancel,
  onSubmit,
}) => {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Container
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: "400px",
        padding: "30px",
        backgroundColor: "white",
        borderRadius: "8px",
      }}
    >
      <Typography paddingBottom={"30px"} variant="h6">
        {initialData.id ? "Редактировать" : "Создать"}
      </Typography>

      <Box paddingBottom={"20px"}>
        <Typography paddingBottom={"14px"}>Название</Typography>
        <TextField
          fullWidth
          placeholder="Напишите название"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </Box>

      <BoxFor2Inputs>
        <Box width="48%">
          <Typography paddingBottom={"14px"}>От</Typography>
          <TextField
            fullWidth
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Box>
        <Box width="48%">
          <Typography paddingBottom={"14px"}>До</Typography>
          <TextField
            fullWidth
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Box>
      </BoxFor2Inputs>

      <Box>
        <UIButton type="button" color="secondary" onClick={onCancel}>
          Отмена
        </UIButton>
        <UIButton type="submit" variant="contained">
          {initialData.id ? "Сохранить" : "Создать"}
        </UIButton>
      </Box>
    </Container>
  );
};

export default Form;

const BoxFor2Inputs = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  paddingBottom: "30px",
});
