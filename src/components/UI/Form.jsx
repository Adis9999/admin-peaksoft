import { useState } from "react";
import {
  Box,
  Container,
  styled,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
import UIButton from "./Button";
import { useDispatch } from "react-redux";
import { createBanner, updateBanner } from "../../store/slices/bannersSlice";

const Form = ({
  initialData = {
    title: "",
    startDate: "",
    endDate: "",
  },
  onCancel,
}) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialData);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      setError("Название обязательно!");
      return;
    }

    try {
      if (initialData.id) {
        await dispatch(updateBanner({ id: initialData.id, data: formData }));
      } else {
        await dispatch(createBanner(formData));
        setFormData({ title: "", startDate: "", endDate: "" });
      }

      onCancel();
    } catch (err) {
      console.log(err);
    }
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

      {error && <Alert severity="error">{error}</Alert>}

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
